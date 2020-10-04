import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';
import BeatLoader from "react-spinners/BeatLoader";
import { ProfItem } from '../../_components/ProfItem';

function ProfsPage() {
    const coachs = useSelector(state => state.cours);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursActions.getAllCoachs());
    }, []);

    return (
        <div className="container mg-top-50">
            <div className="nos_coachs">
                <div className="center_h1">
                    <h1 className="h1_dash">Enseignants passionnés</h1>
                                    
                {
                coachs.loading && <div><br/><br/><BeatLoader
                                size={20}
                                margin={10}
                                color={"#f6b120"}
                                loading={true}
                                /></div>
                }

                {coachs.profs &&
                    <div className="coachsList">
                        {coachs.profs.map((prof, index) => <ProfItem key={index} prof={prof}/>)}
                    </div>
                }
                </div>
            </div>  
        </div>
    );
}

export { ProfsPage };