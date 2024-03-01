import Link from "next/link";

export default function Header() {

    return (
        <header className="px-5 md:px-16 py-10 md:py-28 flex items-start justify-start flex-col">
            <h1 className="text-3xl md:text-7xl font-extrabold text-white uppercase">Conéctacte<br></br>con un mundo de<br></br>posibilidades</h1>
            <p className="text-lg md:text-2xl font-semibold mt-5 md:mt-10 text-white">Optimizamos tu cadena de suministro para que tu negocio<br></br>impulse su éxito.</p>
            <Link href="/services" className="btn bg-orange-700 text-lg font-semibold mt-10 text-white border-none rounded-2xl hover:bg-white hover:text-orange-600">Ver servicios</Link>
        </header>
    )
}