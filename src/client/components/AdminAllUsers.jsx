import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, InputLabel, Input } from "@mui/material"
import AdminViewAllUsers from "./AdminViewAllUsers"



export default function AdminAllUsers() {
    const [ user, setUser ] = useState([]);
    const [ address, setAddresses ] = useState([])
    const [ admin, setAdmin ] = useState(false)
    const userID = sessionStorage.getItem('userID');
    
    useEffect(() => {
    
        const getAdmin = async () => {
          try{
            const id = parseInt(userID, 10);
            const response = await fetch (`${API}/users/${id}`)
  
            const data = await response.json();
  
            
            setAdmin(data.isAdmin)
            console.log('user check', data);
            console.log('is admin?', admin);
            return(data);
  
          } catch(err) {
            console.log('error getting admin status')
          }
        }
        getAdmin();
      }, [setAdmin])
      console.log ('admin state check', admin)


   
   
   


    if (admin === true) {
        return <AdminViewAllUsers />
      } 
      else {
        return <SingleProductRender />
      }
    }