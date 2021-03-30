import React, { Component } from 'react';

class Esperience extends Component {
    render() {
        let   {id, lieu, name, poste, languages, begin, end, site, realisations, environnement, picture} = this.props.item;
        return (
            <div className="exp-1">
                <h4>Du {begin} au { end } - {name}</h4><h5>{ poste}</h5>
                {/* <p>
                    <strong>Réalisations : </strong>
                    { realisations }
                </p><p>
                    <strong>Environnement technique : </strong>
                    {environnement}
                </p> */}
            </div>
        );
    }
}

export default Esperience;