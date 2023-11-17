'use client'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

export default function DynamicForm({ animation = true, closeFunc = false, goal, formtype, keyList, meta }) {
  const router = useRouter();
  const { ref, inView } = useInView();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const cityRef = useRef(null);
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [income, setIncome] = React.useState("");
  const goalRef = useRef(null);
  const [isYoutube, setIsYoutube] = React.useState(false);
  const youtubeLinkRef = useRef(null);
  const [isExistingCustomer, setIsExistingCustomer] = React.useState(false);
  const [productList, setProductList] = React.useState([]);
  const [formVisible, setFormVisible] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(false);
    const first_name = firstNameRef.current.value;
    const email = emailRef.current.value;
    const listkey = keyList === 'black' ? '3z609acd7b211488f42b755998926f0215f8c4dc75bd861a6ed25977f0580933da' : keyList === 'green' ? '3z609acd7b211488f42b755998926f021536250480f4c22e5c504c0406e955d694' : '';

    let data = {
      listkey,
      email,
      first_name,
      last_name: lastNameRef.current.value,
      phone: phoneRef.current.value,
      city: cityRef.current.value,
      age,
      gender,
      occupation,
      income,
    }
    if (isYoutube === 'Yes') {
      data['youtubeLink'] = youtubeLinkRef.current.value;
    }
    if (isExistingCustomer === 'Yes') {
      data['productList'] = productList;
    }
    data[meta] = goalRef.current.value;
    axios.post('https://peepoye-user-database.onrender.com/add_contact', data)
    if (closeFunc) {
      setTimeout(() => {
        closeFunc(false);
      }, 2000);
    }
    // router.push('/guide-x?product=mentorship');
  }

  const agegroup = ['below 18 years', '18-25 years', '26-40 years', 'more than 40 years']
  const gendergroup = ['Male', 'Female', 'Others']
  const occupationgroup = ['Student', 'Working Professional', 'Business Owner', 'Other']
  const incomegroup = ['Below 1000 USD', '1000-5000 USD', '5000-10000 USD', '10000-50000 USD', 'Above 50000 USD']
  const youtubeLinkgroup = ['Yes', 'No']
  const existingCustomergroup = ['Yes', 'No']
  const productListgroup = ['Accelerator', 'Guide X', 'Influencer Guide']

  const variants1 = {
    hidden: {
      opacity: 0,
      x: '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'easeInOut',
        duration: 1
      }
    }
  }

  const variants2 = {
    hidden: {
      opacity: 0,
      y: '100%'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  }

  return (
    <div ref={ref} className="flex flex-col flex-1 w-full overflow-hidden">
      <AnimatePresence>
        {
          formVisible ?
            <motion.form
              variants={animation ? variants1 : ''}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-5 max-h-[60vh] px-2 overflow-y-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-1 w-full">
                <input ref={firstNameRef} type="text" name="first_name" id="firstName" className="border-2 flex-1 border-neutral-400 rounded-lg p-2" placeholder="First Name" required />
                <input ref={lastNameRef} type="text" name="last_name" id="lastName" className="border-2 flex-1 border-neutral-400 rounded-lg p-2" placeholder="Last Name" required />
              </div>
              <div className="flex flex-col gap-1">
                <input ref={emailRef} type="email" name="email" id="email" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Email' required />
              </div>
              <div className="flex flex-col gap-1">
                <input ref={phoneRef} type="tel" name="phone" id="phone" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Phone' required />
              </div>
              <div className="flex flex-col gap-1">
                <input ref={cityRef} type="text" name="city" id="city" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='City' required />
              </div>
              <div className="flex flex-col gap-1">
                <select name="age" id="age" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Age' required onChange={(e) => setAge(e.target.value)}>
                  <option value="" disabled selected>Age</option>
                  {agegroup.map((age, index) => (
                    <option key={index} value={age}>{age}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <select name="gender" id='gender' className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Gender' required onChange={(e) => setGender(e.target.value)}>
                  <option value="" disabled selected>Gender</option>
                  {
                    gendergroup.map((gender, index) => (
                      <option key={index} value={gender}>{gender}</option>
                    ))
                  }
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <select name="occupation" id="occupation" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Occupation' required onChange={(e) => setOccupation(e.target.value)}>
                  <option value="" disabled selected>Occupation</option>
                  {occupationgroup.map((occupation, index) => (
                    <option key={index} value={occupation}>{occupation}</option>
                  ))}
                </select>
                {
                  (occupation === 'Other' || (occupationgroup.includes(occupation) === false && occupation !== ''))
                  &&
                  <input type="text" name="occupation" id="occupation" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Occupation' required onChange={(e) => setOccupation(e.target.value)} />
                }
              </div>
              <div className="flex flex-col gap-1">
                <select name='income' id='income' className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Income' required onChange={(e) => setIncome(e.target.value)}>
                  <option value="" disabled selected>Income</option>
                  {incomegroup.map((income, index) => (
                    <option key={index} value={income}>{income}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <input ref={goalRef} type="text" name="goal" id="goal" className="border-2 border-neutral-400 rounded-lg p-2" placeholder={`What's your #1 Goal for joining the ${goal}?`} required />
              </div>
              <div className="flex flex-col gap-1">
                <select name="isYoutube" id="isYoutube" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Do you have a Youtube Channel?' required onChange={(e) => setIsYoutube(e.target.value)}>
                  <option value="" disabled selected>Do you have a Youtube Channel?</option>
                  {youtubeLinkgroup.map((youtubeLink, index) => (
                    <option key={index} value={youtubeLink}>{youtubeLink}</option>
                  ))}
                </select>
              </div>
              {
                isYoutube === 'Yes' &&
                <div className="flex flex-col gap-1">
                  <input ref={youtubeLinkRef} type="url" name="youtubeLink" id="youtubeLink" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Youtube Channel Link' required />
                </div>
              }
              <div className="flex flex-col gap-1">
                <select name="isExistingCustomer" id="isExistingCustomer" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Are you an existing customer?' required onChange={(e) => setIsExistingCustomer(e.target.value)}>
                  <option value="" disabled selected>Are you an existing customer?</option>
                  {existingCustomergroup.map((existingCustomer, index) => (
                    <option key={index} value={existingCustomer}>{existingCustomer}</option>
                  ))}
                </select>
              </div>
              {
                isExistingCustomer === 'Yes' &&
                <div className="flex flex-col gap-1">
                  {
                    productListgroup.map((product, index) => (
                      <div key={index} className="flex flex-row items-center gap-1">
                        <input type="checkbox" name="product" id={product} value={product} className="border-2 border-neutral-400 rounded-lg p-2" onChange={(e) => {
                          if (e.target.checked) {
                            setProductList([...productList, e.target.value])
                          } else {
                            setProductList(productList.filter((item) => item !== e.target.value))
                          }
                        }} />
                        <label htmlFor={product} className="text-base md:text-lg font-normal text-left text-neutral-800">{product}</label>
                      </div>
                    ))
                  }
                </div>
              }
              <div className='flex flex-row w-full justify-center gap-1'>
                <input type='checkbox' required name='privacy' />
                <p className='text-xs md:text-sm font-normal text-left text-neutral-800'>I agree to Peepoye Network's <a href='/privacy-policy' className='text-blue-500 hover:underline' target='_blank' rel='noreferrer'>Privacy Policy</a></p>
              </div>
              <div className="flex flex-col gap-1">
                <button type="submit" className="text-base md:text-lg text-center bg-neutral-600 text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">YES! I&apos;M IN!</button>
              </div>
            </motion.form> :
            <motion.div
              variants={animation ? variants2 : ''}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 bg-stone-200 p-2 rounded-lg">
                <p className="text-base md:text-lg text-center text-neutral-600">Thank you for joining the waitlist. You will receive an email from us shortly.</p>
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
