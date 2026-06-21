import sarvesharunImage from "../../../assets/images/sarvesh.jpg";
import './Logo.scss'

const Logo = () => {

   return (
     <div className="logo-container">
       <img
         className="profile-portrait"
         src={sarvesharunImage}
         alt="JavaScript,  Developer"
       />
     </div>
   );
}

export default Logo