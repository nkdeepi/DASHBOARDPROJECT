import React, { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineDownload,AiTwotoneThunderbolt } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoLogoCodepen } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdContentPasteOff } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { BiUserPlus } from "react-icons/bi";
import { RiUninstallLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import moment  from 'moment'

import "../styles.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const SideBar = ({ children }) => {
  // const [open, setOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(1);
  const [selecteddate, setSelecteddate] = useState(null);
  const [search, setSearch] = useState("");
  const [stat,setStat] =useState([])
  const [dropvalue,setdropvalue]= useState('')

  useEffect(()=>{

    const fetchStat = async ()=>{
      await axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14`).then((res)=>{
        setStat(res.data.data)
        // console.log(stat)
      })
    }
    const fetchTable = async ()=>{
       await axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01`).then((res)=>{
      //  await axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        // console.log(res.data.data.data.totalchurn)
          
          
        setDetails(res.data.data.data)
        // console.log(res.data.data.data)
        
        // console.log(details)
        // const d= new Date('2022-06-02T00:00:00.000Z')
//      const d =   moment('2022-06-02T00:00:00.000Z').utc().format('MM/DD/YYYY')
        
//         console.log(d)
//         let isoDate = "2022-06-02T00:00:00.000Z";

// let newDate =  moment.utc(isoDate).format('MM/DD/YY');
// console.log('converted date', newDate); 
 
       
        
      })

    }

    fetchTable();
    fetchStat();
   

  },[])

  // useEffect(() => {
  //   // axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14`).then((res) => {
  //     // setDetails(res.data);
  //     // console.log(res.data.data);
  //     // const newdata = res.data.data.data

  //     // setDetails(newdata)
  //     // console.log(details)
  //   });
  // });
  // const toggle = () => {
  //   setOpen(!open);
  // };
  const handleChange = (e)=>{
    const selectedvalue=e.target.value;
    setPostperpage(selectedvalue)
    // console.log(postperpage)

  }
  const handleTabledata = (e)=>{
     const data = e.target.value;
    console.log(data)

  }
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/wowuser",
      name: "Wow User",
      icon: <AiOutlineUser />,
    },
    {
      path: "/videoclips",
      name: "Video Clips",
      icon: <BsFillCameraVideoFill />,
    },
    {
      path: "/reportedcontent",
      name: "Reported Content",
      icon: <MdContentPasteOff />,
    },
    {
      path: "/category",
      name: "Category",
      icon: <BiCategoryAlt />,
    },
    {
      path: "/infopage",
      name: "Info Page",
      icon: <HiInformationCircle />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <FaQuestionCircle />,
    },
    {
      path: "/pushnotification",
      name: "Push Notifiaction",
      icon: <GrNotification />,
    },
    {
      path: "/internaluser",
      name: "Internal User",
      icon: <BiUserPlus />,
    },
  ];
  //get current post
  const indexOfLastPost = currentPage * postperpage;
  const indexOfFirstPost = indexOfLastPost - postperpage;
  const currentpost = details.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(details.length / postperpage); i++) {
    pageNumbers.push(i);
  }
  //setting pagination
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };
  return (
    
    <div className="container">
     {/* <h1 style={{color:"white"}}>{stat.churn}</h1> */}
      <div className="sidebarcontainer">
        <div className="sidebar">
          <div className="topsection">
            <div className="bars">
              <IoLogoCodepen />
            </div>
            <h1 className="logo">
              WOW
            </h1>
            <div className="settings">
              <FiSettings style={{cursor:"pointer"}} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                
                className="linktext"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
      <div className="toptablecontainer">
        <div className="topcontainer">
          
            <div class="grid-container">
            <div class="grid-item">
              <div className="iconcontainer">
                <AiOutlineDownload />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.totalInstall}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                  App Installed
                </span>
              </div>
            </div>
            <div class="grid-item">
              <div className="iconcontainer">
              <AiTwotoneThunderbolt />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.activeinstall}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                  Active Installs
                </span>
              </div>
            </div>

            <div class="grid-item">
              <div className="iconcontainer">
              <GoGraph  />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.churn}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                  Churn Rate
                </span>
              </div>
            </div>
            <div class="grid-item">
              <div className="iconcontainer">
              <RiUninstallLine />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.totaluninstall}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                  App Un-Installed
                </span>
              </div>
            </div>
            <div class="grid-item">
              <div className="iconcontainer">
              <BiUserPlus />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.aliveappusers}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                  Alive App Users
                </span>
              </div>
            </div>

            <div class="grid-item">
            <div className="iconcontainer">
                <BsGraphUp className="staticon" />
              </div>
              <div className="textoutputcontainer">
                <span style={{ fontSize: "16px", color: "white" }}>{stat.alivechurn}</span>
                <span style={{ fontSize: "13px", color: "white" }}>
                Alive Churn Rate
                </span>
              </div>
              
             
            </div>
          </div>

       
          
       
        </div>

        <div className="tablecontainer">
          <div className="dropdowncontainer">
            <span style={{color:"white"}}>Show</span>
            <select className="dropdownbutton" onChange={(e) => handleChange(e)}>
    		<option value="1">1</option>
    		<option value="4">4</option>
    		<option value="8">8</option>
    		<option value="10">10</option>
   		</select>
            {/* <Dropdown className="dropdownbutton">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        10
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onChange={(e) => handleChange(e)} >1</Dropdown.Item>
        <Dropdown.Item onChange={(e) => handleChange(e)}>4</Dropdown.Item>
        <Dropdown.Item  onChange={(e) => handleChange(e)} >8</Dropdown.Item>
        <Dropdown.Item onChange={(e) => handleChange(e)} >10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
           
            <span style={{color:"white"}}>Entries</span>
            <div className="datecontainer">
              <div>
              <DatePicker
                selected={selecteddate}
                onChange={(date) => {
                  setSelecteddate(date)
                  handleTabledata()

                }
                }
                dateFormat="dd/MM/yyyy"
                isClearable
              />

              </div>
            {/* <div>
              <DatePicker
                selected={selecteddate}
                onChange={(date) => setSelecteddate(date)}
                dateFormat="dd/MM/yyyy"
                isClearable
              />
            </div> */}

            <div className="searchbutton"> <Button variant="secondary" style={{backgroundColor:"skyblue"}}>SEARCH</Button></div>
            <div className="searchbutton"> <Button variant="secondary">RESET</Button></div>
            </div>
            
          </div>
          <div>
            {" "}
            <Table
              striped
              bordered
              hover
              style={{ width: "100%", marginTop: "30px" }}
            >
              <thead
                style={{
                  backgroundColor: "black",
                  fontSize: "14px",
                  color: "white",
                  textAlign: "center",
                  width: "100px",
                  height: "20px",
                }}
              >
                <tr>
                  <th className="p-2">Date</th>
                  <th className="p-2">Day Installs</th>
                  <th className="p-2">Platform</th>
                  <th className="p-2">Day Uninstalls</th>
                  <th className="p-2">Platform</th>
                  <th className="p-2">Churn Rate</th>
                  {/* <th>Churn Platform</th> */}
                </tr>
              </thead>
              {currentpost &&
                 currentpost.map((item, index) => ( 
                  <tbody
                    style={{
                      backgroundColor: "#253046",
                      fontSize: "15px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <tr>
                      
                      <td style={{color:"white"}}>{item.created_At.slice(0,10)} </td>
                      <td style={{color:"white"}}>{item.totalinstall}</td>
                      <td style={{color:"white"}}>{item.android_install}</td>
                      <td style={{color:"white"}}>{item.totaluninstall}</td>
                      <td style={{color:"white"}}>{item.android_uninstall}</td>
                      <td style={{color:"white"}}>{item.totaluninstall}</td>
                      {/* <td>{item.id}</td>
                      <td>{item.title}</td> */}
                      {/* {/* <td>3</td> */}
          
                    </tr>
                  </tbody>
                 ))} 
            </Table>
          </div>
        </div>
        <div className="pagenumbersection">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="pageitem">
                <a
                  onClick={() => paginate(number)}
                  className="pagelink"
                  activeclassname="activepage"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
