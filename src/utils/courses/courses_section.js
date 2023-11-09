const data = [ {
    name: 'White Membership',
    image: {
      src: '/assets/images/courses/white_membership.png',
      alt: 'White Membership',
    },
    currency: '₹',
    price: '14,999',
    type: 'One-Time Fee',
    features: [
      'Align passion with niche for success',
      'Copy+paste strategy for YouTube growth',
      'Establish online authority',
      'Create own product for revenue boost',
      'Generate organic leads for business',
    ],
    active: true,
    button: {
      text: 'Read More',
      link: 'https://akassh.co/accelerator-prebook'
  },
  },
  {
    name: 'Green Membership',
    image: {
      src: '/assets/images/courses/green_membership.png',
      alt: 'Green Membership',
    },
    currency: '₹',
    price: '49,999',
    type: 'One-Time Fee',
    features: [
      'Everything in White Membership +',
      'Hackathons and Live Sessions' ,
      'Setup Challenge',
    ],
    active: false,
    button: {
      text: 'Comming Soon',
      link: ''
  },
  },
 {
    name: 'Black Membership',
    image: {
      src: '/assets/images/courses/black_membership.png',
      alt: 'Black Membership',
    },
    currency: '₹',
    price: '2,99,999',
    type: 'Annual Subscription',
    features: [
      'Everything in Green Membership +',
      'Partner Program',
      'Silver button challenge',
      'Youtube Algorithm mastery',
      'Weekly mastermind session',
      'Seperate exclusive community',
    ],
    active: false,
    button: {
      text: 'Comming Soon',
      link: ''
  },
  },
]

export default data;
