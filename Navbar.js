import logo from '../assets/images/logo (1).png';

const Navbar = () => {

    return (<nav className='nav'>
        <a className='Title'><img src = {logo} width={80}/></a>
        <ul>
            <li>
                <a href = '#Projects'>Projects</a>
            </li>
            <li>
                <a href = '#about'>About</a>
            </li>
            <li>
                <a href = '#contact'>Contact</a>
            </li>
        </ul>
    </nav>)

}

export default Navbar;