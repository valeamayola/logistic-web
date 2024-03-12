import Link from "next/link";

export default function Header() {

    return (
        <header className="px-5 md:px-16 py-10 md:py-28 flex items-start justify-start flex-col">
            <h1 className="text-3xl md:text-7xl font-extrabold text-white uppercase">Construyendo<br></br>tus sueños en<br></br>realidad</h1>
            <p className="text-lg md:text-2xl font-semibold mt-5 md:mt-10 text-white">Más de 20 años de experiencia transformando ideas en realidades,<br></br>con un equipo profesional altamente calificado.</p>
            <Link href="/services" className="btn bg-orange-700 text-lg font-semibold mt-10 text-white border-none rounded-2xl hover:bg-white hover:text-orange-600">Ver servicios</Link>
        </header>
    )
}
