import foodproject from "../assets/foodproject.jpg"
import comingsoon from "../assets/comingsoon.jpg"

export const Projects = () => {
    return (
        <section id="project" className="projects-bg p-3 sm:p-22">
            {/* heading chip  */}
            <div className="flex justify-start">
                <div className='rounded-full mb-2 text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-white'>

                    <div className='text-black me-1'>
                        🔭  My Projects
                    </div>
                </div>
            </div>
            <div className="text-xl font-medium text-white mb-4">Crafted Real-World Projects with Modern Tech</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://famous-raindrop-db0b2f.netlify.app/" target="_blank" className="decoration-0">
                <div className="rounded-md cursor-pointer">
                    <img className="rounded-t-md" src={foodproject} alt="" />
                    <div className="bg-white px-1 py-2 rounded-b-md text-md font-semibold">
                        <div>Food Order Online Project</div>
                        <div className=" hover:underline text-green-600 text-sm font-normal ">See Project {'>>'}</div>
                    </div>
                </div>
                </a>
                 <div className="rounded-md cursor-pointer">
                    <img className="rounded-t-md" src={comingsoon} alt="" />
                    <div className="bg-white px-1 py-2 rounded-b-md text-md font-semibold">
                        <div>Working On it!😉</div>
                        <div className=" hover:underline text-green-600 text-sm font-normal ">See Project {'>>'}</div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
