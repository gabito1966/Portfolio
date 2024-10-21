import Image from "next/image"

function page() {
  return (
    <section className="container mx-auto max-w-7xl p-10">
      <h1 className="text-4xl underline text-center">About me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
        <div className="justify-center hidden lg:block">
          <Image
            src="/foto-perfil.jpg"
            alt="Perfil"
            width={350}
            height={350}
            className="rounded-full"
          />
        </div>
        <div className="justify-center lg:hidden">
          <Image
            src="/foto-perfil.jpg"
            alt="Perfil"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <h3 className="text-lg lg:text-3xl">
            Tengo 58 años y estoy casado desde hace más de 30 años. Soy consultor técnico. Vengo trabajando dentro de la industria desde hace más de 35 años. Me gusta formar equipos de trabajo donde lo importante sea la cooperación entre todos sus integrantes. Me considero un líder natural que lleva adelante los proyectos y distribuye las tareas a realizar. Mis desafíos son la capacitación constante, y ese aprendizaje trato de volcarlo en aquellas personas que lo necesitan. Después de muchos años de trabajar en la industria decidí dar un vuelco dentro de mi carrera y orientarme a la tecnología que desde que la conocí me impactó y este es el momento adecuado para ese cambio.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default page