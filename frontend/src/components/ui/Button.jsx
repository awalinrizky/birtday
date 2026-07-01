export default function Button({

children,

...props

}){

return(

<button

{...props}

className="
px-8
py-4
rounded-full
bg-rose-400
text-white
duration-300
hover:scale-105
shadow-lg
"

>

{children}

</button>

)

}