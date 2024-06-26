import { useEffect, useState } from "react";

export default function() {
    
    const [dots,setDots] =useState("");
    const [emojis,setEmojis] = useState("📭");
    const flagger = ()=> {
        if (emojis === "📭"){
            setEmojis("📬");
        }
        else {
            setEmojis("📭");
        }
    }
    const dotter = () => {
        if (dots.length < 3) {
            setDots(dots.concat("","."));
        }
        else {
            setDots("");
        }

    }
    useEffect(()=> {
        const intv =setInterval(()=> {dotter();flagger()},1000);
        return () => clearInterval(intv);
    },[dots])



    return (
        <div className='hero-text' onClick={dotter}>
            <div><span>{emojis}</span></div>
        Track It!<span style={{}}>{dots}</span>
    </div>
    )
}