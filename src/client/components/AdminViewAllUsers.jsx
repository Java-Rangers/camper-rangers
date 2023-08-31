import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../App";
import { Container, Typography, Paper, Box } from "@mui/material";


export default function AdminViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch(`${API}/users`);
        const usersData = await usersResponse.json();
        setUsers(usersData.users);

        const addressesResponse = await fetch(`${API}/address`);
        const addressesData = await addressesResponse.json();
        setAddresses(addressesData.addresses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function renderUserWithAddress(user) {
    let address = null;
  
    for (const addr of addresses) {
      if (addr.userId === user.id) {
        address = addr;
        break;
      }
    }

    return (
      <Paper key={user.id} elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Name: {user.fName} {user.lName}</Typography>
        <Typography>Email: {user.email}</Typography>
        {address && (
          <div>
            <Typography>Address:</Typography>
            <Typography>Street: {address.street}</Typography>
            <Typography>City: {address.city}</Typography>
            <Typography>State: {address.state}</Typography>
            <Typography>Zip: {address.zip}</Typography>
          </div>
        )}
      </Paper>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        All Users
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {users.map((user) => renderUserWithAddress(user))}
      </Box>
    </Container>
  );
}
    