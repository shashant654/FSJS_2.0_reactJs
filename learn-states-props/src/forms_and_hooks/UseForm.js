import React,{useRef, useState} from 'react'

function UserForm(){

     const [name,setName] = useState('')
     const [fruit,setFruit] = useState('')

    //  const nameInput = document.getElementById('')
    // plzz use hooks instead of this 

    const nameInputRef = useRef(null);
    const fruitSelectRef = useRef(null);


    function handleSubmit(event) {
        event.preventDefault();
        // console.log('submit clicked');
        const nameInputValue = nameInputRef.current.value;
        const fruitValue = fruitSelectRef.current.value;

        alert(nameInputValue + fruitValue)
    }

    function handleChange(e) {
        console.log(e.target.value);
        setFruit(e.target.value)
        
    }
    

    return (
        // here we use of **ONSUBMIT** in form so that whenever we filled all data then form is automatic submitted through enter button only ,, don't need  of  submit btn we 
        <form onSubmit={handleSubmit} style={{padding:'20px',margin:'20px'}}>
           <label htmlFor="name">Name</label>
           
           {/* <input type="text" onChange={(event) => setName(event.target.value)}/> */}
           <input type="text" id="nameInput" ref={nameInputRef} />
           
          
           <br />
           <select ref={fruitSelectRef} onChange={handleChange}>
            <option value="grateful">GRATEFUL</option>
            <option value="lime">LIME</option>
            <option value="colonut">COCONUT</option>
            <option value="mango">MANGO</option>
             </select>
             <br />
             <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default UserForm