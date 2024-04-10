import { useEffect, useState } from 'react';
import './App.css';
import Messages from './Messages';
import {io} from 'socket.io-client';
import Input from './Input';

function App() {
  const [name,setname]=useState("");

  function addmessage(a,user){
    const messagesdiv = document.body.getElementsByClassName('messages')[0];
    const messagediv = document.createElement('div');
    messagediv.setAttribute('class','message');
    if(user!=name && user!='' && user!=undefined){
      messagediv.setAttribute('id','other');
    }
    else if(user==name){
      messagediv.setAttribute('id','you');
    }
    let text = document.createTextNode(a);
    messagediv.appendChild(text);
    messagesdiv.appendChild(messagediv);
    messagediv.scrollIntoView();
}

  // function onchange_message(event){
  //   setmessage(event.target.value);
  // }
  const socket = io("https://web-chat-backend-wb3y.onrender.com")

  useEffect(
    ()=>{
      socket.on('connect',()=>{
    addmessage('You Connected With Id : '+socket.id)
      })
    },[]
  )
  
    useEffect(
      ()=>{
        socket.on('recieve-message',(message,user)=>{
        addmessage(message,user)
  })
      },[socket]
    )
  

  // function sendmessage(){
  //   socket.emit("send-message",message)
  // }
  

  return (
    <div className="App">
      <Messages/>
      <Input socket={socket} setusername={setname} addfunc={addmessage}/>
    </div>
  );
}

export default App;
