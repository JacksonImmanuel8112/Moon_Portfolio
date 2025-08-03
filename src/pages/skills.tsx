import { useGSAP } from "@gsap/react"
import { Chips } from "../components/chips"
import { chipSkils } from "../data"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

const Skills = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        const skillTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.jskills',
                start: 'top 70%'
            }
        })
        chipSkils.forEach((_, i) => {
            if (isMobile) {
                skillTimeline.from(`.dynamic-skills${i}`, { opacity: 0, y: 100, duration: 0.08, ease: 'expo.inOut' })
            } else {
                skillTimeline.from(`.dynamic-skills${i}`, { opacity: 0, x: 100, duration: 0.08, ease: 'expo.inOut' })
            }
        }

        )
    }, [])
    return (
        <section id="skills" className="jskills h-full bg-white p-3 sm:p-22">
            {/* heading chip  */}
            <div className='rounded-full mb-4 items-center text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-black'>
                <div className='text-white me-1  '>
                    🏆  My Skills
                </div>
            </div>
            <div id="skillset">
                {
                    chipSkils.map((item, i) => {
                        return (
                            <Chips key={item.name} name={item.name} color={`dynamic-skills${i} ${item.color}`} />
                        )
                    })

                }

            </div>
        </section>
    )
}

export default Skills