import { StaticImageData } from "next/image";

export interface IContentProjects { 
    title: string;
    image: StaticImageData;
    listItems: string[];
    description: string;
}