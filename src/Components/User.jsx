import React, { useEffect, useState } from 'react'
import axios from 'axios';

const User = () => {
    const [state,setState]=useState([]);
    const [updateState,setUpdateState]=useState([]);
useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=20")
    .then((res)=>{
        console.log(res.data.results)
        setState(res.data.results)
        setUpdateState(res.data.results)
    })
},[])
  return (
    <div className='mainUser'>
        <div className='subMainUser'><h3>User Details</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas voluptate dolor modi quibusdam ut quae, consectetur blanditiis ipsam cumque voluptas architecto tenetur quidem eos nihil accusantium nobis omnis ad incidunt amet veniam ullam? Ab expedita fugiat accusamus magnam ullam numquam incidunt! Harum adipisci illo ea blanditiis sunt, commodi iure distinctio aspernatur eos? Quae architecto perferendis, repellat quisquam esse quam non enim cumque dolorum at. Vitae, quisquam maiores quam quis maxime, labore in nemo quibusdam, laborum eum reiciendis perferendis iusto ut obcaecati soluta beatae est corrupti. Itaque dolorum ratione ipsum eius, molestiae in sunt hic delectus facilis enim, nostrum voluptatum distinctio.</p>
        </div>
      <div className='userRadio'>
        <div><input type="radio" name="gender" value="all" defaultChecked onChange={()=>setState(updateState)}/>&nbsp;&nbsp;&nbsp;All</div>
        <div><input type="radio" name="gender" value="male" onChange={()=>setState(updateState.filter((data)=>data.gender==="male"))}/>&nbsp;&nbsp;&nbsp;Male</div>
        <div><input type="radio" name="gender" value="female" onChange={()=>setState(updateState.filter((data)=>data.gender==="female"))}/>&nbsp;&nbsp;&nbsp;Female</div>
      </div>
      <div className='userTable'>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">IMAGE</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">GENDER</th>
    </tr>
  </thead>
  <tbody>
    {state.map((value,idx)=>(
        <tr key={idx}>
            <td>
                <img src={value.picture.medium}/>
            </td>
            <td>{value.name.first}&nbsp;{value.name.last}</td>
            <td>{value.email}</td>
            <td>{value.gender}</td>
        </tr>
    ))}
    </tbody>
</table>


      </div>
    </div>
  )
}

export default User;
