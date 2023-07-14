import React from 'react'
import "./don.scss";
import{ArrowBackOutlined} from "@mui/icons-material";
import {useParams,NavLink} from "react-router-dom";

const Don = ({data}) => {
  const{id}=useParams();
  // console.log(id);
 const movElem=data[id];
  return (
      <div className='movie'>
        <div className='btn'>   
        <NavLink to="/" className="nav">
        <ArrowBackOutlined/>Back to Home
        </NavLink>
        </div>
        <iframe width="560" height="315" src={movElem.trailer}  frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}

export default Don
