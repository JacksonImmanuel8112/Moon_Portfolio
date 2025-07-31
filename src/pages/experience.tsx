import rightimg from "../assets/cutout.png"
import leftimg from "../assets/cutout-left.png"

import { myWorkAtCareworx } from "../data"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

export const Experience = () => {

    useGSAP(() => {
        const headingSpilt = SplitText.create('.exptext', { type: 'chars,words' });

        const expTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#exp',
                start: 'top 70%'
            }
        });

        const presentexpTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#present-exp',
                start: 'top 70%'
            }
        });

        const subexpTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.workatcare',
                start: 'top 70%'
            }
        });
        

        const pastexpTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#pastexp',
                start: 'top 70%'
            }
        });

        expTimeline.from(headingSpilt.chars,{opacity : 0,x : 100,duration : .5,stagger : 0.02,ease : 'power2.inOut'});
        expTimeline.from('.badge-exp',{opacity : 0,y:100,duration : 0.3,ease : 'power1.inOut'});

        presentexpTimeline.from('.left-grid',{opacity : 0,x : -100,duration : 0.5,ease : 'power1.inOut'})
        presentexpTimeline.from('.right-grid',{opacity : 0,x : 100,duration : 0.8,ease : 'power1.inOut'})

        subexpTimeline.from('.subexp1',{opacity : 0, y:100,duration : 0.4,ease : 'power1.inOut'});
        subexpTimeline.from('.subexp2',{opacity : 0, y:100,duration : 0.6,ease : 'power1.inOut'});
        subexpTimeline.from('.subexp3',{opacity : 0, y:100,duration : 0.8,ease : 'power1.inOut'});

        pastexpTimeline.from('.pastleft-grid',{opacity : 0,x : 100,duration : 0.5,ease : 'power1.inOut'})
        pastexpTimeline.from('.pastright-grid',{opacity : 0,x : -100,duration : 0.8,ease : 'power1.inOut'})


    }, []);

    return (
        <section id="exp" className="p-3 sm:p-22 bg-slate-100 pb-8">
            {/* heading chip  */}
            <div className="flex justify-center">
                <div className='badge-exp rounded-full mb-2 text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-black'>

                    <div className=' text-white me-1'>
                        🔭  My Experience
                    </div>
                </div>
            </div>
            <div className="exptext flex justify-center mb-5 text-2xl font-medium">
                <div>My Experience As <span className="text-green-600">Front End Developer</span>
                </div>
            </div>
            <div id="present-exp" className="grid grid-cols-1 sm:grid-cols-3 items-center mb-2">
                <div className="left-grid">
                    <div className="text-lg font-medium">Angular Developer</div>
                    <div className="text-sm font-semibold text-green-600 mb-4 ">Jun 2025 - Present</div>
                    <div className="text-justify text-sm">Currently working as an Angular Developer at Careworx Pvt Ltd, contributing to the development of scalable and responsive web applications.
                        Focused on building dynamic UI components and enhancing user experience through efficient state management and modular architecture.
                        Collaborate closely with cross-functional teams to deliver high-quality features in agile development cycles.</div>
                </div>
                <div className="right-grid col-span-2">
                    <img src={rightimg} alt="" />
                </div>
            </div>
            {/* myWorkAtCareworx */}
            <div className="workatcare grid grid-cols-1 mb-12 sm:grid-cols-3">
                {myWorkAtCareworx.map((item,i) => {
                    return (
                        <div className={`subexp${i}`}>
                            <div className="border inline-flex mb-1 bg-green-100 border-green-600 rounded-md py-4 px-4">{item.emoji}</div>
                            <div className="text-md font-medium mb-2">{item.heading}</div>
                            <div className="text-justify w-58 text-sm">{item.brief}</div>
                        </div>
                    )
                })

                }
            </div>
            <div id="pastexp" className="grid grid-cols-1 sm:grid-cols-3 items-center mb-2">
                <div className="pastleft-grid col-span-2">
                    <img src={leftimg} alt="" />
                </div>
                <div className="pastright-grid">
                    <div className="text-lg font-medium">React JS Developer</div>
                    <div className="text-sm font-semibold text-green-600 mb-4 ">Nov 2023 - Jun 2025</div>
                    <div className="text-justify text-sm">Worked as a React.js Developer at Pikture Associates Pvt Ltd, focusing on building interactive and high-performance web applications.
                        Developed reusable components, managed state using tools like Redux, and ensured seamless API integration for dynamic data rendering.
                        Collaborated with design and backend teams to deliver responsive, user-friendly features on tight deadlines.</div>
                </div>

            </div>
        </section>
    )
}
