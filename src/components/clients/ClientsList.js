import React, { Component } from 'react';
import  {experienceData} from '../../data/experienceData';
import Client  from './Client';

class ClientsList extends Component {
    state = {
        clients:experienceData,
        radios: [
            {id:1 , value:"javascript"},
            {id:2 , value:"css"},
            {id:3 , value:"react"},
            {id:4 , value:"php"}
        ],
        selectedRadio:"javascript"
    }
    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio:radio})

    }
    monthDiff = (begin, end) => {
        let arrayBegin = begin.split("/");
        let arrayEnd = end.split("/");
        let dateFrom = new Date(arrayBegin[1], arrayBegin[0]);
        let dateTo = new Date(arrayEnd[1], arrayEnd[0]);
        return dateTo.getMonth() - dateFrom.getMonth() + 
          (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }

    render() {
        // ,radios,selectedRadio
        let {clients}  = this.state;
        return (
            <div className="portfolioContent">
         {/*        <ul className="radioDisplay">
                    {
                        radios.map(radio => {
                            return (
                            <li key={radio.id}>
                                    <input 
                                    type="radio"
                                    id={radio.value}
                                    name="radio"
                                    value={radio.value}
                                    checked={radio.value === selectedRadio} /> 
                                    <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                            )
                        })
                    }
                </ul> */}
                <div className="projects">
                    {
                        clients
                        // .filter( item =>  item.languages.includes(selectedRadio) )
                        .map( item => {
                            console.log(item.begin, item.end,this.monthDiff(item.begin,item.end));
                            return (
                                <Client 
                                key={item.id}
                                item={item}/>
                                )
                            
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ClientsList;
