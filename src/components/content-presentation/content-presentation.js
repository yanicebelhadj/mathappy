import React, { Component } from 'react';
import client from '../../contentful/client'

import Thumbnail from "../../media/Thumbnail.png"

import "./ContentPresentation.css"
import Star from '../../icons/Star';
import Cours from '../../icons/Cours';
import Exercices from '../../icons/Exercices';
import Video from '../../icons/Video';
import Fiche from '../../icons/Fiche';
import Kezako from '../../icons/Kezako';
import DiscoverTheWorld from '../../icons/DiscoverTheWorld';

class ContentPresentation extends Component {
    constructor() {
        super()
        this.state = {competence: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'competence', 'order': '-sys.createdAt',"limit": 200
          }).then((entries)=> {
            this.setState({competence: entries.items }) 
          })
    }

    render(){
        return (
            <div className="ContentPresentation">

            {
                this.state.competence.length === 0 ?
                <h3>Loading</h3>
                :
                this.state.competence.map((competence) => {
                    return(
                        this.props.level === competence.fields.niveau && this.props.filterCategories === competence.fields.nomCategorie &&  this.props.filterContentPresentation === competence.sys.id ?
                        <div key={competence.sys.id}>
                            <img src={Thumbnail} alt="thumbnail"/>
                            <div className='TextArea'>
                                <div className='Notes'>
                                    <div className='Stars'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                    <div className='NoteInFloat'>
                                        <p>5.0</p>
                                    </div>
                                    <div className='NbNote'>
                                        <p>200 notes</p>
                                    </div>
                                </div>
                                <h2>{competence.fields.nomCompetence}</h2>
                                <p>{competence.fields.descriptionCompetence}</p>
                                <a href="http://www.google.fr">Voir le cours</a>
                                <div className='Line'></div>
                                <div className='ContentPresentation'>
                                    {
                                        competence.fields.presentationContenu.Cours ?
                                        <div className='Item'>
                                            <Cours />
                                            <div className='TextArea'>
                                                <p className='Title'>Cours</p>
                                                <p className='Description'>Ce cours a été optimisé pour qu’il soit compris le simplement</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
    
                                    {
                                        competence.fields.presentationContenu.Exercices ?
                                        <div className='Item'>
                                            <Exercices />
                                            <div className='TextArea'>
                                                <p className='Title'>Exercices</p>
                                                <p  className='Description'>Ce cours a été optimisé pour qu’il soit compris le simplement</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                    
                                    {
                                        competence.fields.presentationContenu.Video ?
                                        <div className='Item'>
                                            <Video />
                                            <div className='TextArea'>
                                                <p className='Title'>Video</p>
                                                <p className='Description'>Ce cours a été optimisé pour qu’il soit compris le simplement</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
    
                                    {
                                        competence.fields.presentationContenu.Fiche ?
                                        <div className='Item'>
                                            <Fiche />
                                            <div className='TextArea'>
                                                <p className='Title'>Fiche</p>
                                                <p className='Description'>Ce cours a été optimisé pour qu’il soit compris le simplement</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
    
                                    {
                                        competence.fields.presentationContenu.Kezako ?
                                        <div className='Item'>
                                            <Kezako />
                                            <div className='TextArea'>
                                                <p className='Title'>Kezako</p>
                                                <p className='Description'>Ce cours a été optimisé pour qu’il soit compris le simplement</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
    
                                    {
                                        competence.fields.presentationContenu.DiscoverTheWorld ?
                                        <div className='Item'>
                                            <DiscoverTheWorld />
                                            <div className='TextArea'>
                                                <p className='Title'>Discover the World</p>
                                                <p className='Description'>Comprends les maths à travers le monde</p>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                        :
                        null
                    )
                })

                    
            }
            </div>

        );
    }
}

export default ContentPresentation;
