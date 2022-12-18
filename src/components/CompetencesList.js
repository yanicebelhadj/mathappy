import React, { Component } from 'react';
import client from '../Client'

import "../css/Competences.css"
import Competence from './Competence';

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
                                        {console.log(this.state.competence)}
                                        <Competence 
                                            img = {competence.fields.iconCompetence.fields.file.url}
                                            nomCompetence = {competence.fields.nomCompetence}
                                            localisation = {competence.fields.localisation}
                                            duree = {competence.fields.duree}
                                        />
                                    </div>
                                    :
                                    null
                                )
                            })
                        }
                        {console.log(this.state.competence.length)}
                        {console.log("bob")}
                </div>
            </div>

        );
    }
}

export default CompetencesList;
