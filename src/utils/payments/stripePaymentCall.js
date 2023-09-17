import url from "../url"

const StripeapiCall = async (products,mode, success,cancel) => {
    const res = await fetch(`${url}/api/stripe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            products: products,
            mode: mode,
            success: success,
            cancel: cancel
        })
    })
    const data = await res.json()
    window.location.href = data.url
}

export default StripeapiCall;