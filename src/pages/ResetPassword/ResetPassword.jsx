import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';

function ResetPassword() {
    const [inputs, setInputs] = useState({
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const reseting = useSelector(state => state.resetpassword.reseting);
    const { email } = inputs;
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
        if (email) {
            dispatch(userActions.forgetPassword(email));
        }
    }

    return (
        <div className="container mg-top-50">
            <div className="form-style formRegister">
                <h2>Mot de passe oublié ?</h2>
                <p>Saisissez l'adresse e-mail que vous avez utilisée pour vous inscrire nous vous enverrons un lien de réinitialisation du mot de passe.</p>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                        {submitted && !email &&
                            <div className="invalid-feedback">Veuillez saisir votre adresse e-mail.</div>
                        }
                    </div>
                    <div className="form-group">
                        <div className="flex-connection">
                            <button className="btn btn-outline-success">
                                {reseting && <span className="spinner-border spinner-border-sm mr-1"> </span>}
                                Envoyer
                            </button> 
                            <Link to="/login" className="btn-link">Se connecter</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export { ResetPassword };