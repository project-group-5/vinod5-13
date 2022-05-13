import logo from './logo.svg';
import './App.css';
import {AppBar,Toolbar} from '@mui/material'
import Typography from '@mui/material/Typography'
import {Link,Outlet} from "react-router-dom"
import {Button} from "@mui/material"
import {Paper} from '@mui/material'
import ErrorBoundry from './errorboundry';
import { Avatar } from '@mui/material';
import {useNavigate} from 'react-router-dom'
function App() {

  var navigate=useNavigate()
  var user=sessionStorage.getItem("Email")
  
  if (user != null) {
    console.log(user)
   
    return (
      <>
      
        <AppBar position="fixed">
          <Toolbar>
           <Avatar >
             {user.slice(0,1).toUpperCase()}
             </Avatar> 
          <Typography>
            SeatBooking App
          </Typography>
         
          <Link to="/home/view"><Button variant="contained">View </Button></Link>
          <Link to="/home/add"><Button variant="contained">Add</Button></Link>
          <Link to="/home/update"><Button variant="contained">Update</Button></Link>
          <Link to="/home/delete"><Button variant="contained">Delete</Button></Link>
          <Link to="/register"></Link>
          <Button variant="contained"  
          onClick={()=>{
            sessionStorage.clear()
            navigate("/")
          }}
          
          >Logout</Button>
          </Toolbar>
        </AppBar>
        <div style={{position:"relative",top:200}}>
          <Paper elevation={15}>
            <ErrorBoundry>          
   <Outlet/>
   </ErrorBoundry>
   </Paper>
   <h1 style={{position:'relative',left:500,fontSize:80}}>Welcome Admin</h1>
        </div>
       
      </>
      
        
    );}
      else{
        return <h1>You not logged  in!!</h1>
      }
      
    
    }

export default App;