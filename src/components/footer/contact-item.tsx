interface Props{
    text:string,
    iconUrl:string;
    alt:string;
    styles?:string;
}

    export const ContactItem = ({ text, iconUrl, alt, styles = '' }: Props) => {
    return (
        <div className={`flex items-center gap-4 ${styles}`}>
        <img className='w-6 h-6' src={iconUrl} alt={alt} />
        <p className='text-sm'>{text}</p>
        </div>
    );
    }

