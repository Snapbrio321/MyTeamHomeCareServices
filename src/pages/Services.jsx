import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CallCTA from '../components/CallCTA';

const services = [
  {
    id: 'caretaker',
    letter: 'A',
    title: 'Care Taker Services',
    tagline: 'Looking for a Care Taker in Visakhapatnam?',
    summary: 'We help families find caregivers to assist individuals who need support at home or in other agreed care settings.',
    points: [
      'Helping with daily activities',
      'Assisting with walking and mobility',
      'Providing companionship',
      'Helping with personal hygiene, as agreed',
      'Supporting daily routines',
      'Informing family members about care-related concerns',
    ],
    note: 'Care arrangements depend on the individual\'s needs and the caregiver\'s qualifications.',
    color: 'teal',
  },
  {
    id: 'patient',
    letter: 'B',
    title: 'Patient Care Services',
    tagline: 'Care and Support During Illness or Recovery',
    summary: 'We help families arrange assistance for individuals who need additional support during illness, recovery, or daily living.',
    points: [
      'Support with daily activities',
      'Help with moving around safely',
      'Assistance with personal care',
      'Companionship and emotional support',
      'Help following family-provided daily routines',
      'Coordination with family members',
    ],
    note: 'Medical procedures and clinical duties must be performed by appropriately qualified healthcare professionals.',
    color: 'blue',
  },
  {
    id: 'elderly',
    letter: 'C',
    title: 'Elderly Care Services',
    tagline: 'Compassionate Care for Senior Citizens',
    summary: 'My Team Home Care helps families explore care arrangements for elderly parents and other senior family members.',
    points: [
      'Assistance with bathing and dressing, where agreed',
      'Help with walking and mobility',
      'Assistance with meals',
      'Companionship and conversation',
      'Support with daily routines',
      'General supervision and family communication',
    ],
    note: 'Our aim is to help older adults maintain comfort, dignity, and independence wherever possible.',
    color: 'purple',
  },
  {
    id: 'bedridden',
    letter: 'D',
    title: 'Bedridden Patient Care',
    tagline: 'Care Support for Bedridden Patients',
    summary: 'Bedridden individuals may need regular assistance with personal hygiene, movement, feeding support, and everyday comfort.',
    points: [
      'Assistance with personal hygiene',
      'Help with repositioning, when the caregiver is trained',
      'Assistance with meals and hydration',
      'Support with basic daily activities',
      'Keeping the immediate care area clean and comfortable',
      'Informing family members about changes in condition',
    ],
    note: 'Specialized nursing procedures, wound care, catheter care, and other clinical services require appropriately qualified professionals.',
    color: 'orange',
  },
  {
    id: 'nursing',
    letter: 'E',
    title: 'Home Nursing Services',
    tagline: 'Home Nursing Support in Vizag',
    summary: 'My Team Home Care can help families enquire about suitable home nursing arrangements, subject to availability of appropriately qualified nursing professionals.',
    points: [
      'Clinical assessment and nursing support',
      'Monitoring of vital signs',
      'Post-hospitalisation nursing care',
      'Assistance with prescribed treatment plans',
      'Other nursing procedures within the professional\'s scope of practice',
    ],
    note: 'The availability of specific nursing services should be confirmed before booking.',
    color: 'red',
  },
  {
    id: 'surgery',
    letter: 'F',
    title: 'Post-Surgery Care',
    tagline: 'Recovery Support at Home',
    summary: 'Recovering after surgery can be easier when suitable assistance is available at home. We help families explore caregiver support during the recovery period.',
    points: [
      'Assistance with daily activities',
      'Help moving around as advised by healthcare professionals',
      'Meal assistance',
      'Personal care support',
      'Companionship',
      'Help maintaining a comfortable recovery environment',
    ],
    note: 'Clinical monitoring, dressing changes, and medical procedures must be handled by qualified professionals when required.',
    color: 'green',
  },
  {
    id: 'housekeeping',
    letter: 'G',
    title: 'Housekeeping Assistance',
    tagline: 'Household Support for Families',
    summary: 'Families may also need assistance with routine household tasks while caring for a patient or an elderly family member.',
    points: [
      'Basic household cleaning',
      'General tidying',
      'Maintaining a clean living area',
      'Other agreed household tasks',
    ],
    note: 'Housekeeping availability and scope depend on staff availability and the agreed arrangement.',
    color: 'indigo',
  },
  {
    id: 'cooking',
    letter: 'H',
    title: 'Cooking Assistance',
    tagline: 'Daily Cooking Support',
    summary: 'We can help families enquire about suitable household assistance for preparing everyday meals.',
    points: [
      'Preparation of daily meals',
      'Assistance with meal planning as required',
      'Cooking according to dietary needs',
      'Other agreed cooking support',
    ],
    note: 'Cooking arrangements can be discussed according to household requirements, food preferences, and staff availability.',
    color: 'yellow',
  },
];

const colorMap = {
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   badge: 'bg-teal-100 text-teal-700',   border: 'border-teal-200',  dot: 'bg-teal-500'  },
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   border: 'border-blue-200',  dot: 'bg-blue-500'  },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' },
  red:    { bg: 'bg-red-50',    text: 'text-red-600',    badge: 'bg-red-100 text-red-700',    border: 'border-red-200',   dot: 'bg-red-500'   },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  badge: 'bg-green-100 text-green-700',  border: 'border-green-200', dot: 'bg-green-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800', border: 'border-yellow-200', dot: 'bg-yellow-500' },
};

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for page render then scroll with offset for sticky nav
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const offset = 140; // navbar (80px) + sticky pill nav (~60px)
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

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
              <span className="text-white">Our Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Home Care Services in Visakhapatnam</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              My Team Home Care offers a range of caregiver and support services to meet the needs of individuals and families in Vizag.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map(({ id, title, color }) => {
              const c = colorMap[color];
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${c.badge} ${c.border} border`}
                >
                  {title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {services.map(({ id, letter, title, tagline, summary, points, note, color }) => {
          const c = colorMap[color];
          return (
            <section key={id} id={id} className="scroll-mt-44">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`${c.bg} px-6 md:px-10 py-6 border-b ${c.border} flex items-center gap-4`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold text-white shrink-0`}
                    style={{ background: 'var(--dot-color)' }}
                  >
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-extrabold ${c.badge}`}>{letter}</span>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${c.text} mb-0.5`}>{tagline}</p>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
                  </div>
                </div>
                <div className="px-6 md:px-10 py-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{summary}</p>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">What's Included</h3>
                  <ul className="grid sm:grid-cols-2 gap-2.5 mb-6">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className={`w-2 h-2 ${c.dot} rounded-full mt-1.5 shrink-0`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className={`${c.bg} border ${c.border} rounded-lg px-4 py-3 flex gap-3 items-start`}>
                    <svg className={`w-4 h-4 ${c.text} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-gray-600 leading-relaxed">{note}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CallCTA title="Enquire About Our Services Today" subtitle="Contact us to discuss availability, charges, and the right care plan for your family." />
    </div>
  );
}
