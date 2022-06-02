import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import ProgressBar from 'Component/ProgressBar.component';
import './Checkout.override.style.scss';

export class CheckoutComponent extends SourceCheckout {
    render() {
        console.log(this.props.checkoutStep,"helllllo");
        return (
            <main block="Checkout">
                <ProgressBar 
                    step={this.props.checkoutStep}
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
