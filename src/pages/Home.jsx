import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallCTA from '../components/CallCTA';
import chairmanImg from '../assets/chairman.jpg';
import TypingEffect from '../components/TypingEffect';
import Lightbox from '../components/Lightbox';

import img1  from '../assets/1.webp';
import img3  from '../assets/3.webp';
import img4  from '../assets/4.webp';
import img5  from '../assets/5.webp';
import img7  from '../assets/7.webp';
import img8  from '../assets/8.webp';
import img9  from '../assets/9.webp';
import img10 from '../assets/10.webp';
import img11 from '../assets/11.webp';
import img12 from '../assets/12.webp';
import img14 from '../assets/14.webp';
import img15 from '../assets/15.webp';
import img16 from '../assets/16.webp';
import img17 from '../assets/17.webp';
import img19 from '../assets/19.webp';
import img20 from '../assets/20.webp';
import img21 from '../assets/21.webp';
import img23 from '../assets/23.webp';
import img24 from '../assets/24.webp';
import img25 from '../assets/25.webp';
import img26 from '../assets/26.webp';
import img27 from '../assets/27.webp';
import img28 from '../assets/28.webp';
import img29 from '../assets/29.webp';
import img30 from '../assets/30.webp';
import img31 from '../assets/31.webp';
import img34 from '../assets/34.webp';
import img36 from '../assets/36.webp';
import img37 from '../assets/37.webp';
import img38 from '../assets/38.webp';
import img39 from '../assets/39.webp';
import img40 from '../assets/40.webp';

const galleryImages = [
  { src: img1,  alt: 'Home care support in Visakhapatnam' },
  { src: img3,  alt: 'Patient care assistance at home' },
  { src: img4,  alt: 'Elderly care services in Vizag' },
  { src: img5,  alt: 'Caregiver with patient at home' },
  { src: img7,  alt: 'Post-surgery recovery support' },
  { src: img8,  alt: 'Home nursing services Vizag' },
  { src: img9,  alt: 'Bedridden patient care support' },
  { src: img10, alt: 'Daily living assistance at home' },
  { src: img11, alt: 'Compassionate elderly care' },
  { src: img12, alt: 'Family caregiver support' },
  { src: img14, alt: 'Professional home care Vizag' },
  { src: img15, alt: 'Trusted care services Visakhapatnam' },
  { src: img16, alt: 'Medical equipment at home' },
  { src: img17, alt: 'Home nursing assistance' },
  { src: img19, alt: 'Patient recovery at home' },
  { src: img20, alt: 'Caregiver support services' },
  { src: img21, alt: 'Elderly assistance at home' },
  { src: img23, alt: 'Home care in Vizag' },
  { src: img24, alt: 'Professional nursing care' },
  { src: img25, alt: 'Mobility assistance for patients' },
  { src: img26, alt: 'Daily care routines at home' },
  { src: img27, alt: 'Bedridden care Visakhapatnam' },
  { src: img28, alt: 'Patient support services' },
  { src: img29, alt: 'Home health care services' },
  { src: img30, alt: 'Caregiver and patient' },
  { src: img31, alt: 'Elderly care at home' },
  { src: img34, alt: 'Home care equipment' },
  { src: img36, alt: 'Post-surgery home care' },
  { src: img37, alt: 'Professional caregiver Vizag' },
  { src: img38, alt: 'Family home care support' },
  { src: img39, alt: 'Home nursing Visakhapatnam' },
  { src: img40, alt: 'Trusted caregivers in Vizag' },
];

const services = [
  {
    id: 'caretaker',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Care Taker Services',
    desc: 'Dedicated caregivers to assist with daily activities, mobility, personal hygiene, and companionship.',
  },
  {
    id: 'patient',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Patient Care Services',
    desc: 'Compassionate support for patients at home during illness, recovery, or ongoing daily living needs.',
  },
  {
    id: 'elderly',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Elderly Care Services',
    desc: 'Respectful assistance for senior citizens — bathing, dressing, meals, mobility, and companionship.',
  },
  {
    id: 'bedridden',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Bedridden Patient Care',
    desc: 'Specialised support for bedridden individuals — hygiene, repositioning, meals, and daily comfort.',
  },
  {
    id: 'nursing',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Home Nursing',
    desc: 'Professional nursing support at home after hospitalisation, surgery, or during ongoing treatment.',
  },
  {
    id: 'surgery',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Post-Surgery Care',
    desc: 'Recovery support at home including daily activity assistance, meal help, and a comfortable environment.',
  },
];

