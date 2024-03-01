import CardServicesLeft from "./CardServicesLeft"
import CardServicesRight from "./CardServicesRight"

export default function ComponentServices() {
    const service1 = '/service-16.jpg'
    const service2 = '/service-17.jpg'
    const service3 = '/service-6.jpg'
    const service4 = '/service-10.jpg'
    const service5 = '/service.jpg'

    return (
        <div className="flex flex-wrap m-2 md:m-10 justify-around">
            <CardServicesLeft
                id="almacenamiento"
                img={service1}
                title="Almacenamiento"
                description="Contamos con una moderna infraestructura de almacenamiento que se adapta a las necesidades de nuestros clientes. 
                Nuestras bodegas están estratégicamente ubicadas para garantizar una rápida distribución de sus productos. 
                Disponemos de bodegas de temperatura controlada, para productos que requieren condiciones específicas de temperatura y humedad;
                bodegas de alta seguridad, para productos de alto valor o que requieren un manejo especial;
                y bodegas cross-docking, para optimizar la recepción, clasificación y despacho de productos."
            />
            <CardServicesRight
                id="distribucion"
                img={service2}
                title="Distribución"
                description="Distribuimos sus productos a nivel nacional e internacional, utilizando los medios de transporte más eficientes.
                 Contamos con una amplia red de colaboradores que nos permite llegar a cualquier destino.
                 Disponemos de transportes terrestres, tanto vehículos propios y contratados para el transporte terrestre de sus productos;
                 aéreos, para envíos urgentes o de alto valor; 
                 y marítimos, para envíos de grandes volúmenes de productos a largas distancias."
            />
            <CardServicesLeft
                id="picking-and-packing"
                img={service3}
                title="Picking & Packing"
                description="Preparamos sus pedidos de forma rápida y precisa, con el máximo cuidado y atención al detalle.
                Contamos con un proceso que comienza con la recepción y la calidad de los productos, 
                embajale y empaquetado de los productos de forma segura
                etiquetado y clasificación de los pedidos, y por último
                preparación de la documentación necesaria para el transporte.
                Seguimos estrictos procedimientos de control de calidad para asegurar que sus productos lleguen en perfectas condiciones."
            />
            <CardServicesRight
                id="gestion-de-inventario"
                img={service4}
                title="Gestión de inventario"
                description="Le ayudamos a gestionar su inventario de forma eficiente, para que siempre tenga la cantidad de productos adecuada en el momento oportuno.
                Esto incluye: Implementación de un sistema de inventario personalizado,
                control de stock en tiempo real,
                reposición automática de inventario y
                análisis de datos para optimizar la gestión del inventario.
                "
            />
            <CardServicesLeft
                id="logistica-inversa"
                img={service5}
                title="Logística inversa"
                description="Nos encargamos de la devolución y gestión de productos defectuosos o no vendidos.
                Este servicio cuenta con recepción y clasificación de productos devueltos,
                inspección y control de calidad de los productos devueltos,
                reparación o reacondicionamiento de productos devueltos,
                reembolso o cambio de productos devueltos y
                gestión de residuos y reciclaje."
            />
        </div>
    )
}