import * as React from 'react'
import Input from '../Input'
import "../../styles/newActivity.css"
import { FC, useState } from 'react'
import axios from '../../axios'
import { stat } from 'fs'
import { isPropertySignature } from 'typescript'


interface NAProps {
    popup: () => void;
    //popup: void;
}

const NewActivity: FC<NAProps> = (prop) => {

 
    const [title, setTitle] = useState('');
    const [description, setDes] = useState('');
    const [date, setDate] = useState('');
    
    console.log(date.toString)
  
    
    const handleSubmit = () => {
        
        console.log(title)
    
        const data = {
          title: title,
          created: new Date(),
          description: description,
          date: new Date(date)
        };
        console.log(data)

        const config = {
            headers: {'Content-Type':'application/json'},
          };
    
        axios.post(`activities/`, data , config)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          //(event) => setTitle(event.target.value)
      }

    
    return (
       <div className="popUp">
           <h3 id="tittel" >Ny aktivitet</h3>
           <label>Tittel:</label>
           <input name = "title" className="input" value = {title} onChange={(event) => setTitle(event.target.value)}/>
           <br/>
           <label>Beskrivelse:</label>
           <textarea name="description" className="input" value = {description} onChange={(event) => setDes(event.target.value)}/>
           <br/>
           <label>Dato:</label>
           <input name="date" className="input" type="datetime-local" value = {date} onChange={(event) => setDate(event.target.value)}/>
           <button className = "btn" id="btnExit" onClick={prop.popup} >X</button>
           <button className = "btn" id = "btnOk" onClick={()=> {handleSubmit(); prop.popup();}} >OK</button>
       </div>
    )
}

function putData(){
  

}

export default NewActivity;