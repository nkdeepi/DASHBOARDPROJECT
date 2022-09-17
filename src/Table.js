// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import Table from 'react-bootstrap/Table';


// const TableData = () => {
//     const[details,setDetails]=useState([])
//   useEffect(()=>{
//     axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14`)
//     .then((res)=>{
//         const newdata = res.data.data.data

//         setDetails(newdata)
//         console.log(details)
//     })
//   })
  
//   return (
//     <div> <Table striped bordered hover>
//     <thead style={{backgroundColor:"black",fontSize:"15px",color:"white",textAlign:"center"}}>
//       <tr>
//         <th>Date</th>
//         <th>Day Installs</th>
//         <th>Platform</th>
//         <th>Day Uninstalls</th>
//         <th>Platform</th>
//         <th>Churn Rate</th>
//         <th>Churn Platform</th>
//       </tr>
//     </thead>
//     {/* { details && details.map((item,index)=>( */}
//          <tbody style={{backgroundColor:"black",fontSize:"15px",color:"white",textAlign:"center"}}>
//          <tr>
//            {/* <td>{item.created_At}</td> */}
//            <td>1</td>
//            <td>2</td>
//            <td>3</td>
//            <td>4</td>
//            <td>5</td>
//            <td>6</td>
//            <td>7</td>
//          </tr>
        
        
//        </tbody>

//     {/* ))} */}
   
//   </Table></div>
//   )
// }

// export default TableData


import React from 'react'
import './styles.css'

const CardComponent = () => {
  return (
    <div className='cardcontainer'>
      <div className='one'></div>
      <div className='two'></div>
      <div className='three'></div>
      <div className='four'></div>


    </div>
  )
}

export default CardComponent