import ServiceImg from "./ServiceImg";

export default function ServicesSection() {
    const img1 = '/service-home-1.jpg';
    const img2 = '/service-home-2.jpg';
    const img3 = '/service-home-3.jpg';
    const img4 = '/service-home-4.jpg';
    const img5 = '/service-home-5.jpg';

    return (
        <section className="flex flex-col md:flex-row w-full">
            <div className="flex-1">
                <ServiceImg href="/services#almacenamiento" backgroundImage={img1} number="01" title="Almacenamiento"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/services#distribucion" backgroundImage={img2} number="02" title="Distribución"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/services#picking-and-packing" backgroundImage={img3} number="03" title="Picking & Packing"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/services#gestion-de-inventario" backgroundImage={img4} number="04" title="Gestión de inventario"/>
            </div>
            <div className="flex-1">
                <ServiceImg href="/services#logistica-inversa" backgroundImage={img5} number="05" title="Logística inversa"/>
            </div>
        </section>
    )
}