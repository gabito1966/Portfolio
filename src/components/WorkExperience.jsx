import Image from "next/image";

    const worksExperience = [
        {
            id:1,
            empresa: "GG Food Technology Solutions Consultant",
            imagen: "/GG-consulting.png",
            fecha_inicial: "Septiembre-2017",
            fecha_final: "Actualidad",
            cargo: "Owner",
            descripcion: "Consultor independiente para el desarrollo de nuevos productos y mejora de procesos"
        },
        {
            id:2,
            empresa: "Pampa Trade S.A.",
            imagen: "/PampaTrade.png",
            fecha_inicial: "Enero-2016",
            fecha_final: "Septiembre-2017",
            cargo: "Jefe de Supply Chain",
            descripcion: "Manejo de inventarios cíclicos y físicos. Compras, logística y distribución"
        },
        {
            id:3,
            empresa: "Pampa Trade S.A.",
            imagen: "/PampaTrade.png",
            fecha_inicial: "Enero-2006",
            fecha_final: "Enero-2016",
            cargo: "Jefe de Planta",
            descripcion: "Responsable de compras, planificación de producción, producción, depósito y distribución. Participé del equipo de Mejora continua e inocuidad para certificación de normas FSSC 22000"
        },
        {
            id:4,
            empresa: "Kopelko",
            imagen: "/Kopelko.png",
            fecha_inicial: "Agosto-2005",
            fecha_final: "Octubre-2005",
            cargo: "Supervisor de Area esteril",
            descripcion: "Estudio de factibilidad para lograr mejoras de eliminación del polvo ambiental en el proceso de envasado de profilácticos"
        },
        {
            id:5,
            empresa: "Cepas Argentinas - Gancia",
            imagen: "/Gancia.png",
            fecha_inicial: "Septiembre-2003",
            fecha_final: "Junio-2005",
            cargo: "Supervisor de Producción",
            descripcion: "Elaborador de vinicas"
        },
        {
            id:6,
            empresa: "Productos Lipo",
            imagen: "/lipo.png",
            fecha_inicial: "Noviembre-2000",
            fecha_final: "Julio-2003",
            cargo: "Jefe Industrial",
            descripcion: "Dirección y ejecución de proceso de reciclado de caramelos. Integrante del equipo para la implementacion de HACCP"
        },
        {
            id:7,
            empresa: "Cadbury Stani",
            imagen: "/cadbury-Stani.png",
            fecha_inicial: "Mayo-1992",
            fecha_final: "Julio-2000",
            cargo: "Supervisor de Producción",
            descripcion: "Control de documentación y seguimiento de los parámetros del control de procesos.Organización y seguimiento del programa semanal de producción."
        },
        {
            id:8,
            empresa: "Est. Modelo Terrabusi",
            imagen: "/terrabusi.png",
            fecha_inicial: "Octubre-1991",
            fecha_final: "Mayo-1992",
            cargo: "Supervisor de Producción",
            descripcion: "Control de procesos productivos, planeamiento semanal de la producción"
        },
        {
            id:9,
            empresa: "Est. Modelo Terrabusi",
            imagen: "/terrabusi.png",
            fecha_inicial: "Junio-1986",
            fecha_final: "Octubre-1991",
            cargo: "Supervisor de Calidad",
            descripcion: "Análisis de materias primas, productos elaborados y semielaborados, control y análisis de aguas"
        },
        
    ]

    const WorkExperience = () => {
        return (
            <div>
                {worksExperience.map(work => (
                    <div key={work.id} className="grid grid-cols-3 p-5 mx-auto gap-3">
                        <div className="col-span-1 ml-5">
                            <Image src={work.imagen} alt={work.empresa} width={300} height={200} className="items-center"/>
                            <h2 className="text-2xl">{work.empresa}</h2>
                        </div>
                        <div className="col-span-2 my-auto">
                            <p className="text-2xl"><strong>Cargo:</strong> {work.cargo}</p>
                            <p className="text-2xl"><strong>Fechas:</strong> {work.fecha_inicial} - {work.fecha_final}</p>
                            <p className="text-2xl"><strong>Descripción:</strong> {work.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }


export default WorkExperience