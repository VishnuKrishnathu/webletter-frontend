import React, { useState, useEffect} from 'react';
import NavBar from '@/components/Navbar';
import CheckAuth from '@/components/CheckAuth';
import dynamic from 'next/dynamic';
import { apiAxios } from '@/constants/axios.config';
import Cookies from 'js-cookie';
import { store } from '@/store/store';
import { notificationState, editorTitle, editorSummary } from '@/store/actions/action';

const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});
const DynamicCSRF = dynamic(() => import('@/components/GetCSRF'), {ssr :false});

export default function ComposeArticle() {
    let editorData:string = "";

    const textEditorObj = (body :string) :void => {
        editorData = body;
        let { title } : {title :string}= store.getState().editor;
        let { summary } : {summary :string}= store.getState().editor;
        if(title == "" || summary == "") return

        let cookies = Cookies.get('csrftoken')
        apiAxios.post('/post-blog/', {
            title, summary,
            article: editorData
        }, {
            headers: {
                'X-CSRFToken' : cookies ? cookies : ''
            }
        }).then(({data}) => {
            location.reload();
            store.dispatch(notificationState("Article composed"));
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <CheckAuth />
            <DynamicCSRF />
            <NavBar />
            <Title />
            <Summary />
            <DynamicTextEditor editorData={textEditorObj}/>
        </div>
    )
}

interface IText{
  getText: (body ?:string, inputName ?:string) => {title :string, summary :string};
}

export const Title = () => {
    const [ length, setLength ] = useState<number>(0);
    const [ value, setValue ] = useState<string>(() => {
        let { title } : {title :string}= store.getState().editor;
        return title;
    });

    useEffect(() => {
        let subscriber = store.subscribe(() => {
            const { title } : {title :string}= store.getState().editor;
            setValue((val) => {
                if(val == title) return val;
                return title;
            })
        })

        return () => subscriber()
    }, [])

    return (
        <section className='mx-4 mt-5'>
            <label htmlFor="post-title" className='mr-2 font-semibold text-ml flex justify-between'>
                <span>Title :</span>
                {length <=50 && <span>{length} /50</span>}
                {length >50 && <span className='text-red-600'>{length} /50</span>}
            </label>
            <input 
                name="post-title"
                className='w-[100%] p-2 border-2 border-indigo-900 outline-none'
                type="text"
                value={value}
                onChange={(e) => {
                    setLength(e.target.value.length);
                    store.dispatch(editorTitle(e.target.value))
                }}
            />
        </section>
    )
}

export const Summary = () => {
    const [ length, setLength ] = useState<number>(0);
    const [ value, setValue ] = useState<string>(() => {
        const { summary } :{summary :string} = store.getState().editor;
        return summary;
    });

    useEffect(() => {
        let subscriber = store.subscribe(() => {
            let { summary } : {summary :string}= store.getState().editor;
            setValue((val) => {
                if( val == summary) return val;
                return summary;
            });
        })

        return () => subscriber()
    }, [])
    return (
        <section className='mx-4 mt-5'>
            <label htmlFor="post-summary" className='mr-2 font-semibold text-ml flex justify-between'>
                <span>Summary :</span>
                {length <=150 && <span>{length} /150</span>}
                {length >150 && <span className='text-red-600'>{length} /50</span>}
            </label>
            <textarea 
                name="post-summary"
                className='w-[100%] p-2 border-2 border-indigo-900 outline-none h-32 resize-none'
                value={ value }
                onChange={(e) => {
                    setLength(e.target.value.length);
                    store.dispatch(editorSummary(e.target.value))
                }}
            />
        </section>
    )
}
