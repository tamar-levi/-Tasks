import React ,{useEffect,useState}from 'react'
import { connect } from "react-redux";
import ShowTask from "./showTask"
function mapStateToProps(state){
    return {taskList:state.tasks.taskList}
}
export default connect(mapStateToProps) (function ShowTasks(props){
const{id,taskList}=props;
const [taskToShow,setTaskToShow]=useState('');
const [flag,setFlag]=useState(false);

console.log("id:",id);
function goToShowTask(element){
    setTaskToShow(element)
    setFlag(true);
}

return(<>
  {flag&&<ShowTask element={taskToShow}/>}
<ul>
   {
    taskList.map(element => (
    element.contactId===id&&<li >{element.taskName}<button onClick={goToShowTask(element)}>להצגת המשימה</button></li>
))}

</ul>
<button>להוספת משימה</button>



{/* לשלוח להוספת משימה */}
</>)

})