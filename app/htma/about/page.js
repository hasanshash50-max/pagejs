"use client"
export default function()
{
    return(
        <div>
            <img src="../phone.png" ></img>
            <u 
            style={{
                position:"absolute",
                top:"160px",
                color:"#fff",
                background:"#22222265",
                textDecoration:"none",
                textAlign:"center",
                fontWeight:"bolder"
            }}>Htma  is with you to learn artificial intelligence</u>
            <p style={{
                border: "solid 2px #fff",
                boxShadow: "1px 1px 3px 3px #2222221f",
                width: "400px",
                height: "240px",
                borderRadius: "5px",
                position:"relative",
                top:"-95px"
            }}>
                <img src="../ais.png"
                style={{
                    width:"200px",
                    height:"236px"
                }}></img>
                <u style={{
                    position:"absolute",
                    top:"20px",
                    left:"207px",
                    textAlign:"center",
                    textDecoration:"none",
                    fontSize:"22px",
                    color:"#0906aa"
                }}>Artificial Intelligence <br></br> Learning Course</u>
                <button onClick={() => window.open("https://www.youtube.com/watch?v=pszZFJ7_lF0")} target = "_blank" style={{
                    position:"absolute",
                    left:"264px",
                    top:"160px",
                    background:"#3d4ff5",
                    color:"#fff",
                    borderRadius: "20px",
                    padding: "4px 20px",
                    cursor:"pointer"
                }}>More</button>
            </p>
            <del style={{
                position:"absolute",
                left:"150px",
                top:"700px",
                textDecoration:"none",
                color:"gray"
            }}>@HTMA.com</del>
        </div>
    )
}