import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import UserComments from "./UserComments";

function UserPost({ title, body, id, postnumber }) {

  const [userShow, setUserShow] = useState(false);

  return (
    <>
      <Accordion >
        
        <Accordion.Item eventKey={id} className="border-0">
          <Accordion.Header>
            {/* <div style={{ background: "lightgreen" }}>
              <label>TITLE: {title}</label>
              <br></br>
              <label>BODY: {body}</label>
            </div> */}


            <div className="container ">
              <h4>Post {postnumber}</h4>
              <div className="row justify-content-center">
                  <div className="col-md-12">
                      <div className="card">
                          <div className="card-header">
                              <label>Title: </label>
                              <h5 className="card-title">{title}</h5>
                          </div>
                          <div className="card-body">
                              <label>Post: </label>
                              <p className="card-text">{body}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </Accordion.Header>
          <Accordion.Body
            onEnter={() => setUserShow(true)} // use to fetch the data when click to dropdown the comments
          >
            <UserComments 
              key={id} 
              id={id} 
              fetchComments={userShow} 
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default UserPost;
