const enquiryformData = {
  title: 'Let us Make your experience for this website customized!!',
  questions: {
    reason: {
      question: 'What is your reason for visiting?',
      options: {
        1: {
          value: 'Just exploring',
          next: false,
          transferLink: {
            name: 'Blogs',
            link: '/blogs',
            text: `You should check out our blog section; you'll find some great content there.`,
            send: false,
          }
        },
        2: {
          value: 'To grow my YouTube channel',
          next: 'prefer',
          transferLink: false,
        },
        3: {
          value: 'To start a YouTube channel',
          next: 'data',
          transferLink: {
            name: 'Youtubeneur Community',
            link: 'https://www.skool.com/youtubeneur',
            text: `You are eligible for the Youtubeneur Membership Program, where you'll learn how to grow your YouTube channel and gain access to all the tools and resources you need for its expansion.`,
            send: true,
          }
        },
        4: {
          value: 'To generate business leads using YouTube organically',
          next: 'youtube',
          transferLink: false,
        },
        5: {
          value: 'To learn for my personal and career growth',
          next: false,
          transferLink: {
            name: 'Mentoring Program',
            link: '/mentoring',
            text: `You should join our mentoring program to learn and grow in your career.`,
            send: false,
          }
        },
        6: {
          value: 'Help & Support',
          next: false,
          transferLink: {
            name: 'Help & Support',
            link: '/help',
            text: false,
            send: false,
          }
        },
        7: {
          value: 'feedback',
          next: false,
          transferLink: {
            name: 'Feedback',
            link: 'https://forms.gle/PWC1qQUapniuQju68',
            text: false,
            send: false,
          }
        },
      },
    },
    youtube: {
      question: 'Do you have a YouTube channel?',
      options: {
        1: {
          value: 'yes',
          next: 'prefer',
          transferLink: false,
        },
        2: {
          value: 'no',
          next: 'data',
          transferLink: {
            name: 'Youtubeneur Community',
            link: 'https://www.skool.com/youtubeneur',
            text: `You are eligible for the Youtubeneur Membership Program, where you'll learn how to grow your YouTube channel and gain access to all the tools and resources you need for its expansion.`,
            send: true,
          }
        },
      },
    },
    prefer: {
      question: 'What do you prefer?',
      options: {
        1: {
          value: 'I want to learn how to do YouTube on my own',
          next: 'data',
          transferLink: {
            name: 'Youtubeneur Community',
            link: 'https://www.skool.com/youtubeneur',
            text: `You are eligible for the Youtubeneur Membership Program, where you'll learn how to grow your YouTube channel and gain access to all the tools and resources you need for its expansion.`,
            send: true,
          }
        },
        2: {
          value: 'I want help regarding YouTube growth services',
          next: 'data',
          transferLink: {
            name: 'DFY- Content Service',
            link: 'https://akassh.co/dfy-yt',
            text: `You are eligible for the DFY Youtube Growth Service, where you'll get all the help you need to grow your YouTube channel.`,
            send: true,
          }
        },
      },
    },
    data: {
      question: 'Please fill the form below',
      inputs: {
        name: {
          type: 'text',
          name: 'first_name',
          placeholder: 'First Name',
          required: true,
        },
        email: {
          type: 'email',
          name: 'email',
          placeholder: 'Email',
          required: true,
        },
      },
    },
  }
}

export const enquiryformDataLead = {
  title: 'Let us help you customize your YouTube growth!',
  questions: {
    reason: {
      question: 'What is the main goal for your YouTube channel?',
      options: {
        1: {
          value: 'To generate business leads organically using YouTube',
          next: 'prefer',
          transferLink: false,
        },
        2: {
          value: 'Creating YouTube content as a hobby',
          next: 'work',
          transferLink: false,
        },
        3: {
          value: 'Building influence',
          next: 'work',
          transferLink: false,
        },
        4: {
          value: 'Creating a revenue stream',
          next: 'work',
          transferLink: false,
        }
      },
    },
    work: {
      question: 'What is your occupation?',
      options: {
        1: {
          value: 'Working Professional',
          next: 'prefer',
          transferLink: false,
        },
        2: {
          value: 'Founder/Entrepreneur',
          next: 'prefer',
          transferLink: false,
        },
        3: {
          value: 'Student',
          next: 'data',
          transferLink: {
            name: 'Youtubeneur Community',
            link: 'https://www.skool.com/youtubeneur',
            text: `You are eligible for the Youtubeneur Membership Program, where you'll learn how to grow your YouTube channel and gain access to all the tools and resources you need for its expansion.`,
            send: true,
          }
        },
      },
    },
    prefer: {
      question: 'What do you prefer?',
      options: {
        1: {
          value: 'I want to learn how to do YouTube on my own',
          next: 'data',
          transferLink: {
            name: 'Youtubeneur Community',
            link: 'https://www.skool.com/youtubeneur',
            text: `You are eligible for the Youtubeneur Membership Program, where you'll learn how to grow your YouTube channel and gain access to all the tools and resources you need for its expansion.`,
            send: true,
          }
        },
        2: {
          value: 'I want help regarding YouTube growth services',
          next: 'data',
          transferLink: {
            name: 'DFY- Content Service',
            link: 'https://akassh.co/dfy-yt',
            text: `You are eligible for the DFY Youtube Growth Service, where you'll get all the help you need to grow your YouTube channel.`,
            send: true,
          }
        },
      },
    },
    data: {
      question: 'Please fill the form below',
      inputs: {
        name: {
          type: 'text',
          name: 'first_name',
          placeholder: 'First Name',
          required: true,
        },
        email: {
          type: 'email',
          name: 'email',
          placeholder: 'Email',
          required: true,
        },
      },
    },

  },
}

export default enquiryformData;
