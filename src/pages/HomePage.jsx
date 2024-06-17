export default function HomePage() {

return (

<div className="min-h-screen m-10">
        <div className="mx-auto max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700 ">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">Développeur Web Full Stack</h5>
            <p className="font-normal text-gray-400">J'ai rejoint la Wild Code School en février 2024 pour devenir développeur web JavaScript full stack. Je cherche une entreprise pour une alternance à partir de septembre 2024 dans le cadre de mon titre professionnel bac+4. Découvrez mes projets pour en savoir plus sur mon parcours !</p>
    <div className="m-6 flex items-center gap-x-2">
        <img className="object-cover w-16 h-16 rounded-full" src="/images/avatar.jpg" alt="pierre juppin"/>
        <div>
            <h1 className="text-xl font-semibold capitalize text-white">Pierre JUPPIN</h1>
            <p className="text-base text-gray-400">pierre.juppin@gmail.com</p>
        </div>
      </div>
      <a href="/data/PIERRE_JUPPIN_CV .pdf" download>
        <button className="ml-6 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          CV
        </button>
      </a>
    </div>
</div>
)
}
