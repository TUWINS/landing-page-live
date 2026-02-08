
export const Navbar = () => {
    return (
    <div>
 <nav>
        <ul className='flex gap-6'>
            <li>
                <a className='hover:text-teal-200' href="#">Features</a>
            </li>

            <li>
                <a className='hover:text-teal-200' href="#">Team</a>
            </li>

            <li>
                <a className='hover:text-teal-200' href="#">Sing In</a>
            </li>
        </ul>
    </nav>
    </div>
    )
}

export default Navbar
