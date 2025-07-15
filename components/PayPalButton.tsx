import React from "react";

const PayPalButton = () => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="YOUR_HOSTED_BUTTON_ID" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
        border="0"
        name="submit"
        alt="Pay with PayPal"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_UG/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
};

export default PayPalButton;