import React from 'react'
class TaskList extends React.Component
{

     constructor()
     {
        super()
        this.state={
            tasklist:[{
                         taskName:"Create Bug Report",
                         assigned_to:"Erric Dev"
            },
            { 
                           taskName:"Create Pipeline for DevOps",
                           assigned_to:"Samuel R"
            },
            {
                           taskName:"Establish Proof of Concept",
                           assigned_to:"Jacob Malony"
            }]
        }
     }
     setStatusToCompleted(task)
     {
        this.props.sendtask(task)
        this.setState({tasklist:this.state.tasklist.filter((e)=>e!==task)})
        console.log(this.state.tasklist)
     }
    render()
    {
        return   <div style={{fontSize:"20px",
        border:"2px solid black",
        width:"900px",backgroundColor:"aquamarine"}}>
            <ul>
                  {
                
                    this.state.tasklist.map((e)=>{
                        return <li className="text">Task {e.taskName} assigned_to {e.assigned_to}
                        
                        <button onClick={()=>{
                                this.setStatusToCompleted(e)
                        }}>Completed</button>
                        </li>
                    })
                    
                  }
                  </ul>
        </div>
    }
}
export default TaskList