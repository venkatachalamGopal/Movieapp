import React from 'react'
import "./watch.scss";
import{ArrowBackOutlined} from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">   
        <ArrowBackOutlined/>Home
        </div>
        {/* <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/O1gD4uK3zwk"></video> */}
    </div>
  )
}

export default Watch;
