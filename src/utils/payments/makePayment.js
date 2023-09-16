import initializeRazorpay from "./initializeRazorpay";
import url from "../url";

const makePayment = async (details, setLoading,setDataFormVisible, successUrl, amount) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }


  // Make API call to the serverless API
  const data = await fetch("/api/razorpay", {
    method: "POST",
    body: JSON.stringify({
        product: amount,
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
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
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

export default makePayment;
