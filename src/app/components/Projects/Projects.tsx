'use client'
import CardProject from "../CardProject/CardProject"
import ShortURL from "../../../assets/img/shorturl.png"
import comingsoon from "../../../assets/img/comingsoon.png"
import ContentProject from "../ContentProject/ContentProject";
import { useEffect, useState } from "react";
import { TbArrowBack } from 'react-icons/tb';


const Projects = () => {

    const cardData = [
        {
            image: ShortURL,
            title: 'URL Shortening App',
            description:
                'ShortURL revoluciona el manejo de URLs extensas al fusionar tecnología avanzada con una interfaz sencilla.Simplemente pega la URL en nuestra plataforma y, en segundos, obtendrás un enlace acortado que conserva su funcionalidad y es más conveniente para compartir y recordar.',
            listItems: ['Typescript', 'Next.js', 'Supabase', 'Tailwind', 'Mixpanel', 'Figma'],
            link: 'https://shorturl.lat/'
        },
        {
            image: comingsoon,
            title: 'Coming Soon',
            description:
                'Coming Soon',
            listItems: ['Coming Soon'],
            link: 'javascript:void(0)'
        },
    ];
    const [selectedCard, setSelectedCard] = useState(cardData[0]);
    const [activeCard, setActiveCard] = useState<number | undefined>(undefined);
    const [showContent, setShowContent] = useState(false);
    const [shouldShowContent, setShouldShowContent] = useState(false);

    const handleCardClick = (index: number) => {
        if (index === activeCard) {
            return;
        }
        setSelectedCard(cardData[index]);
        setActiveCard(index);
        setShowContent(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setShouldShowContent(
                (window.innerWidth <= 640 && !showContent) || window.innerWidth >= 768
            );
        };
        if (window.innerWidth >= 768) {
            setShowContent(true);
            setSelectedCard(cardData[0]);
            setActiveCard(0);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showContent]);

    const handleGoBack = () => {
        setSelectedCard(cardData[0]);
        setActiveCard(undefined);
        setShowContent(false);
    };

    return (
        <div className="projects sm:grid sm:grid-cols-2">
            <div className="sm:h-auto cardstoselect sm:mt-28">
                {shouldShowContent ? (
                    <div className="bg-background-dark sm:border sm:rounded-lg sm:border-border-project">
                        <div className="font-chakra-petch sm:pt-[90px] xs:text-3xl lg:text-4xl font-semibold xs:pt-10 sm:text-center">
                            <h1 className="text-white xs:ml-4 mb-1.5">Building experience</h1>
                            <h2 className="text-gray-building xs:ml-10">& Building projects.</h2>
                        </div>
                        <div className="grid gap-6 sm:mb-24 xs:py-10 sm:pb-0">
                            {cardData.map((card) => (
                                <CardProject
                                    key={card.title}
                                    onClick={() => handleCardClick(cardData.indexOf(card))}
                                    active={cardData.indexOf(card) === activeCard}
                                    title={card.title}
                                    index={cardData.indexOf(card)}
                                    link={card.link}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div >
            <div className="contentProject sm:mt-28">
                {showContent ? (
                    <div className="xs:bg-background">
                        <button
                            onClick={() => handleGoBack()}
                            className="border-purple bg-button-goback-gradient hover:shadow-active-hover rounded pointer border-2 sm:hidden flex mt-4 px-4 py-2 ml-4 text-white w-auto gap-1.5 xs:py-3 sm:py-3 lg:py-7 xl:py-7 xs:px-3 sm:px-3 md:px-3.5 lg:px-3.5 xl:px-3.5"
                        >
                            <TbArrowBack className="text-xl bold" />
                            Go Back
                        </button>
                        <ContentProject {...selectedCard} />
                    </div>
                ) : null
                }
            </div>

        </div>

    )
}

export default Projects