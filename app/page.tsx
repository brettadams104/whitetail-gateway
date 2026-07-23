import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black">Whitetail Gateway</div>
          <div className="flex gap-8">
            <a href="#mission" className="text-sm font-semibold hover:text-orange-600 transition">Mission</a>
            <a href="#what-we-do" className="text-sm font-semibold hover:text-orange-600 transition">What We Do</a>
            <a href="#get-involved" className="text-sm font-semibold hover:text-orange-600 transition">Get Involved</a>
            <a href="#contact" className="text-sm font-semibold hover:text-orange-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            The Gateway to Hunting
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Introducing the next generation to whitetail hunting. Education, mentorship, and community for new hunters of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-involved" className="btn">Get Started</a>
            <a href="#mission" className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Hunting is more than a hobby—it's a conservation tool and a vital connection to nature. Yet fewer young people are learning the skills, ethics, and traditions that make hunting meaningful.
              </p>
              <p className="text-lg mb-6">
                <strong>Whitetail Gateway exists to change that.</strong> We're building a movement to introduce hunters of all ages to whitetail hunting. Through education, mentorship, and community, we're preserving a tradition that connects us to the land and to each other.
              </p>
              <p className="text-lg">
                Starting locally and growing nationally, we're creating a network of chapters, volunteers, and landowners dedicated to bringing new hunters into the field.
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80)',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Educate */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div
                className="h-48 mb-6 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80)',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>Educate</h3>
              <p className="mb-4">Learn from experienced hunters and conservation experts. Classes on deer behavior, habitat management, hunting ethics, and proper technique.</p>
              <ul className="text-sm space-y-2">
                <li>✓ Beginner to advanced courses</li>
                <li>✓ Volunteer-led workshops</li>
                <li>✓ Online and in-person options</li>
              </ul>
            </div>

            {/* Equip */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div
                className="h-48 mb-6 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80)',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>Equip</h3>
              <p className="mb-4">Not everyone can afford hunting gear. We provide equipment donations and resources to ensure cost isn't a barrier to entry.</p>
              <ul className="text-sm space-y-2">
                <li>✓ Gear donations</li>
                <li>✓ Equipment guides</li>
                <li>✓ Mentorship support</li>
              </ul>
            </div>

            {/* Connect */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div
                className="h-48 mb-6 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517457373614-b7152f800ff1?w=400&q=80)',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>Connect</h3>
              <p className="mb-4">We bridge hunters, volunteers, and landowners. Build relationships that last a lifetime and create opportunities to get in the field.</p>
              <ul className="text-sm space-y-2">
                <li>✓ Volunteer network</li>
                <li>✓ Landowner partnerships</li>
                <li>✓ Community events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Experience the Woods</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
              'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80',
              'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&q=80',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
              'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=400&q=80',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
            ].map((img, i) => (
              <div
                key={i}
                className="h-64 bg-cover bg-center rounded-lg hover:shadow-lg transition"
                style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16 text-white">Get Involved</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-4" style={{ color: '#FF6600' }}>01</div>
              <h3 className="text-white mb-3">Volunteer</h3>
              <p className="mb-6">Share your passion. Lead classes, mentor new hunters, help coordinate chapters, and build community.</p>
              <a href="#contact" className="btn">Learn More</a>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black mb-4" style={{ color: '#FF6600' }}>02</div>
              <h3 className="text-white mb-3">Donate</h3>
              <p className="mb-6">Support our mission with gear donations, financial contributions, or grants. Every contribution expands our reach.</p>
              <a href="#contact" className="btn">Contribute</a>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black mb-4" style={{ color: '#FF6600' }}>03</div>
              <h3 className="text-white mb-3">Learn</h3>
              <p className="mb-6">New to hunting? Join a class, find a mentor, and start your journey into the whitetail woods.</p>
              <a href="#contact" className="btn">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl mb-8">
            Whether you're a first-time hunter, an experienced guide, or a landowner, there's a place for you in Whitetail Gateway.
          </p>
          <a href="#contact" className="btn inline-block">Get Started Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Whitetail Gateway</h4>
              <p className="text-gray-400 text-sm">Introducing the next generation to hunting.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#mission" className="hover:text-orange-600 transition">Mission</a></li>
                <li><a href="#what-we-do" className="hover:text-orange-600 transition">What We Do</a></li>
                <li><a href="#get-involved" className="hover:text-orange-600 transition">Get Involved</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="https://facebook.com" className="hover:text-orange-600 transition">Facebook</a></li>
                <li><a href="https://instagram.com" className="hover:text-orange-600 transition">Instagram</a></li>
                <li><a href="https://youtube.com" className="hover:text-orange-600 transition">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">Email: info@whitetailgateway.org</p>
              <p className="text-sm text-gray-400">Start a chapter or volunteer</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Whitetail Gateway. A 501(c)(3) nonprofit organization.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
