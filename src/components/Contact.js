import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'shopno8860@gmail.com',
      link: 'mailto:shopno8860@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '01610560204',
      link: 'tel:+8801610560204'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Sector-10, Uttara, Dhaka',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-md-4 mb-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-card">
                      <div className="contact-icon">
                        <i className={info.icon}></i>
                      </div>
                      <h4>{info.title}</h4>
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="col-md-8">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>
                    {submitStatus === 'success' && (
                      <div className="alert alert-success">
                        <i className="fas fa-check-circle"></i> Message sent successfully!
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="alert alert-danger">
                        <i className="fas fa-exclamation-circle"></i> Something went wrong. Please try again.
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

