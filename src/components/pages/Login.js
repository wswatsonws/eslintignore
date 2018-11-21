
import React, {Component} from 'react';
import TextField from "material-ui/TextField";
//import Card from "material-ui/Card";
//import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
//import MenuItem from 'material-ui/MenuItem';




import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


//import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';
class Login extends Component {

constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
    }
 }
handleClick(){
    console.log('this is:',this);
    const w=window.open('about:blank');
    w.location.href='/'
}
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Login" primary={true} style={{width: "10em", alignSelf: "center"}} onClick={() => this.props.history.push({
                pathname: '/home',
                state: {
                    id: 3
                }
                })}/>
            
             <h5 style={{alignSelf: "center"}} >Not registered, Register Now</h5>
             <RaisedButton label="Register" primary={true} style={{width: "10em", alignSelf: "center"}} 
             onClick={() => this.props.history.push({
                pathname: '/register',
                state: {
                    id: 3
                }
                })}


             />
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
/*const style = {
 margin: 15,
};*/
export default Login;