'use client'
import Image from 'next/image'
import grid from "../../../assets/img/grid.png"
import Link from '../Link/Link'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-10 justify-items-center">
        <div className="text-gray font-chakra-petch xs:text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl m-2.5">
          <h4 className='inline-block pr-2'>Hello, I’m Monique</h4>
          <div className="inline-block animate-wiggle">👋</div>
        </div>
        <div className="text-white xs:w-[280px] sm:w-[500px]  lg:w-[500px] xl:w-[600px] 2xl:w-[700px] text-center xs:text-2xl sm:text-4xl lg:text-4xl xl:text-4xl font-chakra-petch font-semibold  mb-2.5">
          <h1>A RESULTS DRIVEN FRONTEND👩🏻‍💻DEVELOPER</h1>
        </div>
        <div className="xs:w-[280px] md:w-[500px] 2xl:w-[600px] mb-6">
          <p className='font-light text-center text-gray font-inter xs:text-xs sm:text-base md:text-base lg:text-base xl:text-base xs:leading-5 sm:leading-6 md:leading-6 lg:leading-6 xl:leading-6'>
            I’m able to create visually appealing and intuitive designs into functional and performant code.
          </p>
        </div>
        <Link size={'large'} style={'primary'} download={true}>Download CV</Link>
      </div>
      <div className="w-full">
        <Image className='w-full mt-28 transition-opacity opacity-0 duration-[2s]' src={grid} alt="grid"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")} />
      </div>
    </section >
  )
}

export default Hero