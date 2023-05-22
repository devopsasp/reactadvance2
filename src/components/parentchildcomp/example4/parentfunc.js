import ChildFunction from "./childfunc"

function ParentFunc()
{
    return <div>
        Parent Function
         <ChildFunction data={<div>Welcome to programming</div>}/>
        </div>
}

export default ParentFunc