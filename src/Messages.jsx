import { useEffect } from "react";

function Messages(){
    function addmessage(a){
            const messagesdiv = document.body.getElementsByClassName('messages')[0];
            const messagediv = document.createElement('div');
            messagediv.setAttribute('class','message');
            let text = document.createTextNode(a);
            messagediv.appendChild(text);
            messagesdiv.appendChild(messagediv);
      }


    // addmessage("From Here")
    return(
        <div className="messages">
        </div>
    )
}
export default Messages