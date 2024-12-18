import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTask, updateTask } from "../redux/action";

export default connect()(function ShowTask(props){
    const{dispatch,task,typeList}=props;
    const[done,setDone]=useState(task.done);

    function remove()
    {
      dispatch(removeTask(task.taskId));
    }
    function update()
    {
      dispatch(updateTask(task.taskId))
      setDone(true);
    }
    return(<>
      <h1>שם המשימה:{task.taskName}</h1>
      <h2>סוג המשימה:{typeList.find(x=>x.taskTypeId==task.taskTypeId).taskTypeName}</h2>
      <h3>מבצע המשימה:{task.contactName}</h3>
      <h4>האם המשימה נעשתה?{String(done)}</h4>
      <button onClick={remove}>להסרת המשימה</button>
      <button onClick={update}>לעדכון המשימה</button>

      {/* שליחה לקומפוננטה של קרוסלת תמונות */}

    </>)
})