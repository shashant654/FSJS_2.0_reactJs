import React,{useState,} from 'react'

function Fruits() {
   const [fruit,setFruit] = useState('Apple')
   const [inputText ,setInputText] = useState('')

//    const updateFruit = (fruit) => {
//     setFruit(fruit)
//    }


const updateFruit = () => {
    setFruit(inputText)
   }


   function updateInputText(event) {
    const curInputValue = event.target.value;
    setInputText(curInputValue);
    
   }

  return (
    <div>
        {/* <p>The value of Fruit is : {fruit}</p> */}
        <p>The value of Fruit is : {inputText}</p>


        {/* <button onClick={() => setFruit('Papaya')}>Papaya</button> */}

        <input type="text" onChange={updateInputText} />

        {/* <button onClick={() => setFruit('Mango')}>Mango</button> */}

        {/* <button onClick={() => setFruit('Banana')}>Banana</button> */}

        <button onClick={() => updateFruit()}>Submit</button>


    </div>
  )
}

export default Fruits;