import logo from '../assets/images/logo (1).png';

const Navbar = ({ onNavLinkClick }) => {
    const smoothScroll = (id) => {
        onNavLinkClick();
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({ 
                behavior: 'smooth'
            });
        }, 0);
    }



    return (
        <nav className='nav'>
            <a className='Title'><img src={logo} width={80} /></a>
            <ul>
                <li>
                    <a onClick={() => smoothScroll('Projects')}>Projects</a>
                </li>
                <li>
                    <a onClick={() => smoothScroll('About')}>About</a>
                </li>
                <li>
                    <a onClick={() => smoothScroll('Contact')}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;