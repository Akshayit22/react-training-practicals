import CustomerReview from '../Components/CustomerReview';
import FoodBlogs from '../Components/FoodBlogs';
import FoodOptions from '../Components/FoodOptions';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import OrganicProducts from '../Components/OrganicProducts';

function Home() {
  return (
    <div>
        <HeroSection/>
        <FoodOptions/>
        <OrganicProducts/>
        <CustomerReview/>
        <FoodBlogs/>
        <Footer/>
    </div>
  )
}

export default Home;