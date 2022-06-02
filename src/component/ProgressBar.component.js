import React from 'react';
import "./ProgressBar.style.scss";

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);

        this.previousStep = 0;
    }

    componentDidMount() {
        this.setActiveClasses();
    }

    componentDidUpdate() {
        this.setActiveClasses();
    }

    findActiveStepNumber(arr,stepName) {
        const resultObj = arr.find((stepObj) => {
            return stepObj.stepName === stepName;
        });
        return resultObj.stepNumber;
    }

    setActiveClasses = () => {
        const activeProgressLine = document.querySelector(".active-progress-line");
        const activeStepNumber = this.findActiveStepNumber(this.props.allSteps,this.props.activeStep)-1;
        const stepElement = document.querySelector(`.step-${activeStepNumber}`);
        if(activeStepNumber < this.props.allSteps.length-1) {
            activeProgressLine.style.width = stepElement.offsetLeft+(stepElement.offsetWidth/2)+"px";
        } else {
            activeProgressLine.style.width = "100%";
        }

        for(let i = 0; i < this.props.allSteps.length-1; i++) {
            if(i <= activeStepNumber) {
                document.querySelector(`.step-${i}`).classList.add("active");
            } else {
                document.querySelector(`.step-${i}`).classList.remove("active");
            }
        }
    }

    render() {
        return (
            <div
                className='progress-bar-wrapper'
            >
                <div className='progress-bar'>
                    <div className='progress-indicator-line line '></div>
                    <div className='active-progress-line line'></div>

                    {
                        this.props.allSteps.map((stepObj,i) => {
                            if(i < this.props.allSteps.length-1)
                                return (
                                    <div className={`step step-${i}`} key={i}>
                                        <div className='step-number-span-wrapper'>
                                            <span className='step-number-span'>{stepObj.stepNumber}</span>
                                        </div>
                                        <span className='step-name-span'>{stepObj.stepContent}</span>
                                    </div>
                                )
                        })
                    }
                    
                </div>                
            </div>
        );
    }
}

export default ProgressBar;