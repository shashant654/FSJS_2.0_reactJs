
import Child1 from "./componentss/Child1";
import Child2 from "./componentss/Child2";
import React,{useState} from 'react'
import UserForm from "./forms_and_hooks/UseForm";
import UseEffectHook from "./forms_and_hooks/UseEffectHook";
import Hooks from "./forms_and_hooks/Hooks";


import Counter from "./componentss/Counter";
import Fruits from "./componentss/Fruits";
import Notes from "./componentss/Notes";
// import Hooks from "./forms_and_hooks/Hooks";


// elated Website for event handlers 

function App() {

  const [countInParent, setCountInParent] = useState(0)

 function updateCountInParent(count) {
  setCountInParent(count)
 }

function uploadData() {
  console.log('I will start uploading the data now');
}

  return (
   <div>
    {/* <Counter /> */}
    {/* <Fruits /> */}
    {/* <Notes /> */}
{/* 
<p>Inside the parent: {countInParent}</p>
    <Child1 onCountUpdate = {updateCountInParent} />  */}

    {/* <Child1 /> */}
{/* 
    <Child2 countFromParent = {countInParent} uploadData={uploadData} /> */}


        {/* <UserForm /> */}
        {/* <UseEffectHook /> */}
                <Hooks />




   </div>
  );
}

export default App;

// first of all we get data of child1 and get data in parent from child1 then get data of child2 from parent
