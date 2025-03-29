import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Envision Lab",
  description:
    "Join our team at Envision Lab and help build the future of AI. Explore open positions and learn about our company culture, values, and benefits.",
  alternates: {
    canonical: "https://envisionlab.com/careers",
  },
  openGraph: {
    title: "Careers | Envision Lab",
    description:
      "Join our team at Envision Lab and help build the future of AI. Explore open positions and learn about our company culture.",
    url: "https://envisionlab.com/careers",
  },
}

// Career positions data
const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description: "Join our core engineering team to develop cutting-edge AI solutions for our enterprise clients.",
    slug: "senior-ai-engineer",
  },
  {
    title: "Machine Learning Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Research and implement state-of-the-art machine learning algorithms to enhance our AI capabilities.",
    slug: "machine-learning-researcher",
  },
  {
    title: "AI Solutions Consultant",
    department: "Consulting",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description:
      "Work directly with clients to understand their needs and design AI solutions that drive business value.",
    slug: "ai-solutions-consultant",
  },
  {
    title: "Product Manager - AI Products",
    department: "Product",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description: "Lead the development and go-to-market strategy for our AI product suite.",
    slug: "product-manager",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and engaging user experiences for our AI-powered applications.",
    slug: "ux-ui-designer",
  },
  {
    title: "Marketing Specialist - AI Solutions",
    department: "Marketing",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description: "Develop and execute marketing strategies to promote our AI solutions and thought leadership.",
    slug: "marketing-specialist",
  },
]

// Benefits data
const benefits = [
  {
    title: "Competitive Compensation",
    description:
      "Salary packages that recognize your skills and experience, plus equity options to share in our success.",
    icon: "💰",
  },
  {
    title: "Flexible Work",
    description: "Remote-friendly policies and flexible hours to help you work when and where you're most productive.",
    icon: "🏠",
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, and wellness programs to keep you at your best.",
    icon: "🏥",
  },
  {
    title: "Continuous Learning",
    description: "Learning stipend, conference attendance, and regular knowledge sharing sessions to help you grow.",
    icon: "📚",
  },
  {
    title: "Work-Life Balance",
    description: "Generous PTO, parental leave, and respect for your time outside of work.",
    icon: "⚖️",
  },
  {
    title: "Cutting-Edge Projects",
    description: "Work on innovative AI solutions that are transforming how businesses operate.",
    icon: "🚀",
  },
]

export default function CareersPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Help us build the future of AI and transform how businesses leverage technology
        </p>
      </div>

      {/* About Working at Envision Lab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Envision Lab?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              At Envision Lab, we're on a mission to make advanced AI technologies accessible to businesses of all
              sizes. We're a team of passionate innovators, engineers, and business strategists who believe in the
              transformative power of artificial intelligence.
            </p>
            <p>
              Working here means being part of a collaborative, fast-paced environment where your ideas matter and your
              growth is prioritized. We value diversity of thought, background, and experience, knowing that the best
              solutions come from teams with different perspectives.
            </p>
            <p>
              Whether you're an AI expert, a business strategist, or someone passionate about creating exceptional user
              experiences, there's a place for you at Envision Lab.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
          <Image
            src="/placeholder.svg?height=600&width=800&text=Team+Collaboration"
            alt="Team Collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Innovation First</h3>
            <p className="text-muted-foreground">
              We push boundaries and challenge conventional thinking to create solutions that weren't possible before.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Customer Impact</h3>
            <p className="text-muted-foreground">
              We measure our success by the tangible value and transformation we bring to our clients' businesses.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Ethical AI</h3>
            <p className="text-muted-foreground">
              We develop AI responsibly, with a commitment to fairness, transparency, and positive societal impact.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              We embrace curiosity and lifelong learning, staying at the forefront of AI advancements.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Collaborative Spirit</h3>
            <p className="text-muted-foreground">
              We believe the best solutions come from diverse teams working together with mutual respect.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Work-Life Harmony</h3>
            <p className="text-muted-foreground">
              We support balanced lives, knowing that well-rested minds produce the best work.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 gap-4">
          {positions.map((position, index) => (
            <Link href={`/careers/${position.slug}`} key={index} className="group">
              <div className="border border-border rounded-lg p-6 bg-secondary hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">{position.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <Badge variant="outline" className="bg-primary/10">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      {position.location}
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      {position.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Hiring Process</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    1
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1">
                  <h3 className="text-xl font-bold mb-2">Application Review</h3>
                  <p className="text-muted-foreground">
                    Our team reviews your application, resume, and portfolio to assess your qualifications and fit.
                  </p>
                </div>
                <div className="md:w-5/12 md:pl-8 order-2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    2
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1 md:order-2"></div>
                <div className="md:w-5/12 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                  <p className="text-muted-foreground">
                    A conversation with our recruiting team to discuss your experience, skills, and what you're looking
                    for.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    3
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1">
                  <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
                  <p className="text-muted-foreground">
                    Depending on the role, you may complete a take-home assignment or technical interview to showcase
                    your skills.
                  </p>
                </div>
                <div className="md:w-5/12 md:pl-8 order-2"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    4
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1 md:order-2"></div>
                <div className="md:w-5/12 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Team Interviews</h3>
                  <p className="text-muted-foreground">
                    Meet with potential teammates and cross-functional partners to assess collaboration and cultural
                    fit.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    5
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1">
                  <h3 className="text-xl font-bold mb-2">Final Interview</h3>
                  <p className="text-muted-foreground">
                    A conversation with leadership to discuss your career goals and how you can contribute to our
                    mission.
                  </p>
                </div>
                <div className="md:w-5/12 md:pl-8 order-2"></div>
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                    6
                  </div>
                </div>
                <div className="md:w-5/12 md:pr-8 md:text-right order-1 md:order-2"></div>
                <div className="md:w-5/12 md:pl-8 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
                  <p className="text-muted-foreground">
                    If there's a mutual fit, we'll extend an offer and work with you to ensure a smooth onboarding
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Positions That Fit? */}
      <div className="bg-secondary p-8 md:p-12 rounded-lg border border-border text-center">
        <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're always looking for exceptional talent, even if we don't have an open position that matches your skills.
          Send us your resume and tell us how you can contribute to our mission.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Submit Your Resume</Link>
        </Button>
      </div>
    </div>
  )
}

