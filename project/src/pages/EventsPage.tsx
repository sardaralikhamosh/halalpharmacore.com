import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Global Halal Pharmaceutical Summit 2024',
    date: 'June 15-17, 2024',
    location: 'Kuala Lumpur, Malaysia',
    attendees: '2,000+ industry professionals',
    description: 'The largest gathering of halal pharmaceutical stakeholders featuring keynote speakers, panel discussions, and networking opportunities.',
    type: 'Conference',
    image: 'https://images.pexels.com/photos/3857051/pexels-photo-3857051.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Halal Certification Workshop',
    date: 'July 8-10, 2024',
    location: 'Dubai, UAE',
    attendees: '300+ participants',
    description: 'Intensive three-day workshop covering halal certification requirements, documentation, and best practices.',
    type: 'Workshop',
    image: 'https://images.pexels.com/photos/3808519/pexels-photo-3808519.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'APAC Pharmaceutical Regulations Seminar',
    date: 'August 5-6, 2024',
    location: 'Singapore',
    attendees: '500+ professionals',
    description: 'Expert-led seminar on navigating regulatory landscapes across Asia-Pacific markets.',
    type: 'Seminar',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Halal Manufacturing Expo',
    date: 'September 20-22, 2024',
    location: 'Istanbul, Turkey',
    attendees: '1,500+ visitors',
    description: 'Exhibition showcasing latest halal manufacturing technologies and solutions from leading providers.',
    type: 'Expo',
    image: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Market Access and Distribution Forum',
    date: 'October 12-13, 2024',
    location: 'Cairo, Egypt',
    attendees: '800+ professionals',
    description: 'Forum focused on market access strategies and distribution channel development in Middle East and Africa.',
    type: 'Forum',
    image: 'https://images.pexels.com/photos/3808509/pexels-photo-3808509.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Q4 Networking Gala',
    date: 'November 30, 2024',
    location: 'London, UK',
    attendees: '400+ executives',
    description: 'Exclusive networking event bringing together pharmaceutical executives and certification experts.',
    type: 'Networking',
    image: 'https://images.pexels.com/photos/3807515/pexels-photo-3807515.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function EventsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Industry Events</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-3 mb-4">
              Upcoming Events & Conferences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with industry leaders, learn about latest trends, and expand your network at our curated events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1 overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">Event {index + 1} of {events.length}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="text-emerald-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-semibold">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="text-emerald-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-semibold">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-emerald-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Expected Attendance</p>
                          <p className="font-semibold">{event.attendees}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="text-emerald-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Register Now</p>
                          <p className="font-semibold text-emerald-600 group-hover:text-emerald-700">Limited Spots</p>
                        </div>
                      </div>
                    </div>

                    <button className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Register for Event
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Can't find your event?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Subscribe to our event newsletter to receive updates about upcoming conferences, workshops, and networking opportunities in the halal pharmaceutical industry.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                  <button type="submit" className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold">
                    Subscribe to Events
                  </button>
                </form>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-12 text-center border border-emerald-200">
                <p className="text-5xl font-bold text-emerald-600 mb-2">12+</p>
                <p className="text-gray-700 font-semibold mb-8">Major Events Annually</p>
                <p className="text-gray-600 leading-relaxed">
                  We organize industry-leading events across major pharmaceutical hubs worldwide. Never miss an opportunity to connect and learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
