import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instrument_Serif, Manrope } from "next/font/google";
import Avatar from "boring-avatars";

const serif = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });
const manrope = Manrope({ weight: ["400", "500", "600"], subsets: ["latin"] });

export default function Page() {
  return (
    <div
      className={`min-h-screen bg-[#EFF6FF] ${manrope.className} text-[#0B1228]`}
    >
      {/* Header with background image */}
      <header
        className="overflow-hidden min-h-[95vh]"
        style={{
          backgroundImage: 'url("/graphic.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 55% bottom -50px",
        }}
      >
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="container mx-auto px-4 py-2 bg-white w-[400px] lg:w-[500px] fixed top-8 left-1/2 transform -translate-x-1/2  shadow-lg rounded-full">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["How it works", "Pricing", "Testimonials", "Contact us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#0B1228] hover:text-blue-700 font-medium text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mx-auto text-[32px] w-[280px] lg:w-[600px] mt-16 mb-4">
                Save time on{" "}
                <span
                  className={`${serif.className} italic`}
                  style={{ fontStyle: "italic" }}
                >
                  job applications
                </span>
                —let our experts handle the process for you.
              </h1>
              <p className="text-base mb-6 sm:mb-8 max-w-xl mx-auto">
                Our dedicated experts streamline the entire application process,
                ensuring your documents are optimized, submitted efficiently,
                and tailored to your desired roles.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto">
                  Contact us
                </Button>
                <a href="#pricing">
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-700 hover:bg-blue-700/10 w-full sm:w-auto"
                  >
                    View pricing
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </header>

      {/* How it works */}
      <section
        id="how it works"
        className="bg-blue-700 py-12 sm:py-16 md:py-20 text-[#EFF6FF]"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`${serif.className} text-center text-6xl mb-4`}
            style={{ fontStyle: "italic" }}
          >
            How it works
          </h2>
          <p className="text-center mb-8 sm:mb-12">
            Effortless Job Applications in Three Simple Steps
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-20 px-44">
            {[
              {
                number: "1",
                title: "Personalized Job Matching",
                description:
                  "We carefully analyze your profile, including your skills, work experience, career aspirations, and preferences, to identify the most relevant job opportunities. Our advanced AI tools and expert team ensure that each curated job aligns with your qualifications and goals.",
              },
              {
                number: "2",
                title: "Streamlined Applications",
                description:
                  "We take the hassle out of job applications by managing the entire process for you. From ensuring every application is tailored and error-free to submitting them on time, we handle each step with precision and care.",
              },
              {
                number: "3",
                title: "Real-Time Progress Tracking",
                description:
                  "Stay in complete control with our intuitive dashboard that transforms complex application data into clear, actionable insights. Never miss an update or deadline again.",
              },
            ].map((step) => (
              <Card key={step.number} className="bg-white p-6">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={`/${step.number}.svg`}
                      alt={`how it works step ${step.number}`}
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2 flex-grow text-blue-700">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-8">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-start">
              <h2
                className={`  text-5xl font-bold text-blue-700 mb-8 sm:mb-12 md:mb-16 ${serif.className}`}
                style={{ fontStyle: "italic" }}
              >
                Pricing
              </h2>
              <div className="bg-blue-700 p-8 rounded-lg flex-grow text-[#EFF6FF]">
                <div className="text-4xl font-bold mb-4">
                  $199<span className="text-lg font-normal">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    1000 applications/month
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    ATS-Optimized Resume Building
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Contact us
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Secure Data Protection",
                  description:
                    "Your personal information is handled with the highest level of security. We prioritize safeguarding your data using advanced encryption and privacy measures.",
                  image: "/security.svg",
                },
                {
                  title: "Professional Support",
                  description:
                    "Our dedicated team is here to assist you at every step. Whether you need guidance or updates, our experts provide personalized support.",
                  image: "/support.svg",
                },
                {
                  title: "Professional Resume Generation",
                  description:
                    "Stand out to employers with a professionally crafted, ATS-optimized resume that highlights your skills and experience effectively.",
                  image: "/resume.svg",
                },
              ].map((feature) => (
                <div key={feature.title}>
                  <div className="flex gap-6 items-start">
                    <img src={feature.image} alt={feature.title} />
                    <div>
                      <h3 className="font-bold text-xl text-blue-700 mb-2 flex-grow">
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className=" py-12 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 bg-blue-700 text-[#EFF6FF] py-20">
            <div className=" mb-2">LOVED BY CANDIDATES</div>
            <h2
              className={`text-5xl font-bold mt-8 ${serif.className}`}
              style={{ fontStyle: "italic" }}
            >
              What they are saying
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-80">
            {[
              {
                testimonial:
                  "The resume they created for me was amazing. It perfectly highlighted my skills and landed me interviews with top companies!",
                name: "Jessica R.",
              },
              {
                testimonial:
                  "The job matching process saved me so much time. I secured a role within weeks, thanks to their curated applications!",
                name: "Mark T.",
              },
              {
                testimonial:
                  "The dashboard kept me updated every step of the way. I felt in control without the stress of handling applications myself.",
                name: "Priya S.",
              },
              {
                testimonial:
                  "Their team’s support was exceptional. Anytime I had a question, they responded promptly and professionally.",
                name: "David L.",
              },
              {
                testimonial:
                  "Knowing my data was protected gave me peace of mind. I could focus on my career while they handled the rest.",
                name: "Rachel K.",
              },
              {
                testimonial:
                  "From resume creation to application submissions, their service was seamless. I highly recommend it to anyone job hunting.",
                name: "Ahmed M.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <p className="mb-4">{testimonial.testimonial}</p>
                <div className="flex items-center gap-4">
                  <Avatar name={testimonial.name} size={20} variant="beam" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
