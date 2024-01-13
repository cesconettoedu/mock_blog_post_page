import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import UserComments from "./UserComments";

function UserPost({ title, body, id }) {

 

  return (
    <div >
        <Accordion>
          <Accordion.Item eventKey={id}> 
            <Accordion.Header>
              <div style={{background: 'lightgreen'}}>
                <label>TITLE: {title}</label>
                <br></br>
                <label>BODY: {body}</label>
                </div>
            </Accordion.Header>
            <Accordion.Body>
              
                <UserComments
                 key={id}
                  id={id} 
                
                />
            
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
  )
}

export default UserPost