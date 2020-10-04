import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions';
import { Sidebar } from '../../_components/Sidebar';

function SettingsPassword() {
    const userLogin = useSelector(state => state.authentication.user);

    const [user, setUser] = useState({
        id: userLogin.user.id,
        login:userLogin.user.username,
        oldpassword:'',
        password: '',
        password_confirmation: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();


    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.oldpassword  && user.password && user.password_confirmation && user.password.length >= 8 && user.password == user.password_confirmation) {
            dispatch(userActions.updatePassword(user));
        }
    }

    return (
        <div className="container mg-top-50">
            <div className="flex-page">
                <div className="menu-left">
                    <Sidebar />
                </div>
                <div className="flex-content">
                <div className="form-style">
                    <h2>Changer votre mot de passe</h2>
                    <form name="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Mot de passe actuel</label>
                            <input type="password" name="oldpassword" value={user.oldpassword} onChange={handleChange} className={'form-control' + (submitted && !user.oldpassword ? ' is-invalid' : '')} />
                            {submitted && !user.oldpassword &&
                                <div className="invalid-feedback">Veuillez saisir mot de passe actuel.</div>
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
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export { SettingsPassword };