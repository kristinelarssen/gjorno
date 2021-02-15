import * as React from 'react'
import Input from '../Input'
import "../../styles/newActivity.css"
import { FC, useState } from 'react'


interface NAProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isVisible: boolean;
}

const NewActivity: FC<NAProps> = ({isVisible}) => {
    const visible = useState({isVisible})

    return (
       <div className="popUp">
           <Input name = "title" label = "Tittel:"></Input>
           <Input name="description" label="Beskrivelse:"></Input>
       </div>
    )
}

export default NewActivity;