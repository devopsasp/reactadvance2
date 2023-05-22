import React from 'react'
import MessageSender from './child1'
class MessageReceiver extends React.Component{
    constructor()
    {
        super()
         this.state={
            message:""
         }
  this.getMessage=this.getMessage.bind(this)
        }

      getMessage(msg)
      {
       this.setState({message:msg})
       console.log("get message")
      }  


      render()
      {
        return <div>

               <h2>Parent Component</h2>
               <h3>{this.state.message}</h3>
                 <MessageSender  messagefunc={this.getMessage}/>
        </div>
      }





}

export default MessageReceiver