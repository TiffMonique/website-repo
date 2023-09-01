import { ILink } from './Link.interface';

const Link = ({ size, style, children, className, download = false, link }: ILink) => {

    const linkStyling = {
        'primary': `shadow-button bg-button-gradient hover:shadow-active-hover`,
        'secondary': 'border-color-inactive xs:border md:border-2',
        'other': 'bg-social-gradient hover:shadow-active-hover'
    }
    const linkSize = {
        'small': 'shadow-social rounded px-10 xs:py-3 sm:py-3 xs:gap-2.5 w-auto',
        'medium': 'rounded gap-1.5 xs:py-3 sm:py-3 lg:py-7 xl:py-7 xs:px-3 sm:px-3 md:px-3.5 lg:px-3.5 xl:px-3.5',
        'large': 'rounded-md gap-2 py-3 px-9 text-lg font-normal',
        'card': 'rounded-md xs:py-2.5 xs:px-8 xs:text-base font-normal'
    }
    let buttonClasses = `transition text-white font-inter font-medium items-center justify-items-center ${className} ${linkStyling[style]} ${linkSize[size]}`;

    return (
        <>
            {download ? (
                <a href={'/CV.pdf'} download='CV-Monique Matamoros' className={` ${buttonClasses}`}>
                    {children}
                </a>
            ) : (
                <a href={link} target="_blank" className={buttonClasses}>
                    {children}
                </a>
            )}
        </>
    )
}

export default Link