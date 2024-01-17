import { useState, useEffect } from "react";
import "./UserComments.css";

function UserComments({ id, fetchComments }) {
  const [userCommAll, setUserCommAll] = useState([]);

  // function to fetch the user Comments data
  async function getComm() {
    let commentId = id;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dataComm = await response.json();
    setUserCommAll(dataComm);
  }

  useEffect(() => {
    if (fetchComments === true) {
      getComm();
    }
  }, [fetchComments]);

  return (
    <div>
      {userCommAll.map((comment) => {
        return (
          <div className="container " key={comment.id}>
            <div className="col-8 badge text-wrap commName text-start">
              <label className="pt-1">Name:</label>
              <p className="fw-light pt-1">{comment.name}</p>

              <label className="">Email:</label>
              <p className="fw-light pt-1">{comment.email}</p>

              <label className="">Comment:</label>
              <p className="fw-light pt-1">{comment.body}</p>
            </div>
            <p>-----------------------------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserComments;
