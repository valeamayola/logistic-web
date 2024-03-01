import Link from "next/link";

export default function ServiceImg({ href, backgroundImage, number, title }: {
    href: string,
    backgroundImage: string;
    number: string;
    title: string
}) {
    return (
        <div className="w-full h-[30rem]" style={{ backgroundImage: `url(${backgroundImage})`, objectFit: "cover", backgroundSize: "cover" }}>
            <div className="flex flex-col pt-72 px-10">
                <p className="text-orange-600 font-medium text-xl mb-5">{number}</p>
                <h1 className="text-white font-medium text-xl mb-5">{title}</h1>
                <Link href={href} className="btn btn-circle bg-black/50 border-none hover:bg-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path d="M9 5l7 7 -7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}