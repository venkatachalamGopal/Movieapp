import "./list.scss";
import { useRef,useState} from "react";
import{ArrowBackIosOutlined,ArrowForwardIosOutlined} from "@mui/icons-material";
import Listitem from "../listItem/Listitem";

const List = () => {
    // Hooks..
        const [isMoved,setIsMoved]=useState(false);
        const [slideNumber,setSlideNumber]=useState(0);
        const listRef=useRef();

        const handleClick=(direction)=>{
            setIsMoved(true);
            let distance=listRef.current.getBoundingClientRect().x-50;

            if(direction === "left" && slideNumber>0){
                setSlideNumber(slideNumber-1);
                listRef.current.style.transform=`translateX(${230+distance}px)`
            }
            if(direction === "right" && slideNumber<5){
                setSlideNumber(slideNumber+1);
                listRef.current.style.transform=`translateX(${-230+distance}px)`
            }

        }
        // Data ,, 
        
        const data=[
            {
              "id": "0",
              "name": "VIKRAM",
              "year":"2022",
              "poster": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/may-15-audio-release-to-kick-off-buildup-for-kamal-haasan-starrer-vikram-001.jpg",
              "rating": "8.3",
              "duration":"2 mins 39 secs",
              "summary": "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
              "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
            },
            {
              "id": "1",
              "name": "SooraraiPottru",
              "year":"2020",
              "poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzQ4Z-uKsIAvXmDoPUv4zDRWqWeMNFdJLnA&usqp=CAU",
              "rating": "8.8",
              "duration":"2 mins 01 secs",
              "summary": "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
              "trailer": "https://www.youtube.com/embed/fa_DIwRsa9o"
            },
            {
              "id": "2",
              "name": "Thuppaki",
              "year":"2012",
              "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQim72tBKMi3iUeiH7P3wB7b3A7gd1x4-kMWw&usqp=CAU",
              "rating": "8.1",
              "duration":"2 mins 03 secs",
              "summary": "In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan to capture the mastermind behind these attacks.",
              "trailer": "https://www.youtube.com/embed/aW_j4pNvG98"
            },
            {
              "id": "3",
              "name": "Jai Bhim",
              "year":"2021",
              "poster": "https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2021/11/2/jai-bhim-review-1.jpg.transform/schema-4x3/image.jpg",
              "rating": "8.7",
              "duration":"2 mins 40 secs",
              "summary": "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
              "trailer": "https://www.youtube.com/embed/Gc6dEDnL8JA"
            },
            {
              "id": "4",
              "name": "Theri",
              "year":"2016",
              "poster": "https://static.toiimg.com/thumb/msid-61295795,width-219,height-317,imgsize-129516/61295795.jpg",
              "rating": "7.3",
              "duration":"3 mins 16 secs",
              "summary": "DCP Vijaya Kumar goes into hiding to bring up his daughter in a safe environment. However, after her life is threatened by deadly gangsters, he must face his past to protect his daughter.",
              "trailer": "https://www.youtube.com/embed/TRfsQ7IrU78"
            },
            {
            "id": "5",
            "name": "Mersal",
            "year":"2017",
            "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/Mersal_soundtrack.jpg",
            "rating":"7.5",
            "duration":"2 mins 39 secs",
            "summary":"Maaran, a doctor, is falsely arrested for the murder of his colleague, Dr Arjun Zachariah. He soon discovers that the real culprit is a lookalike who aims to expose corruption in the medical industry.",
            "trailer": "https://www.youtube.com/embed/vOCM9wztBYQ"
              },
            {
              "id": "6",
              "name": "Theri",
              "year":"2016",
              "poster": "https://static.toiimg.com/thumb/msid-61295795,width-219,height-317,imgsize-129516/61295795.jpg",
              "rating": "7.3",
              "duration":"3 mins 16 secs",
              "summary": "DCP Vijaya Kumar goes into hiding to bring up his daughter in a safe environment. However, after her life is threatened by deadly gangsters, he must face his past to protect his daughter.",
              "trailer": "https://www.youtube.com/embed/TRfsQ7IrU78"
            },
            {
              "id": "7",
              "name": "Jai Bhim",
              "year":"2021",
              "poster": "https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2021/11/2/jai-bhim-review-1.jpg.transform/schema-4x3/image.jpg",
              "rating": "8.8",
              "duration":"2 mins 40 secs",
              "summary": "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
              "trailer": "https://www.youtube.com/embed/Gc6dEDnL8JA"
            },
            {
              "id": "8",
              "name": "Arunachalam",
              "year":"1997",
              "poster": "https://a10.gaanacdn.com/images/albums/15/1895915/crop_480x480_1596798462_1895915.jpg",
              "rating": "7.5",
              "duration":"4 mins 35 secs",
              "summary": "An orphan discovers that he is the son of a late multimillionaire, Vedhachalam. To inherit the property, he has to spend thirty crores in a month, without gifting or donating it.",
              "trailer": "https://www.youtube.com/embed/nw4qmUgwYaw"
            },
            {
                "id": "9",
                "name": "VIKRAM",
                "year":"2022",
              "poster": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/may-15-audio-release-to-kick-off-buildup-for-kamal-haasan-starrer-vikram-001.jpg",
              "rating": "8.3",
              "duration":"2 mins 39 secs",
              "summary": "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
              "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
              }
          ];
          

  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")}style={{display:!isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    {
                        data.map((elem,index,array)=> 
                        <Listitem key={index} index={index} elem={elem} array={array}/> 
                        )
                    }
                 {/* <Listitem index={0}/>   
                 <Listitem index={1}/>   
                 <Listitem index={2}/>   
                 <Listitem index={3}/>   
                 <Listitem index={4}/>   
                 <Listitem index={5}/>   
                 <Listitem index={6}/> 
                 <Listitem index={7}/>   
                 <Listitem index={8}/>   
                 <Listitem index={9}/>    */}
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>

        </div>
      
    </div>
  )
}

export default List
