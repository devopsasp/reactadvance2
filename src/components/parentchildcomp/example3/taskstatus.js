import React from 'react'
import TaskList from './tasklist'
class TaskStatus extends React.Component
{
    constructor()
    {
        super()
        this.state={
            completed_task:[]
        }
        this.getCompletedTask=this.getCompletedTask.bind(this)
    }
    getCompletedTask(task)
    {
        this.setState({completed_task:[...this.state.completed_task,task]})
    }
    render()
    {
       return   <div >
           <h1>Task Status</h1>
           <h3>Completed Tasks</h3>
           <div style={{fontSize:"20px",
        border:"2px solid black",
        width:"900px",backgroundColor:"beige"}}>
           <ul>
              {
                this.state.completed_task.map((e)=>{
                    return <li className="text">Task Name {e.taskName} Assigned To {e.assigned_to}</li>
                })
              }
              </ul>
              </div>
            <h3>Pending Tasks</h3>
           <TaskList  sendtask={this.getCompletedTask}/>
       </div>
    }
}

export default TaskStatus