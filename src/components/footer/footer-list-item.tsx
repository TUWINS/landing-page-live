interface Props{
    text:string;
}

export const FooterListItem = ({ text }: Props) => {
    return (
        <li>
        <a className='hover:text-amber-500' href="#">{text}</a>
        </li>
    )
}


