import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';
import BeatLoader from "react-spinners/BeatLoader";
import Timer from 'react-compound-timer'


function MyCoursPage() {
    const cours = useSelector(state => state.cours);
    let user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const dayOfWeek = new Date().getDay();

    useEffect(() => {
        dispatch(coursActions.getCoursByIdUser(user.user.id));
    }, []);

    return (
        <div className="container mg-top-50">
            <div className="nos_cours">
                <h1 className="h1_dash">Mes cours</h1>
                {
                cours.loading && <BeatLoader
                                size={20}
                                margin={10}
                                color={"#f6b120"}
                                loading={true}
                                />
                }
                {cours.error && <div className="error-text-danger">
                    {cours.error}
                    <br/><br/>
                    <NavLink to="/cours" className="btn btn-success my-2 my-sm-0" >Découvrez nos cours</NavLink> 
                </div>}
                {cours.cours &&
                    <table className="table table-cours text-left">
                          <thead>
                            <tr>
                                <th>Séances en direct d'aujourd'hui</th>
                                <th>Horaire</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cours.cours.map((cour, index) => 
                        <tr key={cour.id} className="item-cours">
                            <td>
                                <div className="title_cour_td"><NavLink className="my-cour-title" to={'get-'+cour.slug}>{cour.title}</NavLink></div>
                                {cour.planning &&  
                            
                                JSON.parse(cour.planning).planning.map((plan, index) =>
                                { if(plan.start && plan.num_jour == dayOfWeek && cour.active == 1){

                                    const today = new Date();
                                    var dd = today.getDate();
                                    var mm = today.getMonth()+1; 
                                    var yyyy = today.getFullYear();
                                    var today1 = yyyy+'-'+mm+'-'+dd+' '+plan.start+':00';

                                    var date1 = Date.now();                                                            
                                    var date2 = new Date(today1);

                                    var diffEnMilliseconde = date2-date1;
                                    var diffEnHeures = ((date2-date1)/1000)/3600;
                                    if(diffEnHeures >= 0 && cour.active == 1){
                                        return(
                                            
                                            <div key={index}>
                                            <div className="prof_tab">Prof : {cour.prof && cour.prof.fullname}</div>
                                            Cours debut dans 
                                           <Timer 
                                               initialTime={diffEnMilliseconde}
                                               direction="backward"
                                           >
                                               {' '}<div className="timer_style"><Timer.Hours /> heures</div> : <div className="timer_style"><Timer.Minutes /> minutes</div> : <div className="timer_style"> <Timer.Seconds /> seconds </div>
                                           </Timer><br/>
                                           </div>)
                                    }else if(diffEnHeures >= -2 && diffEnHeures < 0 && cour.active == 1){
                                        return(<div key={index}><div className="prof_tab">Prof : {cour.prof && cour.prof.fullname}</div><div className="cours_loading">Cours en cours</div></div>)
                                    }else if(diffEnHeures < -2 && cour.active == 1){
                                        return(<div key={index}><div className="prof_tab">Prof : {cour.prof && cour.prof.fullname}</div><div className="cours_finish">Cours terminé</div></div>)
                                    }

                                  }else if (!plan.start && plan.num_jour == dayOfWeek && cour.active == 1){
                                    return(<div key={index}>Aucun cours disponible aujourd'hui</div>)
                                  }
                                }
                                
                                )
                                }

                            </td>
                            <td className="">
                                <div>
                                   {cour.planning &&  cour.active == 1 &&
                            
                                   JSON.parse(cour.planning).planning.map((plan, index) => 
                                    <div className='tab-horaire' key={index} className={plan.num_jour == dayOfWeek && 'active-day'} key={index}>{plan.start && <div className="horair-tab"><div className="horaire-jour">{plan.jour+'  '}</div><div className="time_horaire">{'  :  De  '+plan.start} à {plan.end.slice(0,-1)}0</div></div>}</div>
                                   )
                                   }
                                   {
                                       cour.active == 0 && <div>Cours expiré</div>
                                   }

                                </div> 
                            </td>
                            <td className="">
                                {cour.active == 1 && <div><NavLink to={'/live-'+cour.room_name+'-'+cour.room_password} className="btn btn-success" >Ouvrir Live</NavLink> 
                                <br/><br/></div> }
                            <NavLink to={'/files-'+cour.slug} className="btn btn-outline-success" >Pièces jointes</NavLink> 
                            </td>
                        </tr>
                        )}
                        </tbody>
                    </table>
                }
            </div>  
        </div>
    );
}

export { MyCoursPage };