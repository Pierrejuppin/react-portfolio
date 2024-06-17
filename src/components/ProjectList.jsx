import data from "../../public/data/data.json";

export default function ProjectList() {
    return (
        <div className="min-h-screen">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {data.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                        <img className="w-full" src={item.imgsrc} alt={item.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-200 text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="mb-6 px-6 pt-4 pb-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Lien
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
