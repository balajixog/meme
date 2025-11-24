import { useEffect, useState, useRef} from "react"
import html2canvas from "html2canvas";   
import "../index.css"
export default function Main(){
   const [meme,setMeme]=useState(
      {
      topText:"one does not simply",
      bottomText:"walks into mordor",
      imageUrl:"https://i.imgflip.com/1bij.jpg"
    //  https://i.imgflip.com/1bij.jpg
      }
   )
   const memeRef = useRef(null)
   const topTextRef=useRef(null)
   const bottomTextRef=useRef(null)
//api fetch
   const[allMeme,setAllMeme]=useState([])
   useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>(setAllMeme(data.data.memes)))
   },[])

   function getMemeImage(){
      const randomImage = Math.floor(Math.random() * allMeme.length)
      const newMemeUrl = allMeme[randomImage].url;
      setMeme(preMeme => ({ 
         ...preMeme, 
         imageUrl : newMemeUrl

      })
   )
   }
//download image
   async function downloadSc(){
            if(!memeRef.current) return;
                const canvas = await html2canvas(memeRef.current,{
                useCORS: true});     
                const dataUrl = canvas.toDataURL("image/png")
                const link=document.createElement("a")
                link.href=dataUrl
                link.download="meme.png"
                link.click();
                console.log("image downloaded")
         }  
   //input values      
   function handleChange(event) {
          const {value,name}=event.target;
          console.log(value);
         //  const value=event.currentTarget.value;
          setMeme(preMeme=>(
            {
               ...preMeme,[name]:value
            }
          ))
         }
useEffect(() => {
    function makeDraggable(element) {
      if (!element) return;

      let offsetX = 0;
      let offsetY = 0;

      const onMouseDown = (e) => {
        e.preventDefault()
     //   element.style.transform = "none";   // stop centering with transform so our math is correct
        const rect = element.getBoundingClientRect();
        const parentRect = element.parentElement.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        const onMouseMove = (moveEvent) => {
          const x = moveEvent.clientX - parentRect.left - offsetX;
          const y = moveEvent.clientY - parentRect.top - offsetY;

          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      element.addEventListener("mousedown", onMouseDown);

      // cleanup for this element
      return () => {
        element.removeEventListener("mousedown", onMouseDown);
      };
    }

    const cleanups = [];
    if (topTextRef.current) cleanups.push(makeDraggable(topTextRef.current));
    if (bottomTextRef.current) cleanups.push(makeDraggable(bottomTextRef.current));

    // cleanup when component unmounts
    return () => {
      cleanups.forEach(fn => fn && fn());
    };
  }, []);   
         
    return(
        <main >
            <div className="form">
         <label>
            Top Text
            <input type="text" placeholder="Enter text" name="topText" onChange={handleChange} value={meme.topText}/>
         </label>
         <label>
            Bottom Text
            <input type="text" placeholder="Enter text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
         </label>
          <button onClick={getMemeImage}>Get a new meme image </button>
          <button onClick={downloadSc}>download meme image </button>
         </div>
         <div className="meme" ref={memeRef}>
            <img src={meme.imageUrl} alt="meme01" draggable={false} />
            <span className="top" ref={topTextRef}>{meme.topText}</span>
            <span className="bottom" ref={bottomTextRef}>{meme.bottomText}</span>
         </div>
        </main>
    )
}