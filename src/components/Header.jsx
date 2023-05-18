import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuItems] = useState([
        { label: 'About me', id: 'home' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Projects', id: 'project' },
        { label: 'Contact', id: 'contact' },
    ]);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            const currentScrollPos = window.pageYOffset;
            const menuHeight = document.getElementById('header').offsetHeight;

            menuItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (
                    section.offsetTop - menuHeight <= currentScrollPos &&
                    section.offsetTop + section.offsetHeight - menuHeight > currentScrollPos
                ) {
                    setActiveMenuItem(item.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleMenuClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Navbar id={"header"} fixed={"top"} className={"navbar-custom"} expand="md" style={{ backgroundColor: scrolled ? '#ffffff' : '#ffffff55', borderBottom: activeMenuItem!=="home" ? "solid 1px #b2baf3": "none"}} >
            <Container>
                <Navbar.Brand href="#home">Taib Abroug</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"end"}}>
                    <Nav style={{fontSize: "17px"}}>
                        {
                            menuItems.map((navItem,index)=>
                                <Nav.Link active={activeMenuItem===navItem.id} key={"nav"+index} onClick={()=>{handleMenuClick(navItem.id)}}>{navItem.label}</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}