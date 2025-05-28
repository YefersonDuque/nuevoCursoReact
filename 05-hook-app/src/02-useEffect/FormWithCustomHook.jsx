// import { useEffect } from "react"
import { UseForm } from "../hooks/UseForm"

export const FormWithCustomHook = () => {

    const { formState, onReseatForm ,onINputChange, username, email, password } = UseForm({
        username: '',
        email: '',
        password: ''
    })

    const onResetForm =()=>{
        
    }

    return (
        <>
            <h1>Formulario con custom hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onINputChange}
            />
            <button onClick={onReseatForm} className="btn btn-primary mt-2">Borrar</button>
            {
                // <UseForm />
            }
        </>
    )
}

