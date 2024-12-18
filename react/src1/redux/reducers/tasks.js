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
        {
            const{taskTypeId,taskName,contactId,contactName}=action.payLoad
            state.taskList.push({taskId:initialState.taskList.length+1,taskTypeId:taskTypeId,taskName:taskName,contactId:contactId,contactName:contactName,done:false});
        }
        break;
    case 'ADD TYPE':
        {state.typeList.push(action.payLoad)}
        break;
    case 'REMOVE_TASK':
        {state.taskList.splice(action.payLoad-1,1)}
        break;
    case 'UPDATE_TASK':
        {state.taskList[action.payLoad-1].done=true}
        break;
}
},initialState)