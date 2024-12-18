import { Provider } from 'react-redux';
import './App.css';
import LogUp from './components/logUp';
import store from './redux/store'
import LogIn from './components/logIn';
import ShowTask from './components/showTask';
import ShowTasks from './components/showTasks';
import AddTask from './components/addTask';

function App() {
  const taskList=[{taskId:1,taskTypeId:1,taskName:"דוח תלמידים",contactId:"1234",contactName:"moshe choen",done:false},
  {taskId:2,taskTypeId:2,taskName:"לא עודכן מלאי ",contactId:"2345",contactName:"chaim chen",done:false},]
  const typeList=[{taskTypeId:1,taskTypeName:"משימה"}
  ,{taskTypeId:2,taskTypeName:"dibag"}]
  const id="1234";
  return (
    <Provider store={store}>
      {/* <LogUp></LogUp> */}
      {/* <LogIn></LogIn> */}
      {/* <ShowTasks  id={id} taskList={taskList}></ShowTasks> */}
      {/* <AddTask></AddTask> */}
      <ShowTask task={taskList[0]} typeList={typeList} ></ShowTask>
      </Provider>
 
  );
}

export default App;
