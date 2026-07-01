import { useEffect,useState } from "react";

const texts=[

"Finding memories...",

"Collecting little moments...",

"Preparing something special...",

"Almost ready..."

];

export default function Loading(){

const[index,setIndex]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setIndex(prev=>(prev+1)%texts.length);

},800);

return()=>clearInterval(interval);

},[]);

return(

<div
className="
fixed
inset-0
bg-[#f8f4ee]
flex
items-center
justify-center
flex-col
"
>

<div
className="
text-6xl
mb-8
"
>

🤍

</div>

<p>

{texts[index]}

</p>

</div>

);

}