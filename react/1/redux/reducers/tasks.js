import {produce} from 'immer';

const initialState={
typeList:[{taskTypeId:1,taskTypeName:"משימה"}
           ,{taskTypeId:2,taskTypeName:"dibag"}],
taskList:[{taskId:1,taskTypeId:1,taskName:"דוח תלמידים",contactId:"1234",contactName:"moshe choen",done:false},
          {taskId:2,taskTypeId:2,taskName:"לא עודכן מלאי ",contactId:"2345",contactName:"chaim chen",done:false},]
}

export default produce((state,action)=>{
switch(action.type){
    case 'ADD TASK':
        {state.typeList.push(action.payLoad)}
        break;
    case 'ADD TYPE':
        {state.typeList.push(action.payLoad)}
}
},initialState)