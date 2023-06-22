import React from "react";

export const Chat = (props) => {
    const role = props.role;
    return (
        <div className="py-2 container text-capitalize ">
            <div className="justify-content-center m-auto">

                {role === "user" ?
                    <div className="d-flex w-75 user border-1  p-2  border rounded border-dark my-1 ">
                        <pre className="h6 col text-end m-auto mx-3 text-white">{props.message}</pre>
                        <img className="rounded-pill m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" alt="user" />
                    </div> : <>
                        {role === "system" ?
                            <></> : <div className="d-flex my-1 w-75 border-1 p-2 border bg-light  rounded border-dark ">
                                <img className="rounded-pill m-auto" src="https://cdn.pixabay.com/photo/2013/07/12/17/48/girl-152497_640.png" alt="user" />
                                <pre className="h6 col mx-3 text-wrap m-auto w-75 ">{props.message}</pre>
                            </div>}</>
                }
            </div>
        </div>



    );
};
