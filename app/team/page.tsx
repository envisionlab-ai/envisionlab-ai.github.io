import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Envision Lab",
  description:
    "Meet the visionary founders and talented team behind Envision Lab who are passionate about transforming businesses through AI innovation.",
  alternates: {
    canonical: "https://envisionlab.com/team",
  },
  openGraph: {
    title: "Our Team | Envision Lab",
    description:
      "Meet the visionary founders and talented team behind Envision Lab who are passionate about transforming businesses through AI innovation.",
    url: "https://envisionlab.com/team",
  },
}

// Team members data
const founders = [
  {
    name: "Jane Smith",
    role: "Co-Founder & Business Lead",
    bio: "Jane is a graduate from EDHEC Business School with extensive experience in business strategy and AI implementation. She has helped numerous companies successfully integrate AI solutions to drive growth and innovation. Her expertise in identifying business opportunities and translating them into technological solutions has been instrumental in Envision Lab's success.",
    image: "/placeholder.svg?height=400&width=400",
    slug: "jane-smith",
  },
  {
    name: "John Doe",
    role: "Co-Founder & Technical Lead",
    bio: "John is a graduate from Tokopedia with a strong background in software development and AI technologies. His technical expertise has been instrumental in developing our cutting-edge AI solutions and products. John leads our technical team and oversees the development of all Envision Lab products, ensuring they meet the highest standards of quality and innovation.",
    image: "/placeholder.svg?height=400&width=400",
    slug: "john-doe",
  },
]

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    bio: "Sarah brings 10 years of product management experience from leading tech companies. She oversees our product roadmap and ensures our solutions meet customer needs.",
    image: "/placeholder.svg?height=300&width=300&text=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Lead Data Scientist",
    bio: "With a PhD in Machine Learning, Michael leads our data science team in developing cutting-edge algorithms and models that power our AI solutions.",
    image: "/placeholder.svg?height=300&width=300&text=Michael",
  },
  {
    name: "Priya Patel",
    role: "UX/UI Design Lead",
    bio: "Priya ensures our products are intuitive and user-friendly. Her human-centered design approach has been key to our products' success.",
    image: "/placeholder.svg?height=300&width=300&text=Priya",
  },
  {
    name: "David Wilson",
    role: "Head of Sales",
    bio: "David leads our sales team with his extensive experience in B2B technology sales. He's passionate about helping businesses leverage AI effectively.",
    image: "/placeholder.svg?height=300&width=300&text=David",
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the visionary founders and talented team behind Envision Lab who are passionate about transforming
          businesses through AI innovation.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-secondary card-hover">
              <div className="relative h-80 w-full">
                <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">{founder.name}</h2>
                <p className="text-primary font-medium mb-4">{founder.role}</p>
                <p className="text-muted-foreground mb-6">{founder.bio}</p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href={`/team/${founder.slug}`}>View Full Profile</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-secondary card-hover text-center"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg text-muted-foreground mb-8">
          At Envision Lab, we believe in the transformative power of AI to revolutionize businesses and create
          sustainable growth. Our mission is to make advanced AI technologies accessible to businesses of all sizes,
          helping them stay competitive in an increasingly digital world.
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Founded by two experts with complementary skills in business and technology, Envision Lab combines strategic
          business insights with technical excellence to deliver AI solutions that drive real results. We're committed
          to ethical AI development and implementation, ensuring that our solutions not only improve business outcomes
          but also contribute positively to society.
        </p>

        <div className="bg-secondary p-8 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-6">Join Our Team</h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals who are passionate about AI and want to make a difference.
            Check out our current openings or send us your resume.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

