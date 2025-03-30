import React, { forwardRef, useState } from 'react'
import sendEmail from '../../stores/email.store';
import FormItem from '../landingPage/FormItem';
import { useNotification } from '../Notification.context';

const Contact = forwardRef(({ ...props}, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const showNotification = useNotification();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await sendEmail(formData);
    showNotification(response.success ? "Message sent successfully!" : response.error, response.success ? "success" : "error");
    
    if(response.success) 
      setFormData({ name: '', email: '', subject: '', message: '' });

    setLoading(false);
  };

  return (
    <div ref={ref}>
      
      <form onSubmit={handleSubmit} className="max-w-lg mt-10 mx-auto bg-white p-6 rounded-3xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Contact Us</h2>

        <FormItem htmlFor="name" name="name" value={formData.name} onChange={handleChange} />
        <FormItem htmlFor="email" name="email" value={formData.email} onChange={handleChange} />
        <FormItem htmlFor="subject" name="subject" value={formData.subject} onChange={handleChange} />
        <FormItem htmlFor="message" name="message" value={formData.message} onChange={handleChange} largeArena={true} />

        <button
          type="submit" 
          disabled={loading}
          className={`w-full py-3 text-lg font-medium text-white rounded-lg transition-all duration-300 hover:cursor-pointer
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

    </div>
  );
})

export default Contact