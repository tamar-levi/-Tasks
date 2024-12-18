import {connect} from 'react-redux'
import React, { useEffect, useRef } from 'react'
import {addUser} from '../redux/action'
function mapStateToProps(state) {
    return {
        contactList: state.users.contactList,
    };
}
export default connect(mapStateToProps)(function LogUp(props)
{
    const{dispatch,contactList}=props;
    let name=useRef('');
    let id=useRef('');
    let email=useRef('');
    let phone=useRef('');
    function join(){
        dispatch(addUser({name:name.current.value,id:id.current.value,phone:phone.current.value,emailAdress:email.current.value}));
        alert(`שלום ל ${name.current.value}`)
        console.log(contactList)
    }
    return(<>
    <from  >
        <label>שם</label><br/>
        <input ref={name}></input><br/>
        <label>ת.ז</label><br/>
        <input ref={id}></input><br/>
        <label>מייל</label><br/>
        <input type="email" ref={email}></input><br/>
        <label>טלפון</label><br/>
        <input ref={phone}></input><br/>
        <button onClick={join}>לאישור</button>
    </from>
    </>)
})