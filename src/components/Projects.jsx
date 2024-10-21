import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id:1,
        name: 'MVP Polo-It',
        deploy:'https://mvp-poloit.vercel.app/' ,
        repository: 'https://github.com/gabito1966/mvp_poloit',
        image: '/mvp-poloit.png',
        description:'Sistema de Gestion de inscripciones, para Polo-It'
    },
    {
        id:2,
        name: 'Barberia Scissors',
        deploy:'https://barberia-scissors.vercel.app/' ,
        repository: 'https://github.com/gabito1966/Proyecto-Barberia_react',
        image: '/barberia.png',
        description:'App de la barberia Scissors'
    },
    {
        id:3,
        name: 'App-Clima',
        deploy:'https://app-clima-weld.vercel.app/' ,
        repository: 'https://github.com/gabito1966/App-clima',
        image: '/clima.png',
        description:'App de clima por ciudad'
    },

]

const Projects = () => {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id} className="grid grid-cols-3 p-5 mx-auto gap-3">
                    <div className="col-span-1 ml-5">
                        <Image src={project.image} alt={project.name} width={300} height={200} className="items-center"/>
                        <h2 className="text-2xl">{project.name}</h2>
                    </div>
                    <div className="col-span-2 my-auto">
                        <div className="flex flex-col gap-2 ">
                        <Link href={project.repository} passHref target='_blank'>
                            <button className="flex items-center justify-center p-3 w-40 h-8 text-lg rounded-md bg-blue-300 hover:bg-blue-500 hover:text-white">
                                Repositorio
                            </button>
                        </Link>
                        <Link href={project.deploy} passHref target='_blank'>
                            <button className="flex items-center justify-center p-3 w-40 h-8 text-lg rounded-md bg-blue-300 hover:bg-blue-500 hover:text-white">
                                Deploy
                            </button>
                        </Link>
                        </div>
                        <p className="text-2xl">
                            <strong>Descripción:</strong> {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects