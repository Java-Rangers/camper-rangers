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
            <img src='https://lh3.googleusercontent.com/pw/AIL4fc8pjUqlui3AVRjI1vRr7G9bEXTmcPDY2Ic8EuseW3B0HP_4RgaEcKhhXj63-mi8kb6OY5DyszyD5ItZLPlfPPMe8fBjga_LymAbcOMqCCoXERfn5GQmPRjUt_KLBXEQchja3r4lAi1dh3wwTT043kHqwP4oCBkTj_IgytgBb87-ud4r0JhJWNEskkUTTGctK1Hy_sfGYMak_LVI-Mwliwig-7uz7JxcQ0WB44MkKrPm6VikuqJHIWvOGeMjUlnHg0oqEJBzUVFCxCwVP2gUIZZxs3lDS2pvjgedFq6JVuIfUn-6b0Bov6e9QkZ1kO_moniodEpsrS0IBD7XNCjE86pNADoAPFws1vC6yPrLdb91eo3sHeTCUYTBziwBwMauplcYgxyQc39aK890hthUgn7pXKXltgKQWhCCWhWDL8WCaPSOWzQOOP2ODCM1prh66GmDC27zTrxhDH3GN5DmN4Vn03MULBxRpLuY4kUKuNSOa-ZFt0gyjxXeu6D3o6518yiPL99xVo0VZE6nEwHN3iRIQdSfluDy5-8Jabp-XywpbWqjPViC9stkfiYkoihASzfDLUbYdJLhbyGAPCtNKVRyPJQEPzUf4kAmj2kee3UCRfIcMBwABWzEj-drGy7TB381LICpSX1lvvLWawiqisJlu-mlsZKJ_m7TF7b9Q7cpypA_B_Sk0e7xz6Nca0XWwQcyK16UBdEeJFGvZK3QBoTJ2whMLjt74AL5pItF5j0RbGQoW4cW_D3GM7HGi0U3bv8PJcjnbnKuSXQHLwxVl8bhLpQTToT8kZ53NlZb8C5x3AmR70yYAAehHzXVY1fAPbBAwNs1hUhTK16JkdSrdnUwMc70FHgPegWHtJvHj6KgfOvMM3TXbMKu8U5QA2SYZ4Y96DTiNoCXJckYUKJMIBp9fwTceZNZ9SDBnw3hd_H0DPU_xl-7A4VRkct4D_3R13DmSi_wV0xI1JgY-jjsKbR1VbxUBoE=w1655-h931-s-no?authuser=0' id='logo'/>
            <Typography sx={{textAlign:'center', position:'relative', bottom:'65px'}}>Creators/Credits:</Typography>
            <Box sx={{display:'flex', flexDirection:'column', position:'relative', bottom:'70px', left:'105px'}}>
              <ul>
                <li>Gabriel Reffner</li>
                <li>Chance McCollum</li>
                <li>Ben</li>
                <li>Arun Pradhanang</li>
              </ul>
            </Box>
            <Typography sx={{position:'relative', bottom:'75px', textAlign:'center'}}>GoGoJavaRangers@TM</Typography>
          </Box>
      </span>
    </div>
  )
}