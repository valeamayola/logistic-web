interface CardValuesProps { 
    title: string,
    description: string,
    viewbox: string,
    d: string
}

export default function CardValues({ title, description, viewbox, d}: CardValuesProps) {
    return (
        <div className="card card-side bg-slate-800 shadow-xl my-2 md:my-0">
            <div className="card-body">
                <h2 className="card-title font-bold uppercase text-white">{title}</h2>
                <p className="w-full md:w-72 text-white">{description}</p>
            </div>
            <figure>
            <svg className="w-full md:w-20 mr-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}><path d={d}/></svg>
            </figure>
        </div>
    )
}