import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {

    return (<div className="menu-left-link">
                <NavLink to="/settings" exact activeClassName="active" className="sidbare-link">Informations générales</NavLink>
                <NavLink to="/settings-password" activeClassName="active" className="sidbare-link">Mot de Passe</NavLink>
                <NavLink to="/settings-email" activeclassame="active" className="sidbare-link">Paramètres</NavLink>
            </div>
            );
}

export { Sidebar };