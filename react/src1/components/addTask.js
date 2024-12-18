import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";
import LogUp from "./logUp";

function mapStateToProps(state){
    return {contactList:state.users.contactList,
        typeList:state.tasks.typeList
    }
}
export default connect(mapStateToProps)(function AddTask(props)
{
    const{dispatch,contactList,typeList}=props
    let nameTask=useRef('');
    let typeOfTask=useRef('');
    let id=useRef('');
    let userName=useRef('');
    function add()
    {
        let temp=contactList.find(x=>x.id===id.current.value)
        if(temp==null)
        {
            alert("שמך לא נמצא במאגר!")
        }
        else
        {
            dispatch(addTask({taskTypeId:typeOfTask,taskName:nameTask,contactId:id,contactName:userName}))
        }
    }
    // function temp()
    // {
    //     <LogUp></LogUp>
    // }
    return(<>
    <label for="name">שם המשימה:</label>
    <br></br>
    <input name="name" ref={nameTask} type="text"></input>
    <br></br>
    <label for="type">סוג המשימה:</label>
    <br></br>
    {typeList.map(e=>(<label>{e.taskTypeName}<input type="radio" name="type" value={e.taskTypeName}></input></label>))}
    <br></br>
    <label for="id">ת.ז</label>
    <br></br>
    <input name="id"ref={id}></input>
    <br></br>
    <label for="nameUser">שם המבצע:</label>
    <br></br>
    <input name="nameUser" ref={userName} type="text"></input>
    <br></br>
    <button onClick={add}>להוספת המשימה</button>
    {/* <button onClick={temp}>להרשמה</button> */}
    
    </>)
})