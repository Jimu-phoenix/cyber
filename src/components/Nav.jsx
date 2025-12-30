import '../styles/Nav.css'
import cxlogo from '../assets/logos/logo1.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Nav(props){

    const [mobilemenuClass, setMobileMenuClass] = useState('mobilemenu')

    const handleNav = ()=>{
        mobilemenuClass === 'mobilemenu' ? setMobileMenuClass('mobilemenuShow') : setMobileMenuClass('mobilemenu');
    }
    const handleClose = ()=>{
        mobilemenuClass === 'mobilemenu' ? setMobileMenuClass('mobilemenuShow') : setMobileMenuClass('mobilemenu');
    }

    return(
        <nav>
            <img src={cxlogo} alt="logo" className='cxlogo'/>
            <button className='mobilebtn' onClick={handleNav}>
                <img width="48" height="48" 
                src="https://img.icons8.com/fluency-systems-filled/96/bar-chart.png" alt="bar-chart"/>
            </button>
            <ul className={mobilemenuClass}>
                <li className='logoElement'><img src={cxlogo} alt="logo" className='cxlogo-mobile'/></li>
                <li onClick={handleClose}><img width="48" height="48" src="https://img.icons8.com/shadow/48/delete-sign.png" alt="delete-sign"/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Events</Link></li>
                <li><Link to="/login">Gallery</Link></li>
                <li><Link to="/login">Athletes</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Events</Link></li>
                <li><Link to="/login">Gallery</Link></li>
                <li><Link to="/login">Athletes</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}