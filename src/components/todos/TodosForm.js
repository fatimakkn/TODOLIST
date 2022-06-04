import React , {useState} from 'react';
import FeatherIcon from "feather-icons-react";
const TodosForm = (props) => {

    const [newTittle,setNewTittle] = useState ("  ");
     const [editRender,setEditRender] = useState (false);
      
     if (props.mode === "edit" && !editRender){
         setNewTittle(props.todos[0].tittle);
         setEditRender(true);
     }




     const newTittleHandler =(event) => {
    setNewTittle (event.target.value);

     };
     const addNewTodoHandler = () => {
         let nTittle = newTittle;
         setNewTittle ("");
         setEditRender(false);
         return props.addTodoHandler(nTittle);
     };
     let btnString = "إضافة";
     if (props.mode === "edit") {
         btnString = "تعديل ...."
     };

   

    return ( 
        <div className  = "todos-form">
        <div   className="todos-form_icon" onClick = {props.showUncompleteHandle}>
        < FeatherIcon icon="circle" />
        </div>
        <div className="todos-form_form">
        <input type="text"  placeholder="اضف مهمة جديدة ....." onChange= {newTittleHandler} value={newTittle}/>

        </div>
        <div className="todos-form_submit"> <button className="btn" onClick={addNewTodoHandler} disabled={newTittle.trim()?false:true} > {btnString}</button></div>

        </div>
    )
};
export default TodosForm