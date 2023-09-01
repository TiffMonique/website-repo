export interface ILink { 
    size: 'small' | 'medium' | 'large' | 'card';
    children: React.ReactNode;
    style: 'primary' | 'secondary' | 'other';
    className?: string;
    download?: boolean;
    link?: string;
    onClick?: () => void;
}