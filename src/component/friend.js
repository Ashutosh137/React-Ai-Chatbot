import React from "react";

export const Friendzone = (props) => {
    return (
        <div className=" py-1 row text-dark container text-capitalize ">
            <div className="">
            {props.role === "user" ? 
            <div className="d-flex my-3">
                <pre className="h6 col text-end w-50 mx-3">{props.message}</pre>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" alt="user" />
            </div> : 
                <div className="d-flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" alt="user" />
                <pre className="h6 col mx-3  w-50 ">{props.message}</pre>
            </div>}
            </div>
            


        </div>
    );
};
