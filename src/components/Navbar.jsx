import { useNavigate, useLocation } from "react-router-dom"
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg' 
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg' 
import {ReactComponent as personOutlineIcon} from '../assets/svg/personOutlineIcon.svg' 

function Navbar(){
    return (   
/* <footer className="navbar"> */
            <nav className="navbarBav"> 
                <ul className="navbarListItems">
                    <li className="navbarListItem">
                        <ExploreIcon fill="#2c2c2c" width='36px' height= "36px" />
                        
                        <p>Explore</p>
                    </li>
                    <li className="navbarListItem">
                        <OfferIcon fill="#2c2c2c" width='36px' height= "36px" />
                            
                        
                        <p>Offer</p>
                    </li>
                    <li className="navbarListItem">
                        <personOutlineIcon fill="#2c2c2c" width='36px' height= "36px"/>
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
            
       /* </footer> */
    )


}

export default Navbar