import Image from "next/image"
import { IContentProjects } from "./ContentProject.interface"

const ContentProject = (props: IContentProjects) => {
  const { title, image, description, listItems } = props
  let firstColumnItems: string[] = [];
  let secondColumnItems: string[] = [];

  if (listItems.length > 3) {
    const midIndex = Math.ceil(listItems.length / 2);
    firstColumnItems = listItems.slice(0, midIndex);
    secondColumnItems = listItems.slice(midIndex);
  } else {
    firstColumnItems = listItems;
  }

  return (
    <div className="xs:py-10 sm:bg-[#171619]">
      <div className="title text-white font-chakra-petch pl-4 pb-6 sm:hidden">
        <h1 className="xs:text-2xl font-semibold">{title}</h1>
      </div>
      <div className="image flex justify-center items-center">
        <Image src={image} alt="Image Project" className="rounded xs:w-10/12 lg:w-9/12" />
      </div>
      <div className="description flex justify-center items-center pt-4">
        <p className="text-white font-inter leading-relaxed font-light xs:w-10/12 lg:w-9/12">{description}</p>
      </div>
      <div className="tecnologies">
        <div className="subtitle xs:py-6 flex justify-center items-center">
          <h2 className="text-white font-inter xs:text-xl font-semibold xs:w-10/12 lg:w-9/12">Technologies used</h2>
        </div>
      </div>
      <div className="items flex justify-center items-center">
        <div className="list text-white font-inter leading-8 grid grid-cols-2 xs:w-10/12 lg:w-9/12">
          <ul>
            {firstColumnItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {secondColumnItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContentProject