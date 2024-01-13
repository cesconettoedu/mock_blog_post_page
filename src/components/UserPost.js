import { useState  } from "react";
import Accordion from "react-bootstrap/Accordion";
import UserComments from "./UserComments";

function UserPost({ title, body, id }) {

  const [userShow, setUserShow] = useState(false)

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
            <Accordion.Body
              onEnter={() => setUserShow(true)}      // use to only fetch the data when click to dropdown the comments
            >
              
                <UserComments
                 key={id}
                  id={id} 
                 get={userShow}

                />
            
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
  )
}

export default UserPost