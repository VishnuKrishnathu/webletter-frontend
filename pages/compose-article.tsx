import React, { useState, useRef } from 'react';
import NavBar from '@/components/Navbar';
import CheckAuth from '@/components/CheckAuth';
import dynamic from 'next/dynamic';
import { apiAxios } from '@/constants/axios.config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { store } from '@/store/store';
import { notificationState } from '@/store/actions/action';

const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});
const DynamicCSRF = dynamic(() => import('@/components/GetCSRF'), {ssr :false});

export default function ComposeArticle() {
    let editorData:string = "";
    let title :string = "";
    let summary :string = "";
    const router = useRouter();

    const textEditorObj = (body :string) :void => {
        editorData = body;
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
            store.dispatch(notificationState("Article composed"))
        })
        .catch(err => console.log(err));
    }

    // retrieve the value of text fields from title and summary component
    function getText(body ?:string, inputName ?:string){
        if(body && inputName){
            switch(inputName){
                case "post-title":
                    title = body;
                    break;

                case "post-summary":
                    summary = body;
                    break;
            }

        }
        else if(!body && inputName == "post-title") title = ""
        else if(!body && inputName == "post-summary") summary = ""
        return {
            title, summary
        }
    }

    return (
        <div>
            <CheckAuth />
            <DynamicCSRF />
            <NavBar />
            <Title getText={getText}/>
            <Summary getText={getText}/>
            <DynamicTextEditor editorData={textEditorObj}/>
        </div>
    )
}

interface IText{
  getText: (body ?:string, inputName ?:string) => {title :string, summary :string}
}

const Title = ({getText}:IText) => {
    const [ length, setLength ] = useState<number>(0);
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
                value={getText().title}
                onChange={(e) => {
                    setLength(e.target.value.length);
                    getText(e.target.value, e.target.name);
                }}
            />
        </section>
    )
}

const Summary = ({getText} :IText) => {
    const [ length, setLength ] = useState<number>(0);
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
                value={getText().summary}
                onChange={(e) => {
                    setLength(e.target.value.length);
                    getText(e.target.value, e.target.name);
                }}
            />
        </section>
    )
}
