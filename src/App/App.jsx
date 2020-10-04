import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { PublicRoute } from '../_components';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { Header } from '../_components/Header';
import { Footer } from '../_components/Footer';
import { ResetPassword } from '../pages/ResetPassword';
import { SettingsPage } from '../pages/Settings';
import {SettingsPassword} from '../pages/SettingsPassword';
import {CoursDetails} from '../pages/CoursDetails';
import {NousContacter} from '../pages/NousContacter';
import {CoursPage} from '../pages/CoursPage';
import {ContactPage} from '../pages/ContactPage';
import {AproposPage} from '../pages/AproposPage';
import {MyCoursPage} from '../pages/MyCoursPage';
import {LivePage} from '../pages/LivePage';
import {CoursFiles} from '../pages/CoursFiles';
import {ProfsPage} from '../pages/ProfsPage';
import {ProfDetails} from '../pages/ProfDetails';
import  './styles.css';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <>
        <div className="app">
                    <Router history={history}>
                        <Header/>
                        <div className="container-website">
                            <div className="alert_code">
                            {alert.message && 
                            alert.type == 'alert-danger' ? toast.error(alert.message) : toast.success(alert.message) }
                            <ToastContainer
                                position="top-right"
                                autoClose={8000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                >
                            </ToastContainer>
                            </div>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <PublicRoute path="/login" component={LoginPage} />
                                <PublicRoute path="/register" component={RegisterPage} />
                                <PublicRoute path="/reset-password" component={ResetPassword} />
                                <PrivateRoute  path="/settings" component={SettingsPage} />
                                <PrivateRoute  path="/my-courses" component={MyCoursPage} />
                                <PrivateRoute  path="/settings-password" component={SettingsPassword} />
                                <PrivateRoute  path="/live-:roomName-:roomPassword" component={LivePage} />
                                <PrivateRoute  path="/files-:slug" component={CoursFiles} />
                                <Route       path="/get-:slug" component={CoursDetails} />
                                <Route       path="/coach-:id" component={ProfDetails} />
                                <Route       path="/tutors" component={ProfsPage} />
                                <Route       path="/contact/:id" component={NousContacter} />
                                <Route       path="/cours" component={CoursPage} />
                                <Route       path="/contact-us" component={ContactPage} />
                                <Route       path="/about-us" component={AproposPage} />
                                <Redirect from="*" to="/404" />
                            </Switch>
                        </div>
                        <Footer />
                    </Router>
        </div>
        </>
    );
}

export { App };