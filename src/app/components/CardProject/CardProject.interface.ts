export interface CardProjectProps {
    active: boolean;
    className?: string;
    onClick: (index: number) => void
    title: string;
    index: number;
    link: string;
}