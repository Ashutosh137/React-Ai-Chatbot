import { useState } from "react";
import React from 'react';
import { Teachers } from "../api/fetchdata";
import { Chat } from "../assist/chat";

export const Teacher = () => {
    const [usermessage, setusermessage] = useState("");
    const [conversation, setConversation] = useState([{ role: "system", content: "You are not a assistent ,you are a teacher of a 12 year old sensitive student " }]);
    const [load, setload] = useState(false);
    const handel = async () => {
        setload(true);
        const data1 = { role: "user", content: usermessage };
        const chat = [...conversation, data1];
        console.log(chat);
        const data2 = await Teachers(chat).catch((err) => {console.log(err);setload(false);});
        setConversation([...conversation, data1, data2]);
        console.log(conversation);
        setusermessage("");
        setload(false);

    }

    return (
        <>
        <div className="main container">
            <h1 className="text-danger h4 text-center m-5 text-capitalize">this is a teacher ai </h1>
        </div>
            <div className="ai mb-5 container ">
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
                {!load ? <button className="btn rounded-pill border border-2 border-dark" onClick={handel}>
                    <i class="bi bi-send"></i>
                </button> : <button class="btn btn-primary">
                    <span class="spinner-border spinner-border-sm"></span>
                </button>
                }

            </div></>
    )
}
