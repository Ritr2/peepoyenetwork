import url from "@/utils/url";

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
    product: 'guide-brb-2',
    query: {
      message: "CONGRATULATIONS ON YOUR PURCHASE! BUT HOLD ON, WE HAVE AN <strong>EXCLUSIVE COMBO</strong> OFFER JUST FOR YOU!",
      levelPercentage: 50,
    },
    price: 170,
    yes_link: `${url}/accelerator-ind?product=guide-brb-3`,
    no_link: `${url}/thankyou?product=guide-brb-1`,
    amount: 'guide-x-brb',
    combo: true,
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
  },
  {
    product: 'mentorship',
    query: {
      message: "You have made a great decision! But hold on, we have an <strong>exclusive additional</strong> offer just for you!",
      levelPercentage: 50,
    },
    price: 170,
    yes_link: `${url}/accelerator-ind?product=guide-x`,
    no_link: `${url}/thankyou?product=mentorship`,
    amount: 'guide-x',
  },
  {
    product: 'guide-brb-3',
    query: {
      message: "CONGRATULATIONS ON YOUR PURCHASE! BUT HOLD ON, WE HAVE AN <strong>EXCLUSIVE ADDITIONAL</strong> OFFER JUST FOR YOU!",
      levelPercentage: 80,
    },
    yes: {
      query: 'thankyou',
      product: 'guide-brb-5',
    },
    no: {
      query: 'thankyou',
      product: 'guide-brb-4',
    },
  }
]

export default data;
