import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
        window.scrollTo(0, 0);
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <div className="container mg-top-50">
            <div className="form-style formRegister">
                <h2>Se connecter</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                        {submitted && !username &&
                            <div className="invalid-feedback">Veuillez saisir votre nom d'utilisateur.</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                        {submitted && !password &&
                            <div className="invalid-feedback">Veuillez saisir votre mot de passe.</div>
                        }
                    </div>
                    <div className="form-group">
                        <div className="flex-connection">
                            <button className="btn btn-outline-success">
                                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"> </span>}
                                Se connecter
                            </button> 
                            <Link to="/reset-password" className="btn-link">Mot de passe oublié ?</Link>
                        </div>
                        <div className="footer-form">
                            Pas encore de compte ? <Link to="/register" className="btn-link">S'inscrire</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export { LoginPage };