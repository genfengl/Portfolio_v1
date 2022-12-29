import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const initialState = {
        user_name: '',
        user_email: '',
        message: ''
    }

    const [contactFields, setContactFields] = useState(initialState)
    const form = useRef();

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setContactFields({
            ...contactFields,
            [name]: value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7tiv1i1', 'template_swfzg0j', form.current, 'RXdkdlH9ShCHSWBh-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        setContactFields(initialState)
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full font-bold mt-6 p-8 gap-2 bg-inherit border-materialBlack border-0 shadow-2xl rounded-xl">
            <label>Name</label>
            <input type="text" name="user_name" value={contactFields.user_name} onChange={handleFormChange} placeholder="Enter your name" required
            className='rounded-md h-12 p-3 bg-slate-200' />
            <label>Email</label>
            <input type="email" name="user_email" value={contactFields.user_email} onChange={handleFormChange} placeholder="Enter your email" required
            className='rounded-md h-12 p-3 bg-slate-200' />
            <label>Message</label>
            <textarea name="message" value={contactFields.message} onChange={handleFormChange} placeholder="Enter your message" required
            className='rounded-md h-24 p-3 bg-slate-200' />
            <input type="submit" value="SUBMIT" 
            className='text-word font-bold rounded-md h-12 mt-6 p-1 bg-blue-500 transition-all hover:bg-blue-600 hover:scale-110 focus:scale-100
            sm:self-end sm:px-8 sm:shadow-xl' />
        </form>
    );
};

export default Email