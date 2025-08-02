import foodproject from "../assets/foodproject.jpg"
import comingsoon from "../assets/comingsoon.jpg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

export const Projects = () => {
    useGSAP(() => {
        const headingSpilt = SplitText.create('.projecttext', { type: 'chars,words' });

        const projectTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#project',
                start: 'top 60%'
            }
        });
        projectTimeline.from(headingSpilt.chars, { opacity: 0, xPercent: 100, duration: .5, stagger: 0.02, ease: 'power2.inOut' });
        projectTimeline.from('.badge-project', { opacity: 0, y: 100, duration: 0.3, ease: 'power1.inOut' });
        projectTimeline.from('.project1', { opacity: 0, duration: 1, ease: 'power1.inOut', y: 100 });
        projectTimeline.from('.project2', { opacity: 0, duration: 1.5, ease: 'power1.inOut', y: 100 });
    }, [])
    return (
        <section id="project" className="projects-bg p-3 sm:p-22">
            {/* heading chip  */}
            <div className="flex justify-start">
                <div className='badge-project rounded-full mb-2 text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-white'>

                    <div className='text-black me-1'>
                        🔭  My Projects
                    </div>
                </div>
            </div>
            <div className="projecttext text-xl font-medium text-white mb-4">Crafted Real-World Projects with Modern Tech</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://famous-raindrop-db0b2f.netlify.app/" target="_blank" className="decoration-0">
                    <div className="project1 rounded-md cursor-pointer">
                        <img className="rounded-t-md" src={foodproject} alt="" />
                        <div className="bg-white px-1 py-2 rounded-b-md text-md font-semibold">
                            <div>Food Order Online Project</div>
                            <div className=" hover:underline text-green-600 text-sm font-normal ">See Project {'>>'}</div>
                        </div>
                    </div>
                </a>
                <div className="project2 rounded-md cursor-pointer">
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
