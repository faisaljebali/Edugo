import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';

function RegisterPage() {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        username: '',
        email:'',
        phone: '',
        password: '',
        password_confirmation: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [errorpassword, setErrorpassword] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
        window.scrollTo(0, 0);
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.name && user.surname && user.username && user.username.length >= 6 && user.email && user.phone  && user.password && user.password_confirmation && user.password.length >= 8 && user.password == user.password_confirmation) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="container mg-top-50">
            <div className="form-style formRegister">
                <h2>Créer un compte</h2>
                <form name="form" onSubmit={handleSubmit}>                   
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} />
                            {submitted && !user.name &&
                                <div className="invalid-feedback">Veuillez saisir votre nom.</div>
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Prénom</label>
                            <input type="text" name="surname" value={user.surname} onChange={handleChange} className={'form-control' + (submitted && !user.surname ? ' is-invalid' : '')} />
                            {submitted && !user.surname &&
                                <div className="invalid-feedback">Veuillez saisir votre prénom.</div>
                            }
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + ((submitted && !user.username) || (submitted && user.username.length < 6) ? ' is-invalid' : '')} />
                        {submitted && !user.username &&
                            <div className="invalid-feedback">Veuillez saisir votre nom d'utilisateur.</div>
                        }
                        {submitted && user.username.length >= 1 && user.username.length < 6 &&
                            <div className="invalid-feedback">Nom d'utilisateur est trop court (minimum 6 caractères).</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                        {submitted && !user.email &&
                            <div className="invalid-feedback">Veuillez saisir votre adresse e-mail.</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Numéro de téléphone</label>
                        <input type="number" name="phone" value={user.phone} onChange={handleChange} className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                        <span className="span-info">Vous allez recevoir un SMS sur ce numéro, soyez sûr qu'il est correct</span>
                        {submitted && !user.phone  &&
                            <div className="invalid-feedback">Saisissez votre numéro de téléphone.</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + ((submitted && !user.password) || (user.password.length >= 1 && user.password.length <= 8) ? ' is-invalid' : '')} />
                        {submitted && !user.password && user.password.length <= 8 &&
                            <div className="invalid-feedback">Veuillez saisir un mot de passe.</div>
                        }
                        {submitted && user.password.length >= 1 && user.password.length <= 8 &&
                            <div className="invalid-feedback">Le mot de passe est trop court (minimum 8 caractères).</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Confirmez le mot de passe</label>
                        <input type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} className={'form-control' + (submitted && !user.password_confirmation || user.password != user.password_confirmation ? ' is-invalid' : '')} />
                        {submitted && !user.password_confirmation &&
                            <div className="invalid-feedback">Veuillez confirmer votre mot de passe.</div>
                        }
                        {submitted && user.password_confirmation.length >= 1 && user.password != user.password_confirmation &&
                            <div className="invalid-feedback">La confirmation du mot de passe ne correspond pas.</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-success">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            S'inscrire
                        </button>
                        <div className="footer-form">
                        Vous possédez déjà un compte ? <Link to="/login" className="btn-link">Se connecter</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { RegisterPage };