import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions';
import { Sidebar } from '../../_components/Sidebar';

function SettingsPage() {
    const userLogin = useSelector(state => state.authentication.user);
    const [user, setUser] = useState({
        id: userLogin.user.id,
        name: userLogin.user.name,
        surname: userLogin.user.surname,
        username: userLogin.user.username,
        email:userLogin.user.email,
        phone: userLogin.user.phone,
        cin: userLogin.user.cin ? userLogin.user.cin : '',
        sexe: userLogin.user.sexe ? userLogin.user.sexe : '',
        adresse: userLogin.user.adresse ? userLogin.user.adresse : '',
        date_brithday: userLogin.user.date_brithday ? userLogin.user.date_brithday : '',
        token: userLogin.token,
    });

    // reset login status
    useEffect(() => { 
        const token = JSON.parse(localStorage.getItem('user'));
        user.token = token.token;
    }, [localStorage.getItem('user')]);

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
        if (user.name && user.surname && user.username && user.email && user.phone) {
            dispatch(userActions.update(user));
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
                    <h2>Informations générales</h2>
                    <form name="form" method='post' onSubmit={handleSubmit}>
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
                            <input type="text" name="username" value={user.username} disabled className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                            {submitted && !user.username &&
                                <div className="invalid-feedback">Veuillez saisir votre nom d'utilisateur.</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" name="email" value={user.email} disabled className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                            {submitted && !user.email &&
                                <div className="invalid-feedback">Veuillez saisir votre adresse e-mail.</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>CIN</label>
                            <input type="number" name="cin" value={user.cin} onChange={handleChange} className={'form-control'} />
                        </div>
                        <div className="form-group">
                            <label>Numéro de téléphone</label>
                            <input type="number" name="phone" value={user.phone} onChange={handleChange} className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                            {submitted && !user.phone &&
                                <div className="invalid-feedback">Saisissez votre numéro de téléphone.</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Sexe</label>
                            <select name="sexe" className="form-control" value={user && user.sexe ? user.sexe : ''} onChange={handleChange}>
                                <option value="">Sélectionner</option>
                                <option value="homme"  >Homme</option>
                                <option value="femme" >Femme</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Date de naissance</label>
                            <input type="date" name="date_brithday" value={user.date_brithday} onChange={handleChange} className={'form-control'} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="adresse" value={user.adresse} onChange={handleChange} className={'form-control'} />
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

export { SettingsPage };