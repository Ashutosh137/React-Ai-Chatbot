import "./App.css";
import { Friendzone } from "./component/friend";
import { useState } from "react";
import { Friend, Teacher, edit } from "./api/fetchdata";
function App() {
  const [usermessage, setusermessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [load, setload] = useState(false);
  const handel = async () => {
    setload(true);

    // const edited = await edit(usermessage).catch((err) => {
    //   console.log(err);
    //   setload(false)
    // });
    // console.log(edited)
    const data1 = { role: "user", content: usermessage };
    const chat = [...conversation, data1];
    const data2 = await Friend(chat).catch((err) => {
      console.log(err);
      setload(false);
    });
    setConversation([...conversation, data1, data2]);
    console.log(conversation)
    setusermessage("");
    setload(false);

  }

  return (
    <><nav class="navbar text-capitalize  navbar-expand-lg bg-body-tertiary navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">focus realm</a>
        <button class="navbar-toggler m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item m-auto mx-5">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item m-auto mx-5">
              <a class="nav-link active" href="#">chatgpt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      <div className="my-5 card main pb-5 px-5 rounded w-75 py-5 container ">
        {conversation.map((item) => {
          return (
            <>
              <Friendzone role={item.role} message={item.content} />
            </>
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

      </div>

    </>
  );
}

export default App;
