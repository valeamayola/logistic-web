interface CardMisionAndVisionProps {
    title: string,
    description: string
}

export default function CardMisionAndVision ({ title, description }: CardMisionAndVisionProps) {
    return (
    <div className="card w-full mx-0 md:mx-5 my-2 md:my-0 bg-orange-700 shadow-xl">
        <div className="card-body">
            <h2 className="card-title uppercase font-bold text-white text-2xl">{title}</h2>
            <p className="font-medium text-lg text-white">{description}</p>
        </div>
    </div>
)}