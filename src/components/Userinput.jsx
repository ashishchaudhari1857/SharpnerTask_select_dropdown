const Userinput = (props) => {
  return (
    <>
      <label htmlFor="money">AMOUNT </label>
      <input type="number" name="money" onChange={props.amountupdate}></input>
      <label htmlFor="title">date</label>
      <input type="date" name="number" onChange={props.dateupdate}></input>
      <label htmlFor="money">purpose</label>
      <input type="text" id="money" onChange={props.purposeupdate}></input>
      
    </>
  );
};
export default Userinput;
