import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import ProgressBar from 'Component/ProgressBar.component';
import './Checkout.override.style.scss';

export class CheckoutComponent extends SourceCheckout {


    render() {
        return (
            <main block="Checkout">
                <ProgressBar 
                    activeStep={this.props.checkoutStep}
                    allSteps={
                        [{stepName: "SHIPPING_STEP",stepNumber: 1, stepContent: "Shipping"},
                         {stepName: "BILLING_STEP",stepNumber: 2, stepContent: "Review & Payments"},
                         {stepName: "DETAILS_STEP",stepNumber: 3, stepContent: ""}
                        ]
                    }
                />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
