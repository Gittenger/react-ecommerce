import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { checkoutSuccess } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, checkoutSuccess }) => {
  const priceInCents = price * 100;
  const publicKey = "pk_test_pulLUU0iOLGSheoPetikthTC00JqLYCAzw";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
        checkoutSuccess();
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you used the provided test credit card."
        );
      });
  };

  return (
    <StripeCheckout
      name="CRWN Clothing Ltd."
      label="Pay Now"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