const reasons = [
  { title: 'Individual Requirements', desc: 'We discuss your specific needs to identify the most suitable care arrangement for your loved one.' },
  { title: 'Flexible Arrangements', desc: 'Ask about available timings, daily or live-in care, and other service options that suit your schedule.' },
  { title: 'Dignity & Respect', desc: 'We emphasise respectful assistance and consideration for each individual\'s comfort and privacy.' },
  { title: 'Family Communication', desc: 'Clear communication keeps families informed about the agreed services and allows concerns to be raised.' },
  { title: 'Care at Home', desc: 'Arrange suitable support in the familiar surroundings of your own home, where appropriate.' },
  { title: 'Convenient Enquiries', desc: 'Contact us by phone to discuss your requirements and available options — no complicated process.' },
];

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Call My Team Home Care and explain your care requirements.' },
  { num: '02', title: 'Discuss Your Needs', desc: 'Tell us about the patient, the type of assistance needed, preferred timings, and location.' },
  { num: '03', title: 'Confirm Availability', desc: 'We discuss suitable options, caregiver availability, charges, and the expected start date.' },
  { num: '04', title: 'Begin Care', desc: 'Once confirmed, the agreed caregiver support can begin at your home.' },
];

const areas = ['MVP Colony', 'Madhurawada', 'Seethammadhara', 'Gajuwaka', 'NAD Junction', 'Dwaraka Nagar', 'Akkayyapalem', 'Pendurthi', 'Rushikonda'];

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Safety: always restore scroll on mount
  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  const openLightbox  = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage     = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImage     = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);

  return (
    <div className="pt-16 md:pt-20">
      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-white/5 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px]">

            {/* Left — text */}
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                Visakhapatnam · Vizag
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Professional Home Care <br />
                <TypingEffect />
              </h1>
              <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8">
                My Team Home Care connects families in Visakhapatnam with reliable, compassionate caregivers for elderly individuals, patients, and anyone needing daily living support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+917995677736"
                  className="inline-flex items-center justify-center gap-3 bg-white text-teal-700 hover:bg-teal-50 font-bold px-7 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now — Free Enquiry
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-4 rounded-xl text-lg transition-all active:scale-95"
                >
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* trust badges */}
              <div className="mt-10 flex flex-wrap gap-5">
                {['Elderly Care', 'Patient Care', 'Bedridden Care', 'Home Nursing'].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-teal-100 text-sm">
                    <svg className="w-4 h-4 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — chairman image */}
            {/* Right — chairman image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative mt-8 mb-8">

                {/* Decorative background block */}
                <div className="absolute top-6 left-6 right-0 bottom-0 bg-white/10 rounded-2xl" />

                {/* Image */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ width: '380px', height: '460px' }}
                >
                  <img
                    src={chairmanImg}
                    alt="Narendra Kumar — Chairman, My Team Home Care Visakhapatnam"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />

                  {/* Dark gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pt-16 pb-5 px-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white font-bold text-lg leading-tight">Narendra Kumar</p>
                        <p className="text-teal-300 text-sm">Chairman</p>
                        <p className="text-white/70 text-xs">My Team Home Care</p>
                      </div>
                      <div className="bg-teal-500 rounded-lg px-3 py-1.5 text-center">
                        <p className="text-white font-bold text-sm leading-none">24×7</p>
                        <p className="text-teal-100 text-xs">Care</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl px-4 py-4 flex flex-col gap-3">
                  {[
                    { num: '8+', label: 'Services' },
                    { num: '24×7', label: 'Support' },
                    { num: 'Vizag', label: 'Based' },
                  ].map(({ num, label }) => (
                    <div key={label} className="text-center">
                      <p className="text-teal-600 font-extrabold text-base leading-none">{num}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* decorative bg circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Home Care Services in <span className="text-teal-600">Visakhapatnam</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              From elderly care to post-surgery recovery, we help families arrange the right caregiver support at home.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ id, icon, title, desc }, i) => {
              const colors = [
                { bg: 'bg-teal-500',   light: 'bg-teal-50',   text: 'text-teal-600',   border: 'hover:border-teal-400',   tag: 'bg-teal-100 text-teal-700'   },
                { bg: 'bg-blue-500',   light: 'bg-blue-50',   text: 'text-blue-600',   border: 'hover:border-blue-400',   tag: 'bg-blue-100 text-blue-700'   },
                { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'hover:border-purple-400', tag: 'bg-purple-100 text-purple-700' },
                { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'hover:border-orange-400', tag: 'bg-orange-100 text-orange-700' },
                { bg: 'bg-rose-500',   light: 'bg-rose-50',   text: 'text-rose-600',   border: 'hover:border-rose-400',   tag: 'bg-rose-100 text-rose-700'   },
                { bg: 'bg-green-500',  light: 'bg-green-50',  text: 'text-green-600',  border: 'hover:border-green-400',  tag: 'bg-green-100 text-green-700'  },
              ];
              const c = colors[i % colors.length];
              return (
                <Link
                  key={id}
                  to={`/services#${id}`}
                  className={`group relative bg-white rounded-2xl border-2 border-transparent ${c.border} shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden block`}
                >
                  {/* Top accent line */}
                  <div className={`h-1 w-full ${c.bg}`} />

                  <div className="p-7">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${c.light} ${c.text} rounded-2xl flex items-center justify-center mb-5 group-hover:${c.bg} group-hover:text-white transition-all duration-300 shadow-sm`}>
                      {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">{title}</h3>

                    {/* Desc */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>

                    {/* CTA */}
                    <div className={`inline-flex items-center gap-1.5 ${c.text} text-sm font-semibold group-hover:gap-3 transition-all duration-200`}>
                      View Details
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover bottom bar */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${c.bg} group-hover:w-full transition-all duration-500`} />
                </Link>
              );
            })}
          </div>

          {/* CTA button */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              See All 8 Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Families Trust Us</span>
              <h2 className="section-title mt-2">Your Family's Care Needs Matter to Us</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Choosing home care for a loved one is an important decision. We understand that families want dependable support, clear communication, and respectful treatment.
              </p>
              <a href="tel:+917995677736" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Free Enquiry
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="section-title mt-2">Getting Started Is Simple</h2>
            <p className="section-subtitle mx-auto">Four easy steps to arrange the right caregiver for your family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal-200 -translate-y-1/2 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }} />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-md">
                    {num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK & CLIENTS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Our Work &amp; Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Trusted by Families Across <span className="text-teal-600">Visakhapatnam</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A glimpse of our caregivers, equipment, and the care we provide to patients and families in Vizag.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {[
              { num: '500+', label: 'Families Served',  icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              )},
              { num: '8+',   label: 'Care Services',    icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              )},
              { num: '24×7', label: 'Emergency Support', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )},
              { num: '100%', label: 'Satisfaction',      icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              )},
            ].map(({ num, label, icon }) => (
              <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4 hover:shadow-md hover:border-teal-200 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900 leading-none">{num}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map(({ src, alt }, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-100 cursor-pointer ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold leading-snug">{alt}</p>
                </div>
                {/* Zoom icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md scale-75 group-hover:scale-100">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                {/* Featured badge */}
                {i === 0 && (
                  <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    Our Work
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View more CTA */}
          <div className="text-center mt-12">
            <a
              href="tel:+917995677736"
              className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Enquire About Our Services
            </a>
          </div>

        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Where We Operate</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">Serving Families Across Visakhapatnam</h2>
          <p className="text-gray-500 mb-8">Contact us to confirm service availability in your locality.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="bg-teal-50 text-teal-700 border border-teal-200 px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
            <span className="bg-gray-100 text-gray-500 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              + More areas in Vizag
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CallCTA />
    </div>
  );
}
