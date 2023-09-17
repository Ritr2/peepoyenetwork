const data = [
  {
    product: 'guide-brb-1',
    query: {
      message: "CONGRATULATIONS ON YOUR PURCHASE! BUT HOLD ON, WE HAVE AN <strong>EXCLUSIVE ADDITIONAL</strong> OFFER JUST FOR YOU!",
      levelPercentage: 50,
    },
    yes: {
      query: 'thankyou',
      product: 'guide-brb-2',
    },
    no: {
      query: 'thankyou',
      product: 'guide-brb-1',
    },
  },
  {
    product: 'guide-x',
    query: {
      message: "CONGRATULATIONS ON YOUR PURCHASE! BUT HOLD ON, WE HAVE AN <strong>EXCLUSIVE ADDITIONAL</strong> OFFER JUST FOR YOU!",
      levelPercentage: 50,
    },
    yes: {
      query: 'thankyou',
      product: 'guide-x-2',
    },
    no: {
      query: 'thankyou',
      product: 'guide-x',
    },
  }
]

export default data;


