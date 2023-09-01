'use client'
import Image from 'next/image';
import sparkle from '../../../assets/img/sparkle.png';
import gridFooter from '../../../assets/img/Group.png';
import Button from '../Link/Link';
import Link from 'next/link';
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import YoutubeIcon from '../Icons/YoutubeIcon/YoutubeIcon';
import EmailIcon from '../Icons/EmailIcon/EmailIcon';

const Footer = () => {
  return (
    <footer>
      <div className='relative'>
        <div className='absolute gap-12 md:gap-36 inset-0 flex flex-col justify-center items-center bg-opacity-80 bg-black'>
          <div className="about">
            <div className='flex justify-center items-center gap-2'>
              <div>
                <Image src={sparkle} alt='sparkle mb-4' className='w-6 h-8' />
              </div>
              <h2 className='text-grayvariant font-chakra-petch xs:text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold'>Let’s have a chat</h2>
            </div>
            <div className="flex justify-center items-center mt-6">
              <p className='text-white font-light font-inter xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg xs:w-[300px] sm:w-[470px] md:w-[500px] 2xl:w-[600px] text-center'>
                Contact me if you have a question or want to work together, I promise to reply as soon as I can!
              </p>
            </div>
            <div className='flex flex-col xs:flex-row justify-center items-center gap-4 mt-8'>
              <div className="flex flex-row gap-4 xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <Button size="small" style="other" download={false} link="https://github.com/TiffMonique" >
                  <span>
                    <GithubIcon />
                  </span>
                </Button>
                <Button size="small" style="other" download={false} link="https://www.youtube.com/channel/UCpLDG26rmWQcvem3rqrlSOg">
                  <span>
                    <YoutubeIcon />
                  </span>
                </Button>
              </div>
              <div className="flex gap-4 xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <Button size="small" style="other" download={false} link="mailto:tmonique.mg@gmail.com" >
                  <span>
                    <EmailIcon />
                  </span>
                </Button>
                <Button size="small" style="other" download={false} link="https://www.linkedin.com/in/monique-matamoros/" >
                  <span >
                    <LinkedinIcon />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className='links text-white'>
            <ul className='flex items-center xs:gap-4 sm:gap-5'>
              <li className='xs:text-xs sm:text-base font-inter font-light hover:text-pink'>
                <Link href="/#projects">Projects</Link>
              </li>
              <li className='xs:text-xs sm:text-base font-inter font-light hover:text-pink'>
                <Link href="/#about">About</Link>
              </li>
              <li className='xs:text-xs sm:text-base md:text-base font-inter font-light hover:text-pink'>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            className='xs:h-96 md:h-[600px] 2xl:h-[700px] 2xl:w-[100%] transition-opacity opacity-0 duration-[2s]'
            src={gridFooter}
            alt="grid"
            priority
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </div>

      </div >
    </footer >
  )
}

export default Footer;
