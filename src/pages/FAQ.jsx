import { useState } from 'react';
import { Link } from 'react-router-dom';
import CallCTA from '../components/CallCTA';

const faqs = [
  {
    q: 'How can I find a care taker in Visakhapatnam?',
    a: 'Contact My Team Home Care by phone and explain your requirements, location, preferred schedule, and the type of care needed. We can discuss suitable options based on availability.',
  },
  {
    q: 'Do you provide patient care at home?',
    a: 'We help families enquire about caregiver support for patients at home. The available services depend on the patient\'s needs and the caregiver\'s qualifications.',
  },
  {
    q: 'Can I arrange care for my elderly parents?',
    a: 'Yes, you can enquire about elderly care arrangements for your parents or other senior family members. We will discuss the type of support required and confirm availability.',
  },
  {
    q: 'Do you provide care for bedridden patients?',
    a: 'You can contact us to discuss assistance for bedridden individuals, including personal care and daily living support, subject to the patient\'s requirements and staff suitability.',
  },
  {
    q: 'Do you provide 24-hour care takers?',
    a: 'Contact us to check whether 24-hour or live-in caregiver arrangements are available for your location and requirements.',
  },
  {
    q: 'Do you provide home nursing services?',
    a: 'You can enquire about home nursing services. Specific clinical duties must be performed by appropriately qualified nursing professionals, and availability should be confirmed before booking.',
  },
  {
    q: 'How much do home care services cost in Vizag?',
    a: 'The cost depends on the type of care, duration, caregiver qualifications, working hours, and individual requirements. Contact us for a quotation specific to your needs.',
  },
  {
    q: 'How quickly can I arrange a caregiver?',
    a: 'The start date depends on your location, care requirements, and caregiver availability. Contact us to discuss your preferred start date and we will do our best to assist.',
  },
  {
    q: 'Do you provide post-surgery care at home?',
    a: 'Yes, we can help families explore caregiver support during the recovery period after surgery, including daily activity assistance, meal support, and maintaining a comfortable environment.',
  },
  {
    q: 'Which areas of Visakhapatnam do you serve?',
    a: 'We serve customers across Visakhapatnam including MVP Colony, Madhurawada, Seethammadhara, Gajuwaka, NAD Junction, Dwaraka Nagar, Akkayyapalem, Pendurthi, Rushikonda, and more. Contact us to confirm availability in your locality.',
  },
  {
    q: 'Do you provide housekeeping and cooking assistance?',
    a: 'Yes, depending on staff availability and the agreed arrangement, we can help with household cleaning, tidying, and cooking assistance for families caring for a patient or elderly family member.',
  },
  {
    q: 'How do I contact My Team Home Care?',
    a: 'Call us at +91 7995677736 to discuss your requirements and check service availability. You can also reach us via WhatsApp on the same number.',
  },
];

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-teal-300 shadow-sm' : 'border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm md:text-base leading-snug ${isOpen ? 'text-teal-700' : 'text-gray-800'}`}>{q}</span>
        <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 bg-teal-50 border-t border-teal-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

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
              <span className="text-white">FAQs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              Answers to the most common questions about our home care services in Visakhapatnam.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-500 mb-7">
            Can't find the answer you're looking for? Call us directly and we'll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917995677736" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 7995677736
            </a>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <CallCTA />
    </div>
  );
}
