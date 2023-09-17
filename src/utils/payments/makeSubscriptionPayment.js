import initializeRazorpay from "./initializeRazorpay";
import url from "../url";

const makeSubscriptionPayment = async (details, setLoading,setDataFormVisible, successUrl, plan_id, product) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }


  // Make API call to the serverless API
  const data = await fetch("/api/razorpay/subscription", {
    method: "POST",
    body: JSON.stringify({
        product: product,
        plan_id: plan_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
 }).then((t) =>
    t.json()
  );

  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Peepoye Network",
    subscription_id: data.id,
    description: "Thankyou for your payment",
    image: "/assets/images/logo.png",
    handler: function (response) {
      window.location.href = successUrl
    },
    prefill: {
      name: details.name,
      email: details.email,
      contact: details.phone,
    },
    notes: {
      product: data.notes,
      name: details.name,
      email: details.email,
      phone: details.phone,
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  setLoading(false);
  setDataFormVisible(false);
};

export default makeSubscriptionPayment;
