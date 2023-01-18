import React, { Component } from 'react';
import client from '../../contentful/client'

import "./Competences.css"
import Competence from '../competence/competence';

class CompetencesList extends Component {

    constructor() {
        super()
        this.state = 
        {
            competence: [],
        }
    }
    
    componentDidMount(){
        client.getEntries({
            'content_type' : 'competence', 'order': '-sys.createdAt',"limit": 200,
          }).then((entries)=> {
            this.setState({competence: entries.items }) 
          })
    }
    
    render(){     
        const onFilterContentPresentation = (event) => {
            this.props.filterContentPresentation(event)
        }   
        
        return (
            <div className="Competences">
                <h2>Compétences</h2>
                <div className="ListCompetences">
            
                        {
                            this.state.competence.length === 0 ?
                            <h2>Loading</h2>
                            :
                            this.state.competence.map((competence) => {
                                return(   
                                    this.props.level === competence.fields.niveau && this.props.filterCategories === competence.fields.nomCategorie  ?
                                    <div key={competence.sys.id} className= "Competence" onClick = { () => onFilterContentPresentation(competence.sys.id) }>
                                        <Competence 
                                            iconCompetence = {competence.fields.iconCompetence.fields.file.url}
                                            competenceName = {competence.fields.nomCompetence}
                                            localisation = {competence.fields.localisation}
                                            duree = {competence.fields.duree}
                                        />
                                    </div>
                                    :
                                    null
                                )
                            })
                        }
                </div>
            </div>

        );
    }
}

export default CompetencesList;
