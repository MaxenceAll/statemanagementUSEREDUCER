import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  function clickSendHandler() {
        // alert(`Sending "${message}" to ${contact.email}`);
        dispatch({
            type: "edited_message",
            message:"",
            email:contact.email
        })
  }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={clickSendHandler}>
        Send to {contact.email}</button>
    </section>
  );
}
