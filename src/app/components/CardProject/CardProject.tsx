import Link from '../Link/Link'
import { CardProjectProps } from './CardProject.interface'

const CardProject = ({ active, title, onClick, index, link }: CardProjectProps) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div onClick={handleClick}>
      {
        active ? (
          <div className="flex items-center justify-center">
            <div className="p-2 bg-card-gradient xs:w-11/12 sm:w-8/12 pointer rounded border-card-active xs:border md:border-2">
              <div className='card flex sm:block items-center justify-between sm:pl-5'>
                <h2 className='xs:text-base md:text-xl md:pt-5 xs:ml-4 sm:ml-0 text-white'>{title}</h2>
                <div className="xs:flex-end sm:pb-5 sm:mt-11">
                  <Link size="card" style="primary" link={link}>
                    View
                  </Link>
                </div>
              </div>
            </div >
          </div>
        ) : (
          <div className="xs:flex items-center justify-center ">
            <div className="p-2 bg-card xs:w-11/12 sm:w-8/12 rounded border-color-inactive xs:border md:border-2 pointer">
              <div className="card flex sm:block items-center justify-between sm:pl-5">
                <h2 className="xs:text-base md:text-xl xs:ml-4 sm:ml-0 text-[#FFF] md:pt-5">{title}</h2>
                <div className="xs:flex-end sm:pb-5 sm:mt-11 xs:my-2 sm:m-0">
                  <Link size="card" style="secondary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  )
}

export default CardProject