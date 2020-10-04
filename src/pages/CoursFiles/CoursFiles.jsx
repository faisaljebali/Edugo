import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursActions } from '../../_actions';
import BeatLoader from "react-spinners/BeatLoader";

function CoursFiles() {
    const { slug } = useParams();
    const cours = useSelector(state => state.cours);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    useEffect(() => {
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

            {cours.cours &&
                <div className="files_cours_page">
                    {cours.cours.map((cour, index) => 
                        <div key={cour.id} className="left_title_detail">
                            <h1 className="h1_dash">Fichiers ({cour.title}) :</h1><br/> 
                            {cour.files_cours &&  
                                cour.files_cours.map((file, index) => 
                                    <div key={index} className='file-item'>
                                        {file.title && <div className='file-title'>{file.title}</div>}
                                        {file.description && <div className='file-description'>{file.description}</div>}
                                        {file.file_name && <div className='file-file_name'>{file.file_name}</div>}
                                        <div className="date_link_flex">
                                        {file.updated_at && <div className='date_file'>Ajouté le : { new Intl.DateTimeFormat(['ban', 'id']).format(new Date(file.updated_at))}</div>}
                                        {file.path && <div className='file-path'><a className="btn btn-outline-success" href={file.path} target="_blank">Télécharger</a></div>}
                                        </div>
                                    </div>)
                            }
                        </div>
                    
                    )}
                </div>
            }

        </div>
    );
}

export { CoursFiles };