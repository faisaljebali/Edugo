import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch,shallowEqual, useSelector } from 'react-redux';
import { history } from '../_helpers';
import { userActions } from '../_actions';
import BeatLoader from "react-spinners/BeatLoader";

function Header() {

    var  user = useSelector(state => state.authentication.user,shallowEqual);
    const dispatch = useDispatch();
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    // reset login status
    useEffect(() => { 
        user = JSON.parse(localStorage.getItem('user'));
    }, [localStorage.getItem('user')]);

    function handleLogout() {
        dispatch(userActions.logout()); 
        history.push('/login');
    }

    return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"><img src="http://demo.hasthemes.com/edubuzz-v1/edubuzz/img/logo/logo.png"/></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active" className="nav-link" >Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cours" activeClassName="active" className="nav-link" >Cours</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/tutors" activeClassName="active" className="nav-link" >Professeurs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us" className="nav-link" >À propos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact-us" className="nav-link" >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#"></a>
                        </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                        {user && !loggingIn  
                            ? 
                            user.user ? 
                            // Login User
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {(user && user.user.sexe && user.user.sexe == 'homme') || (user && !user.user.sexe) ?
                                        <img className='img-avatar' src="https://icon-icons.com/icons2/1736/PNG/64/4043260-avatar-male-man-portrait_113269.png" width="40" /> 
                                        : 
                                        <img className='img-avatar' src="https://icon-icons.com/icons2/1736/PNG/64/4043250-avatar-child-girl-kid_113270.png" width="40" />
                                        }
                                         {user.user.name} {user.user.surname} 
                                    </a>
                                    <div className="dropdown-menu dopdown-profile" aria-labelledby="navbarDropdown">
                                        <NavLink to="/my-courses" className="dropdown-item" >Mes cours</NavLink>
                                        <NavLink to="/settings" className="dropdown-item" >Paramètres</NavLink>
                                        <a className="dropdown-item" href="#">Assistance</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" onClick={() => handleLogout()}>Déconnexion</a>
                                    </div>
                                </li>
                            </ul>
                            // Spinner
                            :   <BeatLoader
                                    size={15}
                                    margin={6}
                                    color={"#009688"}
                                    loading={true}
                                />
                            // Not Login User
                            : 
                            <div className="navbar-right-btn">
                                <NavLink to="/login" className="btn btn-outline-success my-2 my-sm-0" >Se connecter</NavLink> 
                                <NavLink to="/register" className="btn btn-success my-2 my-sm-0" >S'inscrire</NavLink> 
                            </div>
                        }
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
    );
}


export {Header};
