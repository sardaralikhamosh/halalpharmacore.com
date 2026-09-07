import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to your backend or email service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'info@halalpharmacore.com',
          subject: `New Contact Form Submission from ${formData.name}`,
          body: `
            Name: ${formData.name}
            Email: ${formData.email}
            Company: ${formData.company}
            Message: ${formData.message}
          `,
        }),
      });

      if (response.ok) {
        // Show success popup
        setPopupMessage('The form is successfully submitted, you will get a response within 24 hours.');
        setShowPopup(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });

        // Auto-hide popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Show error popup
      setPopupMessage('Something went wrong. Please try again later.');
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative: Using mailto for simple implementation without backend
  const handleMailToSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Message: ${formData.message}`
    );
    
    window.location.href = `mailto:info@halalpharmacore.com?subject=${subject}&body=${body}`;
    
    // Show confirmation popup
    setPopupMessage('The form is successfully submitted, you will get a response within 24 hours.');
    setShowPopup(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Let's Discuss Your Halal Pharmaceutical Needs
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our team of experts is ready to help you navigate the halal pharmaceutical market and achieve your certification goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                  <a href="mailto:info@halalpharmacore.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    info@halalpharmacore.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleMailToSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fadeIn">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 leading-relaxed">{popupMessage}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}