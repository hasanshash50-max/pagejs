import "./htma.css"
import Link from "next/link";
export default function({children})
{
    return(
        <div className="parent"> 
            {children}
           <div>
               <nav>
                <Link href="/htma">Home</Link>
                <Link href="../htma/department">Departments</Link>
                <Link href="../htma/about">About</Link>
                <Link target = "_blank" href="https://tartous-univ.edu.sy/faculties/kly-hnds-tknologya-almaalomat-oalatsalat" id="htma">HTMA</Link>
                </nav>
                <img src="ai.png" id="ai"></img>
           </div>
        </div>
    )
}