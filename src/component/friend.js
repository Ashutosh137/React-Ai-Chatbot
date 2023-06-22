import React, { useState } from 'react'
import { Friends } from '../api/fetchdata';
import { Chat } from '../assist/chat';
export const Friend = () => {
  const [usermessage, setusermessage] = useState("");
  const [conversation, setConversation] = useState([{ role: "system", content: "You are a extrovert friend of 12 year old introvert student " }]);
  const [load, setload] = useState(false);
  const handel = async () => {
    setload(true);
    const data1 = { role: "user", content: usermessage };
    const chat = [...conversation, data1];
    const data2 = await Friends(chat).catch((err) => { console.log(err); setload(false); });
    if (data2) {
      setConversation([...conversation, data1, data2]);
    }
    else {
      setConversation([...conversation, data1, { role: "assistent", content: "there has certain problem ,please try again later" }])
    }
    setusermessage("");
    setload(false);

  }

  return (
    <>
      <div className="container m-auto my-4 ">
        <h1 className="text-danger h4 fw-bolder text-capitalize text-center bg-light rounded p-2">lets interact with a friend</h1>
      </div>
      <div className="ai mb-5 text-dark container bg-light rounded">
        {conversation.map((item) => {
          return (
            <Chat role={item.role} message={item.content} />
          );
        })}
      </div>

      <div className="fixed-bottom text-capitalize  bg-light d-flex px-5 rounded p-2">
        <input className="p-2 m-1 h6 w-100 rounded"
          type="text"
          placeholder="Ask Me Something"
          value={usermessage}
          onChange={(e) => {
            setusermessage(e.target.value);
          }}
        />
        {load ? <button class="btn btn-primary">
                    <span class="spinner-border spinner-border-sm"></span>
                </button> : <>{usermessage === "" ? <button className="btn rounded-pill disabled border border-2 border-dark" onClick={handel}>
                    <i class="bi bi-send"></i>
                </button> : <button className="btn rounded-pill border border-2 border-dark" onClick={handel}>
                    <i class="bi bi-send"></i>
                </button>}</>
                }

      </div></>)
}
