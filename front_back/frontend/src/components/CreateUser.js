
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import axios from 'axios';





function CreateUser() {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpassword,setconfirmpassword]=useState("")

    const[response_msg,setresponse_msg]=useState("")

    const Handleusername= (e)=>{
        setusername(e.target.value)
    }
    const Handleemail= (e)=>{
        setemail(e.target.value)
    }
    const Handlepassword= (e)=>{
        setpassword(e.target.value)
    }
    const Handleconfirmpassword= (e)=>{
        setconfirmpassword(e.target.value)
    }

    const Handleregbtn = async (e) => {

        if(username===""||email===""||password===""){
            setresponse_msg("Enter all required fields")
        }else if(password!==confirmpassword){
            setresponse_msg("Password and confirm password do not match!!")
        }else{
            try {
            axios.post('http://localhost:5000/api/users', {
                username: username,
                email: email,
                password: password
    
    
            }).then((res) => {
                setresponse_msg(res.data.message)
            })
            } catch (error) {
             console.log(error+"Unable to create user")   
            }
        }
        
        



    }
    return (
        <div className="App container mt-1 col-md-6 col-sm-12 justify-content-center">
            <Card>
                <Card.Header className='bg-primary text-white'>CREATE NEW USER</Card.Header>
                <Card.Body>
                    <div className='text-danger mb-3'>{response_msg}</div>
                    <form >
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3 text-primary" >
                            <Form.Control type="text" onChange={Handleusername}  placeholder="Enter username" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 text-primary" >
                            <Form.Control type="text" onChange={Handleemail}  placeholder="Enter Email" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 text-primary" >
                            <Form.Control type="password" onChange={Handlepassword}  placeholder="Enter Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-3 text-primary" >
                            <Form.Control type="password" onChange={Handleconfirmpassword}  placeholder="Confirm Password" />
                        </FloatingLabel>


                        <Button  onClick={Handleregbtn} className="btn btn-primary btn-sm">Create User</Button>




                    </form>
                </Card.Body>
            </Card>

        </div>
    )

}


export default CreateUser;