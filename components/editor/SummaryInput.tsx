import { useState, useEffect } from 'react';
import { store } from '@/store/store';
import { editorSummary } from '@/store/actions/action';

const SummaryInput = () => {
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

export default SummaryInput;