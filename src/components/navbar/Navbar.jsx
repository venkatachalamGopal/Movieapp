import "./navbar.scss";
import { Notifications } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import{ArrowDropDown} from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
    // for Scrolling 
    const[isScrolled,setIsScrolled]=useState(false);
    // console.log(isScrolled);
    // window.pageYOffset -- value changed,,

    window.onscroll=()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    }

  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
      <div className="container">
            <div className="left">
                <img src="https://repository-images.githubusercontent.com/234538112/b3b60300-3fb2-11ea-8c9d-af3ec292a086 "
                alt="Logo image" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            
            <div className="right">
                <Search className="icon"/>
                <span>KID</span> 
                <Notifications className="icon"/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="usericon" />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>

      </div>
    </div>
  )
}

export default Navbar
