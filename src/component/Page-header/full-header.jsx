// import { PageBanner } from "./PageBanner";
// import { PageNavigation } from "./PageNavigation"

// export function PageHeader (){
//     return(
//         <header>
//             <PageBanner/>
//             <PageNavigation/>
//         </header>
//     )
// } 
import './page-header.css'
import { PageBanner } from "./page-banner"
import { PageNavigation } from './page-navigation'

export const FullHeader = ()=>{
    return (
        <header className='header'>
            <PageBanner/>
            <PageNavigation/>
        </header>
    )
}