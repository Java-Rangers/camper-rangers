import { Link } from 'react-router-dom'
import { Container, Paper, Box, Typography, Button, ListItemSecondaryAction, colors } from '@mui/material'
import { useState, useEffect } from 'react';
import { BottomNavigation } from '@mui/material';

export default function Footer() {


  return (
    <div id='footer'>
      <span>
        <hr></hr>
          <Box sx={{height:'250px'}}>
            <img src='./assets/Power-Rangers-Logo.png'/>
            <Typography sx={{textAlign:'center', position:'relative', bottom:'65px'}}>Creators/Credits:</Typography>
            <Box sx={{display:'flex', flexDirection:'column', position:'relative', bottom:'71px', left:'100px', width:'200px'}}>
              <ul>
                <li>Gabriel Reffner</li>
                <li>Chance McCollum</li>
                <li>Ben McMahon</li>
                <li>Arun Pradhanang</li>
              </ul>
            </Box>
            <Typography sx={{position:'relative', bottom:'75px', textAlign:'center'}}>GoGoJavaRangers@TM</Typography>
          </Box>
      </span>
    </div>
  )
}