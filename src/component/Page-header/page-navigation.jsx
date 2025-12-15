// export function PageNavigation (){
//     return(
//         <nav>
//             My Navigation Bar
//         </nav>
//     )
// }
import Button from '../buttons/button.jsx'
import ArrowIcon from '../../assets/icons/arrow-right.svg?react'
export const PageNavigation = () => {
    return (
        <nav className="navigation">
            <div >
                <img className="navigation_logo" width={220} height={54} style={{ marginLeft: 20.5}} src="/Logo.png" alt="" />
            </div>
            <menu>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </menu>

            <Button variant="cta" rightIcon={<ArrowIcon />}>
                Create Account
            </Button>

        </nav>
    )
}