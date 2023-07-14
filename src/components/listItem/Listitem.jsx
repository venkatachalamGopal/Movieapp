import "./listitem.scss";
import{PlayArrow,Add,ThumbUpAltOutlined,ThumbDownOutlined} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Listitem = ({index,elem,array}) => {
    const id=elem.id;
    const navigate=useNavigate();

      const [isHovered,setIsHovered]=useState(false);
      // const trailer=elem.trailer;
      // console.log(trailer);
      const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
      return (
    <div className='listItem'
    style={{left:isHovered && index*225-50+index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src={elem.poster}
        alt="Moviesimg"/>
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop/>
            {/* <iframe src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"onClick={()=>navigate(`/don/${id}`)} />
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
        
        
            <div className="itemInfoTop">
              <span>{elem.duration}</span>
              <span className="limit">{elem.rating}</span>
              <span>{elem.year}</span>
              <span className="title">{elem.name}</span>
            </div>
            
            <div className="desc">
              {elem.summary}
            </div>

            {/* <div className="genre">Action</div> */}
          </div>
        </>
        )}
    </div>
  )
}

export default Listitem
