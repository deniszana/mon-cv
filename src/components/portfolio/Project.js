import React, { Component } from 'react'

export default class Project extends Component {
    state = {
        showInfo:false
    }

    handleShowInfo = () => {
            this.setState({
                showInfo: !this.state.showInfo
            })
    }
    render() {
        
        let { name , languages, languagesIcons , source , info , picture } = this.props.item;
        return (
            
            <div className="project">
                <div className="icons">
                   { languagesIcons.map(icon => {
                        return (
                            <i className={icon} key={icon}></i>
                            
                        )
                            
                        }) 
                    }
                </div>
               <h3>{ name } </h3>
               <img src={picture} alt=""/>
               <span className="infos" onClick={this.handleShowInfo}>
                   <i className="fas fa-plus-circle" onClick={this.handleShowInfo}></i>
               </span>
               { this.state.showInfo && (
                   <div className="showInfos">
                       <div className="infosContent">
                           <div className="head">
                               <h3>{name}</h3>
                               <div className="sourceCode">
                                   <a href={source} className="button" rel="noopener noreferrer" target="_blank">Sources</a>
                               </div>
                              
                           </div>
                           <p className="text">{info}</p>
                        <div className="button return" onClick={this.handleShowInfo}>Retour</div>
                       </div>
                   </div>
               )

               }
            </div>
        )
    }
}
