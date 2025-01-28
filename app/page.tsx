import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import EmailForm from "@/components/EmailForm"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Marvis Pichardo Contracting</div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
          <a href="tel:305-562-0288" className="hidden md:inline-flex">
            <Button>Call 305-562-0288</Button>
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Space with Expert Craftsmanship</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              25 years of engineering experience bringing modern, sleek, and functional designs to life.
            </p>
            <a href="tel:305-562-0288" className="hidden md:inline-flex">
              <Button size="lg" className="text-lg px-8">
              Start Your Project
              </Button>
            </a>
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Tile Installation", "Kitchen Remodeling", "Custom Showers"].map((service, index) => (
                <div key={index} className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">Expert craftsmanship tailored to your unique style and needs.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/photos/photo2.webp" alt="Marvis Pichardo" width={400} height={400} className="rounded-full" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Meet Marvis Pichardo</h2>
              <p className="text-lg mb-4">
                With 25 years of engineering experience, Marvis brings unparalleled expertise to every project.
                Specializing in interior remodels for both residential and commercial spaces, she transforms ordinary
                rooms into extraordinary living areas.
              </p>
              <p className="text-lg">
                Her focus on modern, sleek, and functional designs ensures that your space not only looks beautiful but
                works perfectly for your lifestyle.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/photos/photo2.webp"
                    alt={`Project ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      Modern {index === 0 ? "Kitchen" : index === 1 ? "Bathroom" : "Living Room"} Remodel
                    </h3>
                    <p className="text-sm text-gray-600">
                      A complete transformation showcasing our attention to detail and quality craftsmanship.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Francis B.",
                  text: "Marvis transformed our outdated kitchen into a modern masterpiece. Her attention to detail and quality of work is unmatched!",
                },
                {
                  name: "Michael P.",
                  text: "We couldn't be happier with our new bathroom. Marvis's expertise in tile work really shines through in the final product.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <EmailForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Marvis Pichardo Contracting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

