import * as React from 'react'
import Input from '../Input'
import "../../styles/newActivity.css"
import { FC, useState } from 'react'


interface NAProps {
    popup: () => void;
    //popup: void;
}

const NewActivity: FC<NAProps> = (prop) => {
    return (
       <div className="popUp">
           <h3>Ny aktivitet</h3>
           <Input name = "title" label = "Tittel: "></Input>
           <Input name="description" label="Beskrivelse: "></Input>
           <Input name="date" type="date" label="Dato: "></Input>
           <button className = "btn" id="btnExit" onClick={prop.popup} >X</button>
           <button className = "btn" id = "btnOk" onClick={putData}>OK</button>
       </div>
    )
}

function putData(){

}
export default NewActivity;