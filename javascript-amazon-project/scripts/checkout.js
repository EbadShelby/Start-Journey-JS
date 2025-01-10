import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

renderOrderSummary();
renderPaymentSummary();

async function loadPage() {
  console.log("load page");
  return "value";
}

loadPage().then((value) => {
  console.log("next step");
  console.log(value);
});
