import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';

function NousContacter() {
    const { id } = useParams();
    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        phone:'',
        message: '',
        cours_id: id,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errorpassword, setErrorpassword] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.nom && user.prenom && user.email && user.phone) {
            dispatch(userActions.sendMessageContact(user));
            setSubmitted(false);
            setUser({
                nom: '',
                prenom: '',
                email: '',
                phone:'',
                message: '',
                cours_id: id,
            });
        }
    }

    return (
        <div className="container mg-top-50">
            <div className="form-style formRegister">
                <h2>Nous contacter</h2>
                <form name="form" onSubmit={handleSubmit}>                   
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" name="nom" value={user.nom} onChange={handleChange} className={'form-control' + (submitted && !user.nom ? ' is-invalid' : '')} />
                            {submitted && !user.nom &&
                                <div className="invalid-feedback">Veuillez saisir votre nom.</div>
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Prénom</label>
                            <input type="text" name="prenom" value={user.prenom} onChange={handleChange} className={'form-control' + (submitted && !user.prenom ? ' is-invalid' : '')} />
                            {submitted && !user.prenom &&
                                <div className="invalid-feedback">Veuillez saisir votre prénom.</div>
                            }
                        </div>
                    </div>
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
                        {submitted && !user.phone  &&
                            <div className="invalid-feedback">Saisissez votre numéro de téléphone.</div>
                        }
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea  rows='4' name="message" value={user.message} onChange={handleChange} className={'form-control'} >{user.message}</textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-outline-success">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { NousContacter };