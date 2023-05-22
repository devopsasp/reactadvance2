import React from 'react'
class MessageSender extends React.Component{
    constructor()
    {
        super()
        this.sendMessage=this.sendMessage.bind(this)
    }

    sendMessage(str)
    {
 this.props.messagefunc(str)
    }

       
    render()
    {
        return <div>
              <h3>Child Component</h3>
                                
                 <button onClick={()=>{
                    this.sendMessage("Hello from child")
                 }}>Send Message to parent </button>
        </div>
    }
}

export default MessageSender