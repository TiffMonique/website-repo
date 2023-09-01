'use client'
import Atropos from "atropos/react"
import Image from "next/image"
import Capa0 from "../../../assets/img/square.png"
import photo from "../../../assets/img/capa1.png"
import description from "../../../assets/img/capa3.png"
import Capa4 from "../../../assets/img/capa4.png"


const CustomImage = () => {
  const atroposbannerimg = "xs:w-[110%] xs:h-[110%] md:w-4/5 md:hh-4/5 z-10  absolute  object-contain pointer-events-none"
  const classimg2 = "w-full h-auto z-10  relative object-contain pointer-events-none invisible "
  const atroposbanner = "w-full z-50"
  return (
    <div className="px-8 sm:px-0 sm:py-6 xs:pb-6 xs:w-4/5 xs:h-full sm:w-4/5 sm:h-4/5 sm:self-start">
      <Atropos className={atroposbanner} highlight={false}>
        <div className="flex items-center justify-center relative">
          <Image src={Capa0} alt="Monique container" className={`${classimg2} $${atroposbannerimg}`} />
          <Image data-atropos-offset="-4" src={Capa0} className={atroposbannerimg} alt="Monique container" />
          <Image data-atropos-offset="-1" src={photo} alt="monique"
            className={atroposbannerimg} />
          <Image data-atropos-offset="1" src={Capa4} alt="square" className={atroposbannerimg} />
          <Image data-atropos-offset="4" src={description} alt="" className={atroposbannerimg} />
        </div>
      </Atropos>
    </div>
  )
}

export default CustomImage