import React from 'react'
import Accordion from "react-bootstrap/Accordion";

function UserPost() {
  return (
    <div >
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>
              <div style={{background: 'green'}}>
                <label>TITLE: POST TITLE</label>
                <br></br>
                <label>BODY: POST BODY</label>
                </div>
            </Accordion.Header>
            <Accordion.Body >
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
  )
}

export default UserPost