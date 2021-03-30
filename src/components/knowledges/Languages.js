import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Languages extends Component {
    state = {
        languages: [
            {id:1 , value:"Javascript" , xp:1.8},
            {id:2 , value:"NodeJS" , xp:1},
            {id:3 , value:"C#" , xp:2},
            {id:4 , value:"ASP.NET WebForm" , xp:2},
            {id:5 , value:"ASP.NET MVC" , xp:0.8},
        ],
        frameworks: [
            {id:1 , value:"React" , xp:0.5},
            {id:2 , value:"Angular 9" , xp:1},
            {id:3 , value:"VusJS" , xp:1.1},
            {id:4 , value:".NET" , xp:1.3},
            {id:5 , value:"Jquery" , xp:1.8},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                 languages={languages}
                  className="languagesDisplay"
                  title="Languages" />
              
                <ProgressBar
                 languages={frameworks}
                  className="frameworksDisplay"
                  title="Frameworks" />
                              
            </div>
        )
    }
}
