import Image from 'next/image';
import light from '../../../assets/img/Light.png';
import Link from 'next/link';


const Navbar = () => {
  return (
    <>
      <Image
        className='w-full absolute'
        src={light}
        alt="grid"
      />
      <div className='relative z-10 flex items-center justify-between h-24 text-white xs:px-4 sm:px-8 md:px-16 lg:px-16 xl:px-16'>
        <Link href="/" className='font-semibold xs:text-sm sm:text-xl md:text-2xl font-chakra-petch hover:text-pink '>Monique Dev</Link>
        <ul className='flex items-center xs:gap-4 sm:gap-5'>
          <li className='font-light xs:text-xs sm:text-sm font-inter hover:text-pink'>
            <Link href="/#projects">Projects</Link>
          </li>
          <li className='font-light xs:text-xs sm:text-sm font-inter hover:text-pink'>
            <Link href="/#about">About</Link>
          </li>
          <li className='font-light xs:text-xs sm:text-sm font-inter hover:text-pink'>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>

  );
};

export default Navbar;
