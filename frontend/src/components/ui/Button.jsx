export default function Button({

children,

...props

}){

return(

<button

{...props}

className="
group
inline-flex
items-center
gap-3
mt-12
rounded-full
border
border-[#d5b98f]
px-9
py-4
uppercase
tracking-[3px]
transition-all
duration-500
hover:bg-[#d5b98f]
hover:text-[#2b1e1e]
hover:scale-105
"

>

{children}

</button>

)

}