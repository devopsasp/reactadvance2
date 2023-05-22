import ChildComp from "./child"
import React from "react"

class ParentComp extends React.Component{
  constructor(){
    super()
    this.state={
        message:""
    }
  
  }
  

    render()
    {
        return <div>
        <h1>Parent Component</h1>
           <input type='text' onChange={(e)=>{this.setState({message:e.target.value})}}/>
           <ChildComp message={this.state.message}/>
           
        </div>
    }
}
export default ParentComp