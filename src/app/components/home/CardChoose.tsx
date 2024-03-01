import '@fortawesome/fontawesome-svg-core'
import React from 'react';

interface CardChooseProps {
    viewbox: string,
    d: string,
    name: string;
    description: string;
}

export default function CardChoose({ viewbox, d, name, description }: CardChooseProps) {
    return (
        <div className="card mx-auto w-80 md:w-96 bg-base-100 shadow-2xl my-2 md:my-0">
            <div className="card-body">
                <div className='flex flex-row items-start'>
                    <svg className="mr-5 mt-1 w-28" xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}>
                        <path fill="#ea580c" d={d} />
                    </svg>
                    <div className="flex flex-col">
                        <h2 className="card-title font-bold text-slate-800">{name}</h2>
                        <p className='text-gray-500'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}