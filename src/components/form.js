import React, { useState } from "react";

const membersList = [
    {firstName: 'Rodger', lastName: 'Stevens', title: 'Fireman'},
    {firstName: 'Aminah', lastName: 'Patel', title: 'Data Scientist'},
    {firstName: 'Edward', lastName: 'Elrich', title: 'Alchemist'},
]

export default function Form(props){
    const [members,setMembers] = useState(membersList);
    const [formValues, setFormValues] = useState({firstName: '', lastName: '', title: ''});

    const onChange = (evt) => {
        const {name, value} = evt.target;

        setFormValues({...formValues, [name]: value})
    }

    const submit = (evt) =>{
        evt.preventDefault();
        setMembers(members.concat({firstName: formValues.firstName, lastName: formValues.lastName, title: formValues.title}))
        setFormValues({firstName: '', lastName: '', title: ''})
    }
    return (
        <div className="form--container">
            {members.map((member, idx) =>{
                return (
                    <div key={idx}>
                        {`${member.firstName} ${member.lastName} | Title: ${member.title}`}
                    </div>
                )
            })}
            <form onSubmit={submit}>
                <input 
                name='firstName'
                type='text'
                value={formValues.firstName}
                onChange={onChange}
                />

                <input 
                name='lastName'
                type='text'
                value={formValues.lastName}
                onChange={onChange}
                />


                <input 
                name='title'
                type='text'
                value={formValues.title}
                onChange={onChange}
                />
                <input type='submit' value='Add a Team Member!'/>
            </form>
        </div>
    )
}