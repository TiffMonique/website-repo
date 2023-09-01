'use client'
import screenmonique from '../../../assets/img/screenmonique.png';
import Image from 'next/image';
import react from '../../../assets/img/React.png';
import typescript from '../../../assets/img/typescript.png';
import next from '../../../assets/img/Nextjs.png';
import html from '../../../assets/img/HTML.png';
import leader from '../../../assets/img/leadership.png';
import team from '../../../assets/img/teamwork.png';
import responsibility from '../../../assets/img/Responsability.png';
import problemSolving from '../../../assets/img/solving.png';
import ImageComponet from '../CustomImage/CustomImage';


const About = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl text-white font-chakra-petch font-semibold xs:m-10 sm:mb-11'>You wonder, Who’s monique?</h1>
      </div>
      <div className='grid place-items-center  sm:w-11/12 2xl:full 2xl:h-full mx-auto my-0'>
        <div className='sm:relative sm:bg-[#171619] '>
          <div className='hidden sm:block '>
            <Image
              className='z-0'
              src={screenmonique}
              alt='screen'
            />
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:absolute sm:top-10 md:top-16 lg:top-20">
            <div className="image sm:col-start-1 grid place-items-center"
            >
              <ImageComponet />
            </div>
            <div className='core-skills sm:col-start-2 sm:flex-1 sm:overflow-y-auto sm:h-[325px] md:h-[335px] lg:h-full xl:h-full'>
              <div className="">
                <p className="xs:px-10 sm:px-0 sm:pr-8 py-4 font-inter text-white text-base leading-relaxed font-light">
                  Hi, I&apos;m a programmer girl who can make awesome websites and UI designs. I have a lot of skills in web development and UI design, such as HTML, CSS, JavaScript, Typescript, React, Nextjs, Tailwind, Figma and more. I love creating beautiful and functional web pages that make people happy and impressed.
                </p>
              </div>
              <div className="mt-4 xs:px-10 sm:px-0 sm:pr-8">
                <h2 className='font-chakra-petch text-white text-2xl pb-4'>Core skills</h2>
                <div className="skills gap-4 flex flex-row flex-wrap mt-4 lg:mt-0 xl:mt-4">
                  {[
                    { src: react, alt: 'react', name: 'React' },
                    { src: typescript, alt: 'typescript', name: 'Typescript' },
                    { src: next, alt: 'nextjs', name: 'Next.js' },
                    { src: html, alt: 'html', name: 'HTML & CSS' },
                  ].map((skill, name) => (
                    <div key={`tecnologies ${name}`} className='lg:scale-90 xl:scale-100 lg:-translate-x-1.5 xl:translate-x-0'>
                      <Image src={skill.src} alt={skill.alt} className='w-20 h-24' />
                      <p className='font-chakra-petch text-white text-[11px] text-left pl-2 w-20 break-words'>{skill.name}</p>
                    </div>
                  ))}
                </div>
                <div className="skills gap-4 flex flex-row flex-wrap mt-5 lg:mt-0 xl:mt-4">
                  {[
                    { src: leader, alt: 'leader', name: 'Leadership' },
                    { src: team, alt: 'team', name: 'Teamwork' },
                    { src: responsibility, alt: 'responsibility', name: 'Responsability' },
                    { src: problemSolving, alt: 'problemSolving', name: 'Problem Solving' },
                  ].map((skill, index) => (
                    <div key={`skills ${index}`} className='lg:scale-90 xl:scale-100 lg:-translate-x-1.5 xl:translate-x-0'>
                      <Image src={skill.src} alt={skill.alt} className="w-20 h-24" />
                      <p className='font-chakra-petch text-white  text-[11px] text-left pl-2 w-20 break-words'>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
