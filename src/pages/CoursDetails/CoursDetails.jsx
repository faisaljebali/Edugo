import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';
import BeatLoader from "react-spinners/BeatLoader";

function CoursDetails() {
    const { slug } = useParams();
    const cours = useSelector(state => state.cours);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursActions.getCoursBySlug(slug));
    }, []);

    return (
        <div className="container mg-top-50">
            {
             cours.loading && <div className="center_loader">
                            <BeatLoader
                                size={20}
                                margin={10}
                                color={"#f6b120"}
                                loading={true}
                            /></div>
            }
            {/* {cours.error && <span className="text-danger">ERROR: {cours.error}</span>} */}
            {cours.cours &&
                <div className="detail_cours_page">
                    {cours.cours.map((cour, index) => 
                        <div className="flex_detail_page">
                        <div key={cour.id} className="left_detail">
                            <h1 className="h1_dash">{cour.title}</h1><br/>
                            {cour.image_cours && <img src={cour.image_cours.path}  /> }
                            <h4>Description</h4>
                            <div className="cour_content_detail" dangerouslySetInnerHTML={{__html: cour.description && cour.description.replace(/(<? *script)/gi, 'illegalscript')}} ></div>    
                        </div>
                        <div className='right_detail'>
                            <div className='cours-information'>
                                <div className="courses-information">
                                    Cours Informations
                                </div>
                                <div className="courses-details-right">
                                    {cour.date_start && <div key={cour.date_start} className="courses-option"><div className="option-text">Commencer le :</div><div className="option-value">{new Intl.DateTimeFormat(['ban', 'id']).format(new Date(cour.date_start))}</div></div>}
                                    {cour.nb_heures_cours && <div key={cour.nb_heures_cours} className="courses-option"><div className="option-text">Durée :</div><div className="option-value">{cour.nb_heures_cours} Heures</div></div>}
                                    {cour.nb_heures_cours && <div key={cour.id} className="courses-option"><div className="option-text">Type de formation :</div><div className="option-value">En ligne</div></div>}
                                    {cour.niveau && <div key={cour.niveau} className="courses-option"><div className="option-text">Niveau du Cours :</div><div className="option-value">{cour.niveau}</div></div>}
                                    {cour.nb_max_etudiant && <div key={cour.nb_max_etudiant} className="courses-option"><div className="option-text">Nombre :</div><div className="option-value">{cour.nb_max_etudiant} Personnes</div></div>}
                                    {cour.dure_min && <div  key={cour.dure_min} className="courses-option"><div className="option-text">Durée/Seance  :</div><div className="option-value">{cour.dure_min} minutes</div></div>}
                                    {cour.prix && <div  key={cour.prix} className="courses-option"><div className="option-text">Prix  :</div><div className="option-value">{cour.prix} DNT</div></div>}
                                    {cour.age_etudiant && <div key={cour.age_etudiant} className="courses-option"><div className="option-text">Pour qui  :</div><div className="option-value">{cour.age_etudiant}</div></div>}
                                    {cour.category && <div key={cour.category} className="courses-option"><div className="option-text">Catégorie :</div><div className="option-value">{cour.category.title}</div></div>}
                                    {cour.sous_category && <div key={cour.sous_category} className="courses-option"><div className="option-text">Sous Catégorie :</div><div className="option-value">{cour.sous_category.title}</div></div>}
                                    {cour.language_niveau && <div key={cour.language_niveau} className="courses-option"><div className="option-text">Sous Niveau  :</div><div className="option-value">{cour.language_niveau}</div></div>}
                                    {cour.prof && <div key={cour.prof} className="courses-option"><div className="option-text">Coach :</div><div className="option-value">{cour.prof.fullname}</div></div>}
                                </div>  
                            </div> 
                            <div className='cours-horaire'>
                                <div className="courses-horaire">
                                    Horaire
                                </div>
                                <div className="courses-details-right">
                                   {cour.planning &&  
                            
                                   JSON.parse(cour.planning).planning.map((plan, index) => 
                                    <div className='flex-horaire' key={index}>{plan.start && <div className="horair-item"><div className="horaire-jour">{plan.jour}</div><div className="time_horaire">{plan.start} - {plan.end.slice(0,-1)}0</div></div>}</div>
                                   )
                                   }

                                </div>  
                            </div> 

                            {!user && 
                                <div className="pay-cour-right">
                                    <Link to='/register' className="register-cour">Réserver</Link>
                                </div>}
                            {user && 
                                <div className="pay-cour-right">
                                    <Link to='/book' className="register-cour">Réserver</Link>
                                </div>}
                                <Link to={'/contact/'+cour.id} className="nous-contact">Nous contacter</Link>
                        </div>
                        </div>
                    
                    )}
                </div>
            }
        </div>
    );
}

export { CoursDetails };