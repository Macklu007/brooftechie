export function Profiledata({title, value}){


    return (<div className="flex flex-col gap-1">
        <p className="text-richblack-400 ">{title}</p>
        <p className="text-white font-semibold">
           {value}
        </p>

    </div>)

}