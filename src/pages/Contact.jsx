import React, { useState } from 'react';
import { HiOutlineMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import Layout from '../components/Layout';
const backendUrl = 'https://backend-qzdy.onrender.com';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    institutionName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent as JSON
    const formDataToSend = {
        fullName: formData.fullName,
        institutionName: formData.institutionName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
    };

    try {
        const response = await fetch(`${backendUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Set Content-Type to application/json
            },
            body: JSON.stringify(formDataToSend),  // Convert the data to JSON format
        });

        if (response.ok) {
            setSubmitStatus('Submitted successfully!');
            setFormData({
                fullName: '',
                institutionName: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
        } else {
            throw new Error('Submission failed.');
        }
    } catch (error) {
        setSubmitStatus('Error submitting form. Please try again.');
    }

    // Hide the popup after 3 seconds
    setTimeout(() => {
        setSubmitStatus('');
    }, 3000);
};

  
  return (
    <Layout>
      <div className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Contact Details and Embedded Google Map */}
        <div>
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h1>

          {/* Company Contact Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Company Contact Details</h2>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="flex items-center text-gray-700 mb-2">
                <HiOutlineMail className="mr-2 text-blue-600" />
                <strong>Email:</strong> smeduconsultant@gmail.com
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <HiPhone className="mr-2 text-blue-600" />
                <strong>Phone:</strong> +91 9597203784 / 9245664761
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <HiLocationMarker className="mr-2 text-blue-600" />
                <strong>Address:</strong> 123 Main St, Anytown, USA
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Location</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509174!2d144.95373631532055!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c09b3c9%3A0x5019f28d9f3bb3e!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1618313573585!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map Location"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="institutionName">Institution Name</label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="service">Select Service</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 appearance-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="naac">NAAC</option>
                  <option value="nba">NBA</option>
                  <option value="nirf">NIRF</option>
                  <option value="foreignAccreditation">Foreign Accreditation</option>
                  <option value="mockInspection">Mock Inspection</option>
                  <option value="academicAudit">Academic Audit</option>
                </select>
                <div className="absolute right-3 top-3 text-gray-600 pointer-events-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          {submitStatus && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {submitStatus}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
