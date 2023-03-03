import React from 'react'

function Child2(props) {

 const showPrivateData = true;

  return (
    
    <div>
        <div>
            {showPrivateData ? <p>This is private : jsgfd </p> : <></>}
            {showPrivateData && <p>This is private jsgfd</p>}
        </div>

        Count inside child-2 : {props.countFromParent}
        <button onClick={props.uploadData}>Upload Data</button>
        </div>
  )
}

export default Child2