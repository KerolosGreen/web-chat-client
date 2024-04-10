import { useState } from "react";
import {io} from 'socket.io-client'


function Input(props){
    const [message,setmessage]=useState("");
    const [username,setusername]=useState("");
    const [room,setroom]=useState("");
    // const socket = io("http://localhost:3002");

    function onchange_message(event){
        setmessage(event.target.value);
      }
      function onchange_username(event){
        props.setusername(event.target.value)
        setusername(event.target.value);
      }

      function onchange_room(event){
        setroom(event.target.value);
      }


    function sendmessage(){
        props.socket.emit("send-message",username,message,room,(res)=>{
            props.addfunc(res,username)
        })
      }

      function join_room(){
        props.socket.emit("join_room",username,room,(message)=>{
            props.addfunc(message,username)
        })
      }


      function addmessage(a){
        const messagesdiv = document.body.getElementsByClassName('messages')[0];
        const messagediv = document.createElement('div');
        messagediv.setAttribute('class','message');
        let text = document.createTextNode(a);
        messagediv.appendChild(text);
        messagesdiv.appendChild(messagediv);
        messagediv.scrollIntoView();
    }

    return(
        <div className="chat_input">
        <input type='text' onChange={onchange_username} placeholder="Your Name"/>
        <input type="text" placeholder="Join Room" onChange={onchange_room}/>
        <button onClick={join_room}>Join</button>
        <input type='text' onChange={onchange_message} placeholder="Message"/>
        <button onClick={sendmessage}>Send</button>
        </div>
    )
}
export default Input