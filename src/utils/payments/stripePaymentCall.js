import url from "../url"

const StripeapiCall = async (products,mode, success,cancel,setLoading, notes = "not define") => {
    const res = await fetch(`${url}/api/stripe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            products: products,
            mode: mode,
            success: success,
            cancel: cancel,
            notes: notes,
        })
    })
    const data = await res.json()
    setLoading(false)
    window.location.href = data.url
}

export default StripeapiCall;