import React from "react"
 class ChildComp extends React.Component{

  constructor()
  {
    super()
   
  }

 

    render()
    {
        return <div>
            <h1>Child Component</h1>
               
        <div className="text">{this.props.message}</div>
            </div>
    }
}
export default ChildComp