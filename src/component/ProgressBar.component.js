import React from 'react';
import "./ProgressBar.style.scss";

class ProgressBar extends React.Component {

    componentDidMount() {
        this.steps = {"SHIPPING_STEP": 1, "BILLING_STEP": 2, "DETAILS_STEP": 3};
        this.totalSteps = 3;
        this.setActiveStepIndicatorAndStep();
    }

    componentDidUpdate() {
        this.setActiveStepIndicatorAndStep();
    }

    modifyStepActiveClasses = (currentActiveStep) => {
        for(let i = 1; i < this.totalSteps; i++) {
            // console.log(i,this.steps[this.props.step])
            document.querySelector(`.step-${i}`).classList.add("active");
            if(i > this.steps[this.props.step]) {
                document.querySelector(`.step-${i}`).classList.remove("active");
                // console.log(i>this.steps[this.props.step],document.querySelector(`.step-${i}`));
            }
        }
    }

    setActiveStepIndicatorAndStep = () => {
        const step1 = document.querySelector(".step-1");
        const step2 = document.querySelector(".step-2");
        const activeProgressLine = document.querySelector(".active-progress-line");

        switch(this.props.step) {
            case "SHIPPING_STEP":              
                activeProgressLine.style.width = step1.offsetLeft+30+"px";
                this.modifyStepActiveClasses(this.steps["SHIPPING_STEP"]);
                break;
            case "BILLING_STEP":
                activeProgressLine.style.width = step2.offsetLeft+30+"px";
                this.modifyStepActiveClasses(this.steps["BILLING_STEP"]);
                break;
            case "DETAILS_STEP":
                activeProgressLine.style.width = "100%";
                break;
            default:
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
                    <div className='step step-1'>
                        <span className='step-number-span'>1</span>
                        <span className='step-name-span'>Shipping</span>
                    </div>
                    <div className='step step-2'>
                        <span className='step-number-span'>2</span>
                        <span className='step-name-span'>Review&nbsp;&amp;&nbsp;Payments</span>
                    </div>
                </div>                
            </div>
        );
    }
}

export default ProgressBar;