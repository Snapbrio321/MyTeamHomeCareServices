import { Link } from 'react-router-dom';
import CallCTA from '../components/CallCTA';

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Dignity',
    desc: 'Every individual deserves to be treated with the utmost dignity and respect, regardless of their condition.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Kindness',
    desc: 'We approach every care situation with genuine warmth, patience, and compassionate support.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Responsibility',
    desc: 'We are accountable to families and ensure care arrangements are handled with professionalism and care.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Transparency',
    desc: 'We communicate clearly with families about services, responsibilities, and any care-related concerns.',
  },
];

const whyPoints = [
  'Caregiver support based on individual requirements',
  'Assistance for elderly people and patients',
  'Flexible care arrangements according to availability',
  'Support for daily living activities',
  'Convenient enquiry and service coordination',
  'A focus on dignity, comfort, and family peace of mind',
];

export default function About() {
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
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About My Team Home Care</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              Dedicated to providing dependable home care support for families in Visakhapatnam since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Trusted Home Care in Visakhapatnam</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  My Team Home Care is dedicated to providing dependable home care support for families in Visakhapatnam. We understand that caring for an elderly family member or a patient can be challenging, especially when family members have work and other responsibilities.
                </p>
                <p>
                  We help families find caregivers who can assist with personal care, daily activities, mobility support, companionship, and other agreed care requirements.
                </p>
                <p>
                  We believe that every individual deserves to be treated with dignity, kindness, patience, and respect. Our approach focuses on understanding each family's needs and helping them find suitable care at home.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:+917995254999" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Today
                </a>
                <Link to="/services" className="btn-outline">View Our Services</Link>
              </div>
            </div>

            {/* Stats / highlights */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: '8+', label: 'Types of Home Care Services' },
                { num: '24/7', label: 'Enquiry Support Available' },
                { num: 'Vizag', label: 'Serving All of Visakhapatnam' },
                { num: '100%', label: 'Focus on Family Satisfaction' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-teal-50 border border-teal-100 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-teal-600 mb-1">{num}</p>
                  <p className="text-gray-600 text-sm font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To make home care services more accessible to families by providing dependable caregiver support with compassion, respect, and responsibility.
              </p>
            </div>
            <div className="card border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To become a trusted home care service provider in Visakhapatnam by focusing on customer satisfaction, responsible service, and long-term relationships with families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Core Values</span>
            <h2 className="section-title mt-2">The Principles That Guide Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2">Why Families Choose My Team Home Care</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallCTA title="Ready to Arrange Care for Your Family?" subtitle="Call us today to discuss your requirements and find the right caregiver." />
    </div>
  );
}
