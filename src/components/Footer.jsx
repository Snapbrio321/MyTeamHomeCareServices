import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/faq',      label: 'FAQs' },
  { to: '/contact',  label: 'Contact Us' },
];

const services = [
  { label: 'Care Taker Services',      anchor: 'caretaker'   },
  { label: 'Patient Care',             anchor: 'patient'     },
  { label: 'Elderly Care',             anchor: 'elderly'     },
  { label: 'Bedridden Patient Care',   anchor: 'bedridden'   },
  { label: 'Home Nursing Services',    anchor: 'nursing'     },
  { label: 'Post-Surgery Care',        anchor: 'surgery'     },
  { label: 'Housekeeping Assistance',  anchor: 'housekeeping'},
  { label: 'Cooking Assistance',       anchor: 'cooking'     },
];

const areas = [
  'MVP Colony', 'Madhurawada', 'Seethammadhara',
  'Gajuwaka', 'NAD Junction', 'Dwaraka Nagar',
  'Akkayyapalem', 'Pendurthi', 'Rushikonda',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="My Team Home Care Services logo"
                className="w-14 h-14 object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
              <div>
                <p className="font-bold text-white text-sm">My Team Home Care Services</p>
                <p className="text-xs text-teal-400">Visakhapatnam</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Providing caregiver support and helping families explore suitable home care arrangements in Vizag.
            </p>
            <a
              href="tel:+917995254999"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 7995254999
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map(({ label, anchor }) => (
                <li key={label}>
                  <Link
                    to={`/services#${anchor}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact & Areas</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917995254999" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  +91 7995254999
                </a>
              </div>
            </div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Areas We Serve</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              {areas.join(' · ')} · and more areas in Vizag
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} My Team Home Care. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 text-center sm:text-right">
            All services are subject to availability, agreed terms, and applicable professional qualifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
