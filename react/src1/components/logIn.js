import React, { useRef,useState } from "react";
import { connect } from "react-redux";
import LogUp from "./logUp";
import ShowTasks from "./showTasks"
import { deleteUser } from "../redux/action";
function mapStateToProps(state){
   return {contactList:state.users.contactList}
}
export default connect(mapStateToProps)(function LogIn(props){
    const{dispatch,contactList,taskList}=props;
    let id=useRef('');
    let name=useRef('');
    let[flagLogUp,setFlagLogUp]=useState(true);
    let[flagShowTasks,setFlagShowTasks]=useState(true);
    function enter(){
    const tempUser=contactList.find(x=>x.id===id.current.value);
    if(tempUser!==null)
    {
        alert(`שלום ${name.current.value}`)
       setFlagShowTasks(false)

    }
    else{
       alert("אינך רשום במערכת");
       setFlagLogUp(false)
    }
}
    function remove(){
        const tempUser=contactList.find(x=>x.id===id.current.value);
        if(tempUser!==null)
        {
            alert('שמך הוסר מהרשימה בהצלחה!')
            dispatch(deleteUser(id.current.value));
    
        }
        else{
           alert("אינך רשום במערכת");
        }
    }

    return(
        <>
       { !flagLogUp&&<LogUp/>}
       {!flagShowTasks&&<ShowTasks id={id.current.value} />}
       { flagLogUp&&flagShowTasks&&<>
        <label>שם</label><br/>
        <input ref={name}></input><br/>
        <label>ת.ז</label><br/>
        <input ref={id}></input>
        <button onClick={remove}>להסרה</button>
        <button onClick={enter}>כניסה</button>
        </>}
        </>
    )
})
