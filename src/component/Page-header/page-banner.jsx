// export function PageBanner (){
//     return(
//         <nav>
//             My Banner
//         </nav>
//     )
// }
import './page-header.css'
import FacebookIcon from '../../assets/icons/facebook.svg?react';
import InstagramIcon from '../../assets/icons/instagram.svg?react';
import LinkedInIcon from '../../assets/icons/linkedin.svg?react';
import YoutubeIcon from '../../assets/icons/youtube.svg?react';
import PhoneIcon from '../../assets/icons/phone.svg?react';
import EnvelopeIcon from '../../assets/icons/envelope.svg?react';
import LocationIcon from '../../assets/icons/location.svg?react';

export const PageBanner = () => {
    return (
        <header className="banner">
            <div className='banner__contact'>
               <div className='banner__contact-item'>
                <PhoneIcon/>
                <span>(00) 875 784 5682</span>
               </div>

               <div className='banner__contact-item'>
                <EnvelopeIcon/>
                <span>pacargoinfo@gmail.com</span>
               </div>

               <div className='banner__contact-item'>
                <LocationIcon/>
                <span>238, Arimantab, Moska - USA.</span>
               </div>
            </div>
            <ul className="banner_social">
                
                <li>
                    <FacebookIcon/>
                </li>

                <li>
                   <InstagramIcon/>

                </li>
                <li>
                    <LinkedInIcon/>

                </li>
                <li>
                   <YoutubeIcon/>

                </li>
            </ul>
        </header>
    )
};
