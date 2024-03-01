export default function AboutUs() {
    return (
        <div className="card card-side bg-orange-700 shadow-xl flex flex-col md:flex-row m-5 md:m-10">
            <figure className="flex-1"><img className="h-80" src="/about-1.jpg" /></figure>
            <div className="card-body flex-1 justify-center">
                <h2 className="card-title text-white font-bold">Logistic es una empresa líder en soluciones logísticas integrales, con más de 10 años de experiencia en el sector. Brindamos un servicio personalizado y eficiente a empresas de todos los tamaños, sectores e industrias.</h2>
                <h2 className="text-lg font-medium text-white">Somos la solución ideal para empresas de todos los tamaños, sectores e industrias.
                    Confía en nosotros para optimizar tu cadena de suministro y llevar tu negocio al siguiente nivel.</h2>
            </div>
        </div>
    )
}