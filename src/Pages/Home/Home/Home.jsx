import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefCards from "../ChefCards/ChefCards";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
  return (
    <div >
      <Banner/>
      <Category/>
      <Bistro/>
      <PopularMenu/>
      <CallUs/>
      <ChefCards/>
      <Featured/>
    </div>
  );
};

export default Home;