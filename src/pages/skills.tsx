import { useGSAP } from "@gsap/react"
import { Chips } from "../components/chips"
import { chipSkils } from "../data"
import gsap from "gsap"

const Skills = () => {
    useGSAP(() => {
        const skillTimeline = gsap.timeline({
            scrollTrigger : {
                trigger : '.jskills',
                start : 'top 70%'
            }
        })

        skillTimeline.from('#skillset',{opacity : 0,y:100,duration : 1,ease :'power1.inOut'})
    },[])
    return (
        <section className="jskills h-full bg-white p-3 sm:p-22">
            {/* heading chip  */}
            <div className='rounded-full mb-4 items-center text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-black'>
                <div className='text-white me-1  '>
                    🏆  My Skills
                </div>
            </div>
            <div id="skillset">
                {
                    chipSkils.map((item) => {
                        return (
                            <Chips  name={item.name} color={item.color}/>
                        )
                    })

                }

            </div>
        </section>
    )
}

export default Skills