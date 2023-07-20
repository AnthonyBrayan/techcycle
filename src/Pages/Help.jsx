import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar';
import CartProducts from '../Components/CartContent/CartProducts';
import FooterData from '../Components/Footer/FooterData';
import Socials from '../Components/Footer/Socials';
import ContactForm from '../Components/Form/ContactForm';

export default function Help(){
   return (
      <div>
         <BannerTop />
         <Navbar />
         <ContactForm />
         <CartProducts />
         <FooterData />
         <Socials />
      </div>
   )
};