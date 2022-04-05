import { useState, useEffect } from 'react';
import { store } from '@/store/store';
import { editorTitle } from '@/store/actions/action';

const TitleInput = () => {
    const [ length, setLength ] = useState<number>(0);
    const [ value, setValue ] = useState<string>(() => {
        let { title } : {title :string}= store.getState().editor;
        return title;
    });

    useEffect(() => {
        let subscriber = store.subscribe(() => {
            const { title } : {title :string}= store.getState().editor;
            setValue(val => title);
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
                autoComplete='off'
                value={value}
                onChange={(e) => {
                    setLength(e.target.value.length);
                    store.dispatch(editorTitle(e.target.value))
                }}
            />
        </section>
    )
}

export default TitleInput;