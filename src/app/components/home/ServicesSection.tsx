import ServiceImg from "./ServiceImg";

export default function ServicesSection() {
    const img1 = '/constructora-5.jpg';
    const img2 = '/constructora-7.jpg';
    const img3 = '/constructora-8.jpg';
    const img4 = '/constructora-10.jpg';
    const img5 = '/constructora-3.jpg';

    return (
        <section className="flex flex-col md:flex-row w-full">
            <div className="flex-1">
                <ServiceImg href="/" backgroundImage={img1} number="01" title="Construcción de casas a medida"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/" backgroundImage={img2} number="02" title="Construcción de edificios"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/" backgroundImage={img3} number="03" title="Construcción de proyectos comerciales"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/" backgroundImage={img4} number="04" title="Reformas y ampliaciones"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/" backgroundImage={img5} number="05" title="Asesoramiento y gestión de proyectos"/>
            </div>
        </section>
    )
}
