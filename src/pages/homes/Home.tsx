import BannerCarousel from "../component/BannerCarousel";
import UpComming from "./UpComming";
import Volunteer from "./Volunteer";
import WhoWe from "./WhoWe";
import WinterCloths from "../cloths/WinterCloths";
import DonorTestimonial from "./donorTestimonial/DonorTestimonial";
import Gallery from "./gallery/Gallery";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <WinterCloths />
      <DonorTestimonial />
      <Gallery />
      <WhoWe />
      <Volunteer />
      <UpComming />
    </div>
  );
};

export default Home;
