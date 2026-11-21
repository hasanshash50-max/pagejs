import "./htma.css"
import Link from "next/link";
export default function({children})
{
    return(
        <div className="parent"> 
            {children}
           <div>
               <nav>
                <Link href="">Home</Link>
                <Link href="">About</Link>
                <Link href="">Departments</Link>
                <Link target = "_blank" href="https://www.google.com/search?q=%D9%85%D9%88%D9%82%D8%B9+%D9%83%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA+%D8%A8%D8%B7%D8%B1%D8%B7%D9%88%D8%B3&oq=%D9%85%D9%88%D9%82%D8%B9+%D9%83%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA+%D8%A8%D8%B7%D8%B1%D8%B7%D9%88%D8%B3&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRifBdIBCjQwMjg1ajBqMTWoAgCwAgA&sourceid=chrome&source=chrome.rb&ie=UTF-8" id="htma">HTMA</Link>
                </nav>
                <img src="ai.png" id="ai"></img>
           </div>
        </div>
    )
}