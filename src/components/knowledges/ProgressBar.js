import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'experiences</span>
                <span>50%</span>
                <span>99%</span>
            </div>
            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%';
                        //console.log(progressBar);
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width: progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;