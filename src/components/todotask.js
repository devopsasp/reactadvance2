const tasklist=[{
    taskid:1,
    taskName:"Identifying and preparing bug report",
    reporting_person:"Peter Joes"
},

{
    taskid:2,
    taskName:"Creating requirement document",
    reporting_person:"Erric Bana"
},
{
    taskid:3,
    taskName:"Creating DevOps Pipeline",
    reporting_person:"Meril Jack"
}

]

const ToDoTask=()=>{
    return <div>
             <h1>Task List</h1><hr/>
          {
            tasklist.map((e)=><div className="tasklist">
                 
                
                  <div>   
                 <h3>{e.taskName}</h3> 
                 </div>
                 <div>
                 {e.reporting_person}
                 </div>
            
            </div>)
          }

    </div>
}

export default ToDoTask