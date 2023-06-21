import React from "react";

export const Chat = (props) => {
    const role= props.role;
    return (
        <div className="py-1 row container m-auto text-capitalize ">
            {role === "user" ? 
            <div className="d-flex border-1 p-3 border bg-light w-75 justify-content-end rounded border-dark my-3">
                <pre className="h6 col text-end w-75 mx-3">{props.message}</pre>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" alt="user" />
            </div> :<>
            {role === "system" ?
                <></>:<div className="d-flex my-3 w-75 border-1 p-3 border bg-light  rounded border-dark">
                <img src="https://cdn.pixabay.com/photo/2013/07/12/17/48/girl-152497_640.png" alt="user" />
                <pre className="h6 col mx-3 text-wrap w-75 ">{props.message}</pre>
            </div>}</>
            }
            </div>
            


    );
};
