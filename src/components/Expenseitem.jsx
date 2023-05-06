import styles from "./Expenseitem.module.css";
import "./Expense.css";
import { useState } from "react";
import Userinput from "./Userinput";
const Expenseitem = (props) => {
  const obj = {
    color: "white",
    fontSize: "20px",
    fontFamily: "Sans-Serif",
  };
console.log(props.data)
  const [value, setvalue] = useState(1000);
  const [Name ,setName]=useState(props.data.name);
   const [flag, setflag] = useState(true);
   const [title ,settitle]=useState("nothing")
   const [date , setdate]=useState("jyst");
   const [amount ,setanmount]=useState("100");
  const show = () => {
    setflag(!flag); // flag is for toggel key  to display conditionally
    setName("kriti");// this also invoke  on toggel key word
  };

       const date_update=(event)=>{
        setdate(event.target.value)
       }
       const amount_update=(event)=>{
        setanmount(event.target.value)
       }
       const purpose_update=(event)=>{
        settitle(event.target.value)
       }
  return (
    <div>
      <h1>{value}</h1>
      <h1 style={{ color: "red" }}>Expense Items</h1> 
      Food Rs 10 <br />
      <div style={obj}> 
        Petrol Rs 10000
      <br />
      </div>
      Movies Rs 200
<Userinput amountupdate={amount_update}  dateupdate={date_update}  purposeupdate={purpose_update} ></Userinput>
<h3> {title} {date} {amount}</h3>

  
      <button onClick={show}>toggle</button>
      {flag === true ? (
        <h1 style={obj}>
          {Name} {props.data.amount}{" "}
        </h1>
      ) : (
        ""
      )}
      {/* <h1>{state.value}</h1> */}
      {/* this was a module.css */}
      {/* <h1 className={styles.justtrying}>{props.info.name}</h1> */}
      {/* <h1>{props.name}</h1> */}
      {/* <button onClick={() => setvalue(value + 1)}>click</button>; */}
    </div>
  );
};

export default Expenseitem;
