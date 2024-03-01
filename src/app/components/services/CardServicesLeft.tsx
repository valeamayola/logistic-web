interface CardServicesProps {
    id: string,
    img: string,
    title: string,
    description: string
}

export default function CardServicesLeft({ id, img, title, description }:CardServicesProps) {
    return (
        <div id={id} className="card card-side w-full bg-slate-800 shadow-xl flex flex-col md:flex-row m-2">
            <figure className="flex-1"><img className="w-full h-96" src={img} /></figure>
            <div className="card-body flex-1">
                <h1 className="card-title text-white text-2xl font-bold uppercase">{title}</h1>
                <hr className="h-1 w-52 text-start border-t-0 bg-orange-600 opacity-100 dark:opacity-50 my-2" />
                <p className="text-white text-lg font-medium">{description}</p>
            </div>
        </div>
    )
}