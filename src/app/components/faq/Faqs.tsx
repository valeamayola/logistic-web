export default function Faqs() {
    return (
        <div className="m-5 md:m-10">
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    ¿Qué medidas de seguridad toman para proteger mi mercancía?
                </div>
                <div className="collapse-content">
                    <p>
                        Implementamos un sistema de seguridad integral que incluye:
                        vigilancia las 24 horas,
                        control de acceso y
                        sistemas contra incendios
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    ¿A qué países distribuyen?
                </div>
                <div className="collapse-content">
                    <p>
                        Distribuimos a nivel nacional e internacional.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    ¿Cuánto tiempo tarda el proceso de devolución?
                </div>
                <div className="collapse-content">
                    <p>
                        El proceso de devolución suele tardar entre 5 y 7 días laborables.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    ¿Qué hacen con los productos devueltos?
                </div>
                <div className="collapse-content">
                    <p>
                        Los productos devueltos son inspeccionados y clasificados. Los productos que se encuentren en buen estado se reponen en stock, mientras que los productos defectuosos son reparados o reciclados.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    ¿Puedo obtener un reembolso por un producto devuelto?
                </div>
                <div className="collapse-content">
                    <p>
                        Sí, puede obtener un reembolso por un producto devuelto siempre que cumpla con las condiciones de nuestra política de devoluciones.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    ¿Qué medidas toman para proteger el medio ambiente?
                </div>
                <div className="collapse-content">
                    <p>
                        Implementamos diversas medidas para reducir nuestro impacto ambiental, como la utilización de energía renovable y la optimización de las rutas de transporte.
                    </p>
                </div>
            </div>

        </div>
    )
}