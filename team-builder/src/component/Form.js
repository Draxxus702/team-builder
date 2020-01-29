import React, {useState} from 'react'

function Form(props){
const[state, setState]= useState([{
    id: Date.now(),
    name: '',
    email: '',
    role: ''
}])

const handleChanges = event =>{
    setState({
        ...state,[event.target.name]:
        event.target.value
    })
}

const handleSubmit = event =>{
    event.preventDefault()
    props.addNewMember(state)
    setState({name: '', email:'', role:''})
}

return(
<div className='formBackground'>
<form onSubmit={handleSubmit}>
<label htmlFor='name'>Member's Name</label>
<br/>
<input type='text' id='name' placeholder='FullName' name='name'
value={state.name} onChange={handleChanges}required/>
<br/>
<br/>
<label htmlFor='email'>Member's Email</label>
<br/>
<input type='email' name='email' placeholder='Email' value={state.email}
onChange={handleChanges}required/>
<br/>
<br/>

<label htmlFor='role'>Member's Role</label>
<br/>

<select name='role' id='role' value={state.role} onChange={handleChanges}>
    <option value='select a role'>Select A Role</option>
    <option value='BackEnd Engineer'>BackEnd Engineer</option>
    <option value='FrontEnd Engineer'>FrontEnd Engineer</option>
    <option value='Fullstack Developer'>FullStack Developer</option>
</select>
<br/>
<br/>

<label htmlFor='addMember'>Add Member</label>
<br/>
<button type='submit' id='addMember'>Submit</button>
</form>
</div>
)
}

export default Form