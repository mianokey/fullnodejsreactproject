
import {useLocation,useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState} from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';





function UpdateUser(props) {

    const navigate=useNavigate();
    const location = useLocation()
    const { userid, username, email } = location.state

    const [userName_a, setuserName_a] = useState(username)
    const [email_a, setemail_a] = useState(email)
    const [response_msg, setresponse_msg] = useState()

    const handleuserName = (e) => {
        setuserName_a(e.target.value);
    }
    const handleemail = (e) => {
        setemail_a(e.target.value);
    }

    const handleupdatebtn = (e) => {
        axios.patch("http://localhost:5000/api/users/" + userid, { id: userid, username: userName_a, email: email_a })
            .then((res) => {
                setresponse_msg(res.data.message)

                navigate('/showallusers');


            })
            .catch((err) => {
                console.log(err);
            });


    }




    return (
        <div className="App container mt-1 col-md-6 col-sm-12 justify-content-center">
            <Card>
                <Card.Header>EDITING INFO FOR USER ID: {userid}</Card.Header>
                <Card.Body>
                    <div className='text-info'>{response_msg}</div>
                    <form >
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" >
                            <Form.Control type="text" value={userName_a} onChange={handleuserName} placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                            <Form.Control type="email" value={email_a} onChange={handleemail} placeholder="name@example.com" />
                        </FloatingLabel>

                        <Button onClick={handleupdatebtn} className="btn btn-primary btn-sm">Update User</Button>

                    </form>
                </Card.Body>
            </Card>

        </div>
    )


}


export default UpdateUser