import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { useContext } from 'react';
AuthContext


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            //El replace nos sirve para cuando cierra el login y se devuelva no le cargue lo que estaba antes intentando entrar a la página de nuevo sin login
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar -brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        to="/marvel"
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        to="/dc"
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        DC
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 dflex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}