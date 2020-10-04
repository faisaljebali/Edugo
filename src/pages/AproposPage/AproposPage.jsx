import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';

function AproposPage() {
    const cours = useSelector(state => state.cours);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(coursActions.getAll());
    }, []);

    return (
        <div className="container mg-top-50">
            <div className="about">
            <h1 className="h1_dash">Enseignants passionnés avec une véritable expérience</h1>
            <p>Notre équipe pédagogique est constitués d’enseignants diplômés, passionnés et expérimentés de nombreuses années dans l’enseignement de l’anglais et de l’allemand en tant que langue étrangère. Le programme que nous proposons n’est pas juste une compilation de séances. C’est un programme qui est transmis de façon naturelle.</p>
            <p>Nos professeurs hautement qualifiés aident les apprenants à améliorer leur expression et leur compréhension orales et écrites en ligne, et de renforcer leur confiance et atteindre leurs objectifs.</p>
            </div>
            <div className="qui_somme_nous">
                <div className="image_qui">
                    <img src='https://www.oaastudy.com/wp-content/uploads/2020/04/safer-at-home.png' />
                </div>
                <div class="right_contenu">
                    <h1 className="h1_dash">Qui sommes nous ?</h1>
                    <div className="contenue">
                    <p>Nous somme une Plateforme entièrement dédiée à l'enseignement et à l'apprentissage du Langue Etrangère en ligne.</p>
                        <ul>
                        <li>Anglais</li>
                        <li>Français</li>
                        <li>Allemand</li>
                        </ul>    
                    <p>Que vous soyez chez vous, au travail ou sur votre trajet, grâce à cette plateforme en-ligne, vous pourrez apprendre des langues étrangères de manière facile et efficace. Tout ce dont vous avez besoin, c’est un accès d’Internet. Inscrivez-vous à un de nos cours disponibles en ligne et apprenez l’anglais ou l’allemand avec nous.<br/> Un vrai gain de temps et d’argent.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export { AproposPage };