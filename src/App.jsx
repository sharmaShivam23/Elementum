import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/footer'
// import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import TestimonialsPage from './components/Testimonials'
import TestimonialSection from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <TestimonialsPage />
        <TestimonialSection/>
        {/* <Newsletter /> */}
        <Footer/>
      </main>
    </div>
  )
}

export default App
