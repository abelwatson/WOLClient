import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');
    
    return(
        <div>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordhash">Password</Label>
                    <Input name="passwordhash" value={passwordhash} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;