import { Helmet } from 'react-helmet-async';
import HomebotWidget from '@/components/homebot-widget';
import AgentBio from '@/components/agent-bio';
import CallToAction from '@/components/call-to-action';
import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import CriticalCSS from '@/components/critical-css';
import CriticalPerformanceLoader from '@/components/critical-performance-loader';
import EnhancedPropertyFallback from '@/components/enhanced-property-fallback';
import FAQSection from '@/components/faq-section';
import Footer from '@/components/footer';
import GeoEnhancedSchema from '@/components/geo-enhanced-schema';
import HeroSection from '@/components/hero-section';
import { ContextualContent } from '@/components/internal-link-optimizer';
import LinkBuildingSEO from '@/components/link-building-seo';
import LocalBusinessSchema from '@/components/local-business-schema';
import LocalCitationsSchema from '@/components/local-citations-schema';
import RealScoutAnalytics from '@/components/realscout-analytics';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import ReviewHighlights from '@/components/review-highlights';
import GoogleBusinessReview from '@/components/google-business-review';
import ServicesOverview from '@/components/services-overview';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166</title>
        <meta
          name="description"
          content="Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166. Call (702) 500-1902!"
        />
        <meta
          name="keywords"
          content="Skye Canyon homes for sale, Las Vegas NV 89166, luxury real estate, Dr. Jan Duffy REALTOR, golf course homes, guard gated community, new construction, Desert Highlands Golf Course"
        />

        {/* Geo-specific meta tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.2648;-115.3275" />
        <meta name="ICBM" content="36.2648, -115.3275" />
        <meta name="geo.locality" content="Skye Canyon" />
        <meta name="geo.zipcode" content="89166" />

        {/* Local business meta tags */}
        <meta name="business.phone" content="(702) 500-1902" />
        <meta name="business.address" content="10111 W Skye Canyon Park Dr, Las Vegas, NV 89166" />
        <meta name="business.hours" content="Mo-Fr 09:00-18:00, Sa 09:00-17:00, Su 11:00-16:00" />

        {/* Enhanced Open Graph tags */}
        <meta
          property="og:title"
          content="Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166"
        />
        <meta
          property="og:description"
          content="Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyecanyonhomesforsale.com" />
        <meta
          property="og:image"
          content="https://skyecanyonhomesforsale.com/dr-jan-duffy-headshot.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Skye Canyon Homes for Sale" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166"
        />
        <meta
          name="twitter:description"
          content="Expert Skye Canyon real estate agent specializing in luxury homes, new construction & golf course properties. Call (702) 500-1902!"
        />
        <meta
          name="twitter:image"
          content="https://skyecanyonhomesforsale.com/dr-jan-duffy-headshot.jpg"
        />

        {/* Canonical and alternate URLs */}
        <link rel="canonical" href="https://skyecanyonhomesforsale.com" />
        <link rel="alternate" hrefLang="en-US" href="https://skyecanyonhomesforsale.com" />

        {/* Additional SEO meta tags */}
        <meta name="author" content="Dr. Jan Duffy" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>

      {/* Comprehensive Schema Markup */}
      <ComprehensiveSchemaMarkup
        pageType="homepage"
        breadcrumbs={[{ name: 'Home', url: 'https://skyecanyonhomesforsale.com' }]}
        reviews={[
          {
            author: 'Sarah Mitchell',
            rating: 5,
            reviewBody:
              'Dr. Jan Duffy made our Skye Canyon home purchase seamless. Her knowledge of the community and market expertise helped us find our perfect luxury home.',
            datePublished: '2024-11-15',
          },
          {
            author: 'Michael Rodriguez',
            rating: 5,
            reviewBody:
              'Outstanding service from Dr. Duffy! She guided us through our first-time home purchase in Skye Canyon with professionalism and patience.',
            datePublished: '2024-10-22',
          },
          {
            author: 'Jennifer Chen',
            rating: 5,
            reviewBody:
              "Sold our Skye Canyon home in just 8 days! Dr. Duffy's marketing strategy and local connections delivered exceptional results.",
            datePublished: '2024-12-03',
          },
          {
            author: 'David Thompson',
            rating: 5,
            reviewBody:
              "Dr. Duffy's expertise in luxury Skye Canyon properties is unmatched. She helped us navigate the competitive market and secure our dream home.",
            datePublished: '2024-09-18',
          },
          {
            author: 'Lisa Anderson',
            rating: 5,
            reviewBody:
              'Professional, knowledgeable, and responsive. Dr. Duffy made our new construction purchase stress-free with her builder relationships.',
            datePublished: '2024-11-28',
          },
        ]}
      />

      <CriticalCSS />
      <CriticalPerformanceLoader />
      <LocalBusinessSchema />
      <LocalCitationsSchema />
      <GeoEnhancedSchema />
      <RealScoutAnalytics />
      <div className="min-h-screen bg-white">
        <HeroSection />

        {/* Current Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings Nevada 89166
              </h2>
              <p className="text-xl text-gray-600">Live inventory of available homes</p>
            </div>
            <div className="realscout-container">
              <RealScoutListings className="w-full" />
              <div className="realscout-fallback hidden">
                <EnhancedPropertyFallback />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Market Stats Preview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Skye Canyon Real Estate Market Data Las Vegas 89166
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-realscout-blue mb-2">$1.2M</div>
                <div className="text-gray-600">Median Home Price</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-realscout-blue mb-2">28</div>
                <div className="text-gray-600">Days on Market</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-realscout-blue mb-2">96%</div>
                <div className="text-gray-600">Price to List Ratio</div>
              </div>
            </div>
            <a
              href="/market-analysis"
              className="inline-flex items-center text-realscout-blue hover:text-realscout-navy font-medium"
            >
              View Complete Market Analysis →
            </a>
          </div>
        </section>

        {/* Services Overview Section */}
        <ServicesOverview />

        {/* Contextual Internal Linking Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualContent />
          </div>
        </section>

        {/* Client Reviews Section */}
        <ReviewHighlights />

        {/* Google Business Review Section */}
        <GoogleBusinessReview />

        {/* Explore Skye Canyon - Preview Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Skye Canyon Las Vegas 89166
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover everything that makes Skye Canyon one of the most sought-after communities
                in Northwest Las Vegas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Neighborhood Guide Card */}
              <a href="/skye-canyon-guide" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Neighborhood Guide</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Restaurants, schools, parks, and amenities near Skye Canyon with interactive maps and drive times.</p>
                  <span className="text-blue-600 font-semibold group-hover:text-blue-800 inline-flex items-center">
                    Explore the Area <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>

              {/* Market Analysis Card */}
              <a href="/market-analysis" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold">Market Analytics</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Price trends, days on market, neighborhood heatmaps, and real-time data for Skye Canyon and NW Las Vegas.</p>
                  <span className="text-emerald-600 font-semibold group-hover:text-emerald-800 inline-flex items-center">
                    View Market Data <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>

              {/* Property Search Card */}
              <a href="/search" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Advanced Search</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">AI-powered and voice-activated property search tools to find your dream home in Skye Canyon.</p>
                  <span className="text-purple-600 font-semibold group-hover:text-purple-800 inline-flex items-center">
                    Search Properties <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>

              {/* Schools Card */}
              <a href="/skye-canyon-schools" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-bold">Schools & Education</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Top-rated Clark County schools, ratings, programs, and district information for Skye Canyon families.</p>
                  <span className="text-amber-600 font-semibold group-hover:text-amber-800 inline-flex items-center">
                    View Schools <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>

              {/* Communities Card */}
              <a href="/skye-canyon-communities" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-rose-500 to-rose-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="text-xl font-bold">Communities</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Explore Skye Canyon sub-communities, builders like Toll Brothers and Lennar, and home styles available.</p>
                  <span className="text-rose-600 font-semibold group-hover:text-rose-800 inline-flex items-center">
                    Explore Communities <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>

              {/* Parks & Recreation Card */}
              <a href="/skye-canyon-parks" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white">
                  <svg className="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className="text-xl font-bold">Parks & Recreation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Desert Highlands Golf Course, Skye Canyon Park, trails, pools, and outdoor recreation in the community.</p>
                  <span className="text-teal-600 font-semibold group-hover:text-teal-800 inline-flex items-center">
                    See Amenities <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skye Canyon & Northwest Las Vegas Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy specializes in Skye Canyon and surrounding Northwest Las Vegas
                communities, providing expert real estate services in the most sought-after
                neighborhoods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a href="/skye-canyon-guide" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Skye Canyon (89166)</h3>
                <p className="text-sm text-gray-600">
                  Guard-gated luxury community with Desert Highlands Golf Course
                </p>
              </a>
              <a href="/northwest-las-vegas" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Centennial Hills</h3>
                <p className="text-sm text-gray-600">
                  Master-planned community with top-rated schools and amenities
                </p>
              </a>
              <a href="/northwest-las-vegas" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Providence</h3>
                <p className="text-sm text-gray-600">
                  Family-friendly neighborhoods with parks and recreation
                </p>
              </a>
              <a href="/northwest-las-vegas" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Northwest Las Vegas</h3>
                <p className="text-sm text-gray-600">
                  Established communities near shopping and entertainment
                </p>
              </a>
            </div>

            {/* Why Choose Skye Canyon */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Skye Canyon?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">24/7 Guard-Gated Security</h4>
                  <p className="text-sm text-gray-600">Premium security with controlled access and roving patrols</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Desert Highlands Golf Course</h4>
                  <p className="text-sm text-gray-600">18-hole championship golf course with clubhouse amenities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Top-Rated Schools</h4>
                  <p className="text-sm text-gray-600">Highly-rated Clark County schools serving the community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Skye Canyon Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Search Skye Canyon properties or get your home's current market value instantly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center"
              >
                Search Available Homes
              </a>
              <a
                href="tel:+17025001902"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 border-2 border-blue-400 transition-colors shadow-lg text-center"
              >
                Call (702) 500-1902
              </a>
              <a
                href="/contact"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 border-2 border-white/50 transition-colors shadow-lg text-center"
              >
                Get Home Valuation
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Powered by RealScout MLS &bull; Updated in real-time &bull; 10111 W Skye Canyon Park Dr, Las Vegas, NV 89166
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions About Skye Canyon Homes"
          pageType="skye-canyon"
          faqs={[
            {
              question: 'What are the home prices in Skye Canyon?',
              answer:
                'Skye Canyon home prices typically range from $650,000 to $1.2M+, with luxury custom homes reaching higher price points. The guard-gated community offers exceptional value for the premium amenities and location.',
            },
            {
              question: 'Is Skye Canyon a guard-gated community?',
              answer:
                "Yes, Skye Canyon is a prestigious 24/7 guard-gated community with controlled access and roving security patrols, ensuring residents' safety and privacy.",
            },
            {
              question: 'What amenities are available in Skye Canyon?',
              answer:
                'Skye Canyon features the Desert Highlands Golf Course, community recreation center, fitness facilities, swimming pools, tennis courts, walking trails, and exclusive clubhouse amenities.',
            },
            {
              question: 'How long does it take to find a home in Skye Canyon?',
              answer:
                "With Dr. Jan Duffy's expertise and exclusive market knowledge, most clients find their ideal Skye Canyon home within 30-60 days, depending on specific requirements and market conditions.",
            },
            {
              question: 'What schools serve the Skye Canyon area?',
              answer:
                'Skye Canyon is served by highly-rated schools in the Clark County School District, including top-performing elementary, middle, and high schools in the northwest Las Vegas area.',
            },
            {
              question: 'Are there new construction homes available in Skye Canyon?',
              answer:
                'Yes, Skye Canyon offers both resale homes and new construction opportunities. Dr. Jan Duffy can help you explore all available options including quick move-in homes and custom builds.',
            },
          ]}
        />

        {/* Related Searches Section */}
        <RelatedSearches searchType="skye-canyon" />

        {/* Comprehensive Link Building & SEO Authority */}
        <LinkBuildingSEO />

        <AgentBio />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
