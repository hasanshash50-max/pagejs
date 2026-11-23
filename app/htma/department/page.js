"use client"
import Link from "next/link"
export default function()
{
    return(
        <div>
            <img src="../ces.png"
            style={{
                position:"relative",
                top:"47px",
                height:"240px",
                width:"450px",
                borderRadius:"0px 0px 5px 5px"
            }}></img>
            <h5><img src="../CESE.png" id="cese"></img> <del id="ce">CESE</del> <Link target = "_blank" href="https://tartous-univ.edu.sy/department/48" id="more">More</Link> </h5>
            <h6><img src="../ICT.png" id="ict"></img> <del id="ic">ICT</del> <Link target = "_blank" href="https://tartous-univ.edu.sy/department/45" id="more1">More</Link></h6>
            <h1><img src="../IT.png" id="it"></img> <del id="ti">IT</del> <Link target = "_blank" href="https://tartous-univ.edu.sy/department/46" id="more2">More</Link></h1>
            <div className="join"><img src="../ITE.png" id="ite"></img> 
              <ul>Join us at HTMA University</ul>
            </div>
              <button onClick={() => window.open("https://t.me/+RgajQeJSbeoyMWE0")} target = "_blank"><img src="../tele.png" id="tele"></img></button>
        </div>
    )
}