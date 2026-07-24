export default function Home() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Whitetail Gateway" className="h-20" />
          <div className="hidden md:flex gap-12">
            <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">About</a>
            <a href="#programs" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">Programs</a>
            <a href="#get-involved" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">Get Involved</a>
            <a href="#impact" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">Impact</a>
            <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition">Contact</a>
          </div>
          <a href="#get-involved" className="btn px-6 py-2 text-white font-semibold rounded-lg" style={{ backgroundColor: '#FF6600' }}>Join Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 text-white overflow-hidden" style={{
        backgroundImage: 'url(/hero-deer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Introducing the Next Generation to Hunting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Whitetail Gateway connects new and experienced hunters with education, mentorship, and community to preserve this vital tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-involved" className="btn px-8 py-3 text-white font-semibold rounded-lg" style={{ backgroundColor: '#FF6600' }}>Get Started</a>
              <a href="#about" className="btn px-8 py-3 font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hunting is essential for wildlife conservation and connects us to nature. Yet participation among young people is declining. Whitetail Gateway exists to reverse this trend by making hunting accessible, educational, and rewarding for everyone.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that by introducing new generations to whitetail hunting, we're not just preserving a tradition—we're securing the future of conservation, landowner partnerships, and a connection to the outdoors that matters.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                alt="Deer in nature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-black mb-4">Education</h3>
              <p className="text-gray-600">Comprehensive hunting education from basics to advanced techniques, taught by experienced mentors who care about your success.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-black mb-4">Access</h3>
              <p className="text-gray-600">We remove barriers to entry through gear donations, landowner partnerships, and volunteer mentorship programs.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-black mb-4">Community</h3>
              <p className="text-gray-600">Join a network of hunters, guides, landowners, and conservationists dedicated to preserving hunting for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Our Programs</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mentorship Program */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80)',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">Mentorship Program</h3>
                <p className="text-gray-600 mb-6">One-on-one guidance from experienced hunters. Learn deer behavior, habitat, techniques, and ethics in the field with someone who's been there.</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Personalized guidance</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Field education</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Seasonal preparation</li>
                </ul>
              </div>
            </div>

            {/* Education Workshops */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1517457373614-b7152f800ff1?w=600&q=80)',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">Education Workshops</h3>
                <p className="text-gray-600 mb-6">Group classes on everything from hunting basics to advanced scouting techniques. Learn from experts and connect with fellow hunters.</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Beginner courses</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Seasonal workshops</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Expert instruction</li>
                </ul>
              </div>
            </div>

            {/* Gear Assistance */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80)',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">Gear Assistance</h3>
                <p className="text-gray-600 mb-6">Cost shouldn't stop you from hunting. We provide gear donations and connect hunters with affordable equipment and resources.</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Equipment donations</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Gear guides</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Sponsor partnerships</li>
                </ul>
              </div>
            </div>

            {/* Landowner Partnerships */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1500595046891-cb96a63d7bf0?w=600&q=80)',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">Landowner Partnerships</h3>
                <p className="text-gray-600 mb-6">We connect hunters with landowners who are willing to share their land. Building relationships that benefit conservation and community.</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Access opportunities</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Habitat stewardship</li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">•</span> Local chapters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-black mb-2" style={{ color: '#FF6600' }}>100+</div>
              <p className="text-gray-600 font-semibold">New Hunters Trained</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2" style={{ color: '#FF6600' }}>50+</div>
              <p className="text-gray-600 font-semibold">Volunteers Active</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2" style={{ color: '#FF6600' }}>25+</div>
              <p className="text-gray-600 font-semibold">Landowners Partnered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2" style={{ color: '#FF6600' }}>4</div>
              <p className="text-gray-600 font-semibold">Active Chapters</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <p className="text-xl text-gray-700 mb-6 italic">
              "I never thought I'd be a hunter. But through Whitetail Gateway, I learned everything I needed to know. Now hunting is my favorite way to spend time outdoors and give back to conservation."
            </p>
            <p className="font-bold text-gray-900">— Sarah M., First-Time Hunter</p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Get Involved</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-black mb-4">Volunteer</h3>
              <p className="text-gray-300 mb-8">Share your passion for hunting and conservation. Lead classes, mentor new hunters, or help coordinate your local chapter.</p>
              <a href="#contact" className="btn px-6 py-2 text-white font-semibold rounded-lg w-full text-center" style={{ backgroundColor: '#FF6600' }}>Learn More</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-black mb-4">Donate</h3>
              <p className="text-gray-300 mb-8">Support our mission with gear donations, financial contributions, or grants. Help us reach more hunters and expand to new regions.</p>
              <a href="#contact" className="btn px-6 py-2 text-white font-semibold rounded-lg w-full text-center" style={{ backgroundColor: '#FF6600' }}>Contribute</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-black mb-4">Learn</h3>
              <p className="text-gray-300 mb-8">New to hunting? Join a class, get paired with a mentor, and start your journey into the whitetail woods with confidence.</p>
              <a href="#contact" className="btn px-6 py-2 text-white font-semibold rounded-lg w-full text-center" style={{ backgroundColor: '#FF6600' }}>Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-black mb-4">Whitetail Gateway</h4>
              <p className="text-gray-400 text-sm">Introducing the next generation to whitetail hunting and conservation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Organization</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#about" className="hover:text-orange-600 transition">About</a></li>
                <li><a href="#programs" className="hover:text-orange-600 transition">Programs</a></li>
                <li><a href="#impact" className="hover:text-orange-600 transition">Impact</a></li>
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
              <p className="text-sm text-gray-400 mb-2">info@whitetailgateway.org</p>
              <p className="text-sm text-gray-400">(555) 123-4567</p>
              <p className="text-sm text-gray-400 mt-4">Wherever hunting thrives</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Whitetail Gateway. A 501(c)(3) nonprofit organization dedicated to conservation and hunting education.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
