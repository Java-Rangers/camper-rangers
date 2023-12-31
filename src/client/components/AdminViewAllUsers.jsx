import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../App";
import { Container, Typography, Paper, Box } from "@mui/material";


export default function AdminViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const isAdmin = sessionStorage.getItem('isAdmin')
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch(`${API}/users`);
        const usersData = await usersResponse.json();
        setUsers(usersData.users);

        const addressesResponse = await fetch(`${API}/address`);
        const addressesData = await addressesResponse.json();
        setAddresses(addressesData.addresses);
        console.log(addressesData.addresses)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function renderUserWithAddress(user) {
    // Find the address associated with the user
    const address = addresses.find((addr) => addr.userID === user.id);
  
    return (
      <Paper key={user.id} elevation={10} style={{ padding: "30px", marginBottom: "60px" , width: "auto", margin: "0 auto"}}>
        <Typography  variant="h6">Name: {user.fName} {user.lName}</Typography>
        <Typography>Email: {user.email}</Typography>
        {address ? (
          <div>
            <Typography>Street: {address.street}</Typography>
            <Typography>City: {address.city}</Typography>
            <Typography>State: {address.state}</Typography>
            <Typography>Zip: {address.zip}</Typography>
          </div>
        ) : (
          <Typography>No Address Found</Typography>
        )}
      </Paper>
    );
  }

  return (
    <Container >
      <Typography variant="h4" sx={{my: 2, color: "secondary.main"}} gutterBottom>
        All Users
      </Typography>
      <Box classname="allusers" display="flex" flexDirection="column" alignItems="center">
        <Paper className="allusers">

        {users.map((user) => renderUserWithAddress(user))}
        </Paper>
      </Box>
    </Container>
  );
}
    