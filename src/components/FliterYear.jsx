const FilterYear=(props)=>{
//    const yearchangeHandle=(event)=>{
//    props.onchangehandle(event.target.value);
//    }
return (
    <>
    <select  value={props.selected}  onChange={props.onchangehandle}>
        <option value="2001">2001</option>
         <option  value="2002">2002</option>
          <option value="2003">2003</option>
           <option value="2004">2004</option>
    </select>
    </>
);
}
export default FilterYear;