import { useState } from 'react';
import { Link } from 'react-router-dom';

const serviceOptions = [
  'Care Taker Services',
  'Patient Care',
  'Elderly Care',
  'Bedridden Patient Care',
  'Home Nursing Services',
  'Post-Surgery Care',
  'Housekeeping Assistance',
  'Cooking Assistance',
  'Other / Not Sure',
];

const areas = [
  'MVP Colony', 'Madhurawada', 'Seethammadhara', 'Gajuwaka',
  'NAD Junction', 'Dwaraka Nagar', 'Akkayyapalem', 'Pendurthi',
  'Rushikonda', 'Other Area in Vizag',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', area: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a WhatsApp message with the form details
    const msg = `Hello My Team Home Care,\n\nName: ${form.name}\nPhone: ${form.phone}\nService Required: ${form.service}\nArea: ${form.area}\nMessage: ${form.message}\n\nPlease get in touch with me.`;
    const url = `https://wa.me/917995254999?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="pt-16 md:pt-20">

      {/* Page Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-teal-200 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact My Team Home Care</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              Looking for home care services in Visakhapatnam? We are here to discuss your requirements and help you find the right caregiver.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The fastest way to arrange care is to call us directly. We can discuss your requirements, confirm availability, and answer any questions.
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+917995254999"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">Call Us</p>
                  <p className="font-bold text-gray-900 text-lg">+91 7995254999</p>
                  <p className="text-xs text-gray-400 mt-0.5">Available for enquiries</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917995254999?text=Hello%2C%20I%20need%20home%20care%20services%20in%20Visakhapatnam."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">WhatsApp</p>
                  <p className="font-bold text-gray-900 text-lg">+91 7995254999</p>
                  <p className="text-xs text-gray-400 mt-0.5">Message us anytime</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">Location</p>
                  <p className="font-bold text-gray-900">Visakhapatnam (Vizag)</p>
                  <p className="text-xs text-gray-400 mt-0.5">Andhra Pradesh, India</p>
                </div>
              </div>

              {/* Services */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">Services We Can Help With</h3>
                <div className="flex flex-wrap gap-2">
                  {['Care Taker', 'Patient Care', 'Elderly Care', 'Bedridden Care', 'Home Nursing', 'Post-Surgery', 'Housekeeping', 'Cooking'].map((s) => (
                    <span key={s} className="text-xs bg-white border border-teal-200 text-teal-700 px-2.5 py-1 rounded-full font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Sent via WhatsApp!</h3>
                    <p className="text-gray-500 text-sm mb-6">Your details have been sent. We will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-5 py-2.5">Send Another Enquiry</button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Send an Enquiry</h2>
                    <p className="text-gray-500 text-sm mb-6">Fill in the form and we'll reach out to discuss your care requirements.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name <span className="text-red-500">*</span></label>
                          <input
                            id="name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="e.g. Ramesh Kumar"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                          <input
                            id="phone" name="phone" type="tel" required
                            value={form.phone} onChange={handleChange}
                            placeholder="e.g. +91 9XXXXXXXXX"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                          <select
                            id="service" name="service"
                            value={form.service} onChange={handleChange}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                          >
                            <option value="">Select a service…</option>
                            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1.5">Your Area in Vizag</label>
                          <select
                            id="area" name="area"
                            value={form.area} onChange={handleChange}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                          >
                            <option value="">Select your area…</option>
                            {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message / Requirements</label>
                        <textarea
                          id="message" name="message" rows={4}
                          value={form.message} onChange={handleChange}
                          placeholder="Tell us about the patient, preferred timings, duration of care needed, and any other details…"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                        />
                      </div>
                      <button type="submit" className="w-full btn-primary text-base py-3.5 justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Send via WhatsApp
                      </button>
                      <p className="text-xs text-gray-400 text-center">
                        Or call us directly at{' '}
                        <a href="tel:+917995254999" className="text-teal-600 font-semibold hover:underline">+91 7995254999</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
