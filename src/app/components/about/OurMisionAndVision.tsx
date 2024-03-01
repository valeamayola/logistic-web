import CardMisionAndVision from "./CardMisionAndVision";

export default function OurMisionAndVision() {
    return (
        <div className="m-5 md:m-10 flex flex-col md:flex-row justify-around">
            <CardMisionAndVision
                title="Nuestra misión"
                description="Ser el aliado estratégico de nuestros clientes, brindándoles soluciones logísticas innovadoras y eficientes que optimicen su cadena de suministro y les permitan alcanzar sus objetivos comerciales."
            />
            <CardMisionAndVision
                title="Nuestra visión"
                description="Ser la empresa líder en soluciones logísticas en Latinoamérica, reconocida por la excelencia de nuestro servicio, la innovación tecnológica y nuestro compromiso con la sostenibilidad."
            />
        </div>
    )
}