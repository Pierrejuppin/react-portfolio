export default function HomePage() {

return (

<div className="min-h-screen">
        <div className="m-10 mx-auto max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Développeur Web Full Stack</h5>
            <p className="font-normal text-gray-400">J'ai rejoint la Wild Code School en février 2024 pour devenir développeur web JavaScript full stack. Je cherche une entreprise pour une alternance à partir de septembre 2024 dans le cadre de mon titre professionnel bac+4. Découvrez mes projets pour en savoir plus sur mon parcours !</p>
    <div className="m-10 flex items-center gap-x-2">
        <img className="object-cover w-16 h-16 rounded-full" src="/images/avatar.jpg" alt="pierre juppin"/>
        <div>
            <h1 className="text-xl font-semibold capitalize text-white">Pierre JUPPIN</h1>
            <p className="text-base text-gray-400">pierre.juppin@gmail.com</p>
        </div>
      </div>
    </div>
</div>
)
}