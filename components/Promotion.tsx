import React from 'react'

interface IPromotionProps {
    imageUrl : String;
    posterTitle :String;
    summary :String;
}
export default function Promotion(props :IPromotionProps) {
    return (
        <div>
            <div 
                className={`h-[360px]`}
                style = {{
                    background : `url(${props.imageUrl})`,
                    backgroundRepeat : "no-repeat",
                    backgroundSize : "cover",
                    backgroundPosition : "center"
                }}
            >
                <div className='bg-gradient-to-t from-slate-50 to-cyan-800/5 h-full w-full relative'>
                    <div className='absolute left-0 bottom-0 w-[50%] ml-5'>
                        <section className='font-bold text-4xl text-indigo-900'>{props.posterTitle}</section>
                        <p className='text-indigo-900'>
                            {props.summary}
                        </p>
                        <button className='text-slate-50 bg-indigo-500 mb-5 mt-4 p-2 rounded'>Read Article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
