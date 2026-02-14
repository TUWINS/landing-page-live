interface Props{
    text:string,
    inconUrl:string;
    alt:string;
}

export const ContactItem = ({text,inconUrl,alt}: Props) => {
    return (
    <div>
    <div className='flex items-start gap-6'>
        <img className='mt-1'src={inconUrl} alt={alt} />
        <p >{text}</p>
    </div>
    </div>
    )
}


