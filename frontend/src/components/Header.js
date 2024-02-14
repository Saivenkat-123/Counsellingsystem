import React, {useState} from 'react'
import {AppBar, Tabs, Tab,Toolbar,Typography} from '@mui/material'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {NavLink} from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
            <Toolbar>
            <AssuredWorkloadIcon/>
            <Typography>Counselling and Visitor Management System</Typography>
            <Tabs textColor='inherit' indicatorColor='primary'
            sx={{ml :'auto'}} value={value}
            onChange={(e,val)=>setValue(val)} >
              <Tab LinkComponent= {NavLink} to='/SignUp' label = 'SignUp'/>
              <Tab LinkComponent= {NavLink} to='/Signin' label = 'SignIn'/>
              <Tab LinkComponent= {NavLink} to='/councellor' label = 'Add Councellor'/>                                                                                                                                                                  
              <Tab LinkComponent= {NavLink} to='/visitor' label = 'Add visitor'/>
              <Tab LinkComponent= {NavLink} to='/appointment' label = 'Appointment'/>
              <Tab LinkComponent= {NavLink} to='/fetchregistration' label = 'Registration'/>
              <Tab LinkComponent= {NavLink} to='/contact' label = 'Contact'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header