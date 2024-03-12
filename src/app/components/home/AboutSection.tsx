export default function AboutSection() {
    return (
        <section className="px-5 md:px-10 py-10 md:py-20 bg-white">
            <div className="flex flex-col md:flex-row justify-around items-center">
                <img src="/constructora-6.jpg" alt="Sobre nosotros" className="w-96 md:w-[80rem] h-80 md:h-96 rounded-2xl shadow-xl mb-5 md:mb-0" />
                <div className="flex flex-col px-2 md:px-10">
                    <h1 className="font-bold text-3xl text-slate-800 mb-5">Sobre nosotros</h1>
                    <hr className="h-1 w-32 text-center border-t-0 bg-orange-600 opacity-100 dark:opacity-50 mb-5 md:mb-10" />
                    <p className="text-lg font-bold text-slate-800 mb-2">Galvez SRL es una empresa constructora con más de 20 años de experiencia en el mercado. Nos especializamos en la construcción de casas, edificios, y proyectos comerciales.</p>
                    <p className="text-lg font-medium text-gray-500 mb-2">Nuestra misión es brindar a nuestros clientes un servicio de excelencia, con los más altos estándares de calidad y seguridad.</p>
                </div>
            </div>
        </section>
    )
}
