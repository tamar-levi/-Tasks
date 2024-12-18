import React from "react";
export default function ShowTask(props){
    const{task,typeList}=props;
    return(<>
      <h1>שם המשימה:{task.taskName}</h1>
      <h2>סוג המשימה:{typeList.find(x=>x.taskTypeId==task.taskTypeId).taskTypeName}</h2>
      <h3>מבצע המשימה:{task.contactName}</h3>
      {/* שליחה לקומפוננטה של קרוסלת תמונות */}

    </>)
}