import React from 'react'

function Card(props){
    console.log(props)
return(
<div className='whatty'>
{props.state.map(p =>
<div className='cardStuff' key={p.id}>
<h2>{p.name}</h2>
<p>{p.email}</p>
<p>{p.role}</p>
</div>
)}




</div>
)
}

export default Card