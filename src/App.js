import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider';
import data from "./data/data.json";
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';


function App() {
  return (
   <Router>

     <PreNavbar />

     <Navbar />

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

     <Slider start={data.banner.start} />

     <Offers offer={data.offer} />

     <Heading text="STAR PRODUCTS" />

     <StarProduct starProduct={data.starProduct} />

     <Heading text="HOT ACCESSORIES" />

     <HotAccessoriesMenu />

     <Route path="/music" exact>
      <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
     </Route>

     <Route path="/smartDevice" exact>
      <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
     </Route>

     <Route path="/home" exact>
      <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
     </Route>

     <Route path="/lifestyle" exact>
      <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />
     </Route>

     <Route path="/mobileAccessories" exact>
      <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
     </Route>

     <Heading text="PRODUCT REVIEWS" />

     <ProductReviews productReviews={data.productReviews} />

     <Heading text="VIDEOS" />

     <Videos videos={data.videos} />

     <Heading text="IN THE PRESS" />

     <Banner banner={data.banner} />

     <Footer footer={data.footer} />

   </Router>
  );
}

export default App;
