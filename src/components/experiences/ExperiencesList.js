import React, { Component } from 'react';
import  {experienceData} from '../../data/experienceData';
import Experience from './Esperience';

class ExperiencesList extends Component {
    state = {
        experiences:experienceData
    }
    render() {
        let { experiences}  = this.state;
         /*  */
        return (
           <div className="experienceScroll">
               {
                   experiences.map(item => {
                       return (
                       <Experience key={item.id} item={item}/>
                       )
                   })
                }
            </div>
        );
    }
}

export default ExperiencesList;