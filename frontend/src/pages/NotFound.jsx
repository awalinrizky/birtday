import { Link } from "react-router-dom";

export default function NotFound(){

return(

<div className="min-h-screen flex flex-col items-center justify-center">

<h1 className="text-8xl">

404

</h1>

<p className="mt-5">

Page Not Found

</p>

<Link

to="/"

className="mt-8 text-rose-400"

>

Back Home

</Link>

</div>

)

}