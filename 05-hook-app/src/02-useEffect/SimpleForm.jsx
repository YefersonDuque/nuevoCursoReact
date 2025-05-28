import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Yefer',
        email: 'email@email.com'
    });

    const { username, email } = formState;

    const onINputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect( () => {
        // console.log('useEffect called!');
    },[])
    
    useEffect( () => {
        // console.log('formState changed!');
    },[formState])
    
    useEffect( () => {
        // console.log('email chaged!');
    },[email])

    //USe efect cleanUp

    // useEffect( () => {
    //     first

    //     return() => {
    //         second
    //     }
    // },[third])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onINputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="@"
                name="email"
                value={email}
                onChange={onINputChange}
            />

            {
                (username === 'Yefer') && <Message/>
            }
        </>
    )
}

