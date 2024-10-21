'user client'
import HoverImage from "@/components/HoverImage"


const page = () => {
  return (
    
    <section className="container flex max-w-full h-full p-2 mx-auto relative">
      <HoverImage className="absolute inset-0 z-0 min-h-screen " />
      <div className="block text-center p-2 max-w-xl mx-auto mt-8 lg:mt-36 text-blue-200 bg-gray-200 dark:bg-gray-800 relative z-10 cursor-pointer">
        <h1 className="text-xl lg:text-5xl">Gabriel Jorge García</h1>
        <p className="text-md lg:text-3xl">Soy Técnico en Industrias Alimentarias,</p>
        <p className="text-md lg:text-3xl">Profesor de tenis y</p>
        <p className="text-md lg:text-3xl">Desarrollador web</p>
      </div>
    </section>
  )
}

export default page
