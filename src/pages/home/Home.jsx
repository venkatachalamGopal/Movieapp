import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Watch from "../watch/Watch";



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type="movie"/>
        <List/>
        <List/>
        <List/>
        

      
    </div>
  )
}

export default Home
