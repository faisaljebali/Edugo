import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';
import BeatLoader from "react-spinners/BeatLoader";
import { CourItem } from '../../_components/CourItem';

function CoursPage() {
    const cours = useSelector(state => state.cours);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursActions.getAll());
    }, []);

    return (
        <div className="container mg-top-50">
            <div className="nos_cours">
                <h1 className="h1_dash">Nos cours</h1>
                {
                cours.loading && <BeatLoader
                                size={20}
                                margin={10}
                                color={"#f6b120"}
                                loading={true}
                                />
                }
                {cours.error && <span className="text-danger">ERROR: {cours.error}</span>}
                {cours.cours &&
                    <div className="coursList">
                        {cours.cours.map((cour, index) => <CourItem key={cour.id} cours={cour} />)}
                    </div>
                }
            </div>  
        </div>
    );
}

export { CoursPage };