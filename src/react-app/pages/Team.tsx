import { Instagram, Youtube, User } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Garrett Reynolds',
    role: 'Pro Rider',
    bio: 'Multiple X Games gold medalist and one of the most decorated street riders in BMX history. Known for his technical prowess and consistent podium finishes.',
    image: 'https://cdn.shopify.com/s/files/1/0106/5356/4991/files/Garrett-Reynolds_Back_dubs-fakie-hardwhip.jpg?v=1565899094',
    instagram: 'garrettreynolds',
    youtube: '',
  },
  {
    id: 2,
    name: 'Lewis Mills',
    role: 'Pro Rider',
    bio: 'UK street riding phenomenon known for his creative approach and unique style. Pushing the boundaries of what\'s possible on a BMX.',
    image: 'https://cdn.shopify.com/s/files/1/0106/5356/4991/files/BY7U3561.jpg?v=1565900165',
    instagram: 'lewismills',
    youtube: '',
  },
  {
    id: 3,
    name: 'Antonio Chavez',
    role: 'Pro Rider',
    bio: 'Rising star in the BMX scene with an aggressive riding style and fearless approach to street obstacles.',
    image: 'https://cdn.shopify.com/s/files/1/0106/5356/4991/files/BY7U1262.jpg?v=1565898235',
    instagram: 'antoniochavez',
    youtube: '',
  },
  {
    id: 4,
    name: 'Matt Closson',
    role: 'Pro Rider',
    bio: 'Technical street rider known for his precision and consistency. A key member of the Fiend team.',
    image: 'https://cdn.shopify.com/s/files/1/0106/5356/4991/files/BY7U8741.jpg?v=1565898019',
    instagram: 'mattclosson',
    youtube: '',
  },
  {
    id: 5,
    name: 'Mati Lasgoity',
    role: 'Pro Rider',
    bio: 'International rider bringing a unique perspective and style to the Fiend team.',
    image: '',
    instagram: 'matilasgoity',
    youtube: '',
  },
  {
    id: 6,
    name: 'Ryan Niranonta',
    role: 'Pro Rider',
    bio: 'West coast street rider known for his smooth style and technical abilities.',
    image: '',
    instagram: 'ryanniranonta',
    youtube: '',
  },
  {
    id: 7,
    name: 'Kevin Vannauker',
    role: 'Pro Rider',
    bio: 'Talented rider and valued member of the Fiend BMX team.',
    image: '',
    instagram: '',
    youtube: '',
  },
  {
    id: 8,
    name: 'Augie Simoncini',
    role: 'Pro Rider',
    bio: 'Dynamic rider bringing energy and skill to the Fiend family.',
    image: 'https://cdn.shopify.com/s/files/1/0106/5356/4991/files/BY7U0954.jpg',
    instagram: 'augiesimoncini',
    youtube: '',
  },
  ];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              The Team
            </h1>
            <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Meet the world-class riders pushing BMX to new heights
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-red-900">
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <User className="w-24 h-24 text-white/30 mx-auto mb-4" />
                        <p className="text-white/50 font-semibold text-lg">
                          {member.name}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      {member.instagram && (
                        <a
                          href={`https://instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 hover:bg-red-600 rounded-full backdrop-blur-sm transition-all duration-300"
                          aria-label={`${member.name} on Instagram`}
                        >
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.youtube && (
                        <a
                          href={member.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 hover:bg-red-600 rounded-full backdrop-blur-sm transition-all duration-300"
                          aria-label={`${member.name} on YouTube`}
                        >
                          <Youtube className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Ride With The Best
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same quality and performance that our pro team relies on
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Shop Team Products
          </a>
        </div>
      </section>
    </div>
  );
}
