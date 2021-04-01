import React, { Component } from 'react'

export default class Client extends Component {
    state = {
        showInfo:false
    }

    handleShowInfo = () => {
            this.setState({
                showInfo: !this.state.showInfo
            })
    }
    render() {
        // id, lieu, poste, languages, begin, end,
        let {  name,  site, realisations, environnement, picture } = this.props.item;
        return (
            
            <div className="project">
               <h4>{ name } </h4>
               <img src={picture} alt="" onClick={this.handleShowInfo}/>
{/*                <span className="infos" onClick={this.handleShowInfo}>
                   <i className="fas fa-plus-circle" onClick={this.handleShowInfo}></i>
               </span> */}
               { this.state.showInfo && (
                   <div className="showInfos">
                       <div className="infosContent">
                           <div className="head">
                               <h3>{name}</h3>
                               <div className="sourceCode">
                                   <a href={site} className="button" rel="noopener noreferrer" target="_blank">Link</a>
                               </div>
                              
                           </div>
                           <p className="text">
                                <strong>Réalisations : </strong>
                                { realisations }
                            </p><p className="text">
                                <strong>Environnement technique : </strong>
                                {environnement}
                            </p>
                        <div className="button return" onClick={this.handleShowInfo}>Retour</div>
                       </div>
                   </div>
               )

               }
            </div>
        )
    }
}
