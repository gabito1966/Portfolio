import Image from 'next/image';

const tecnologias = [
  { src: '/HTML.png', alt: 'HTML', nombre: 'HTML', nivel: '70' },
  { src: '/CSS.png', alt: 'CSS', nombre: 'CSS', nivel: '60' },
  { src: '/bootstrap.png', alt: 'Bootstrap', nombre: 'Bootstrap', nivel: '50' },
  { src: '/tailwind.png', alt: 'Tailwind CSS', nombre: 'Tailwind CSS', nivel: '50' },
  { src: '/mysql.png', alt: 'MySQL', nombre: 'MySQL', nivel: '30' },
  { src: '/Python.png', alt: 'Python', nombre: 'Python', nivel: '30' },
  { src: '/Java.png', alt: 'Java', nombre: 'Java', nivel: '25' },
  { src: '/JavaScript.png', alt: 'JavaScript', nombre: 'JavaScript', nivel: '30' },
  { src: '/nodejs.png', alt: 'Node JS', nombre: 'Node JS', nivel: '30' },
  { src: '/reactjs.png', alt: 'React JS', nombre: 'React JS', nivel: '30' },
  { src: '/nextjs.png', alt: 'Next JS', nombre: 'Next JS', nivel: '35' },
];

function Tecnologias() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
    {tecnologias.map((tech, index) => (
      <div
        key={index}
        className="p-5 border rounded shadow-lg flex flex-col items-center"
      >
        <div className="relative w-48 h-48 mb-2"> {/* Ajusta el tamaño según necesites */}
        <Image
          src={tech.src}
          alt={tech.alt}
          width={200}
          height={200}
          className="mb-2 object-contain"
        />
      </div>
        <h3 className="text-lg font-semibold">{tech.nombre}</h3>
        <div className="w-full bg-gray-200 rounded-full mt-2">
          <div
            className={`text-xs font-medium text-center p-0.5 leading-none rounded-full ${
              tech.nivel < 40
                ? 'bg-red-500 text-red-100'
                : tech.nivel < 70
                ? 'bg-yellow-500 text-yellow-100'
                : 'bg-green-500 text-green-100'
            }`}
            style={{ width: `${tech.nivel}%` }}
          >
            {tech.nivel}%
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
}

export default Tecnologias;
