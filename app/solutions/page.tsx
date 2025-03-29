import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions | Envision Lab",
  description:
    "Discover how Envision Lab can transform your business with cutting-edge AI solutions tailored to your specific needs, including Personalized AI Marketing, IT & Business Consulting, Data Analysis, and Virtual Assistants.",
  alternates: {
    canonical: "https://envisionlab.com/solutions",
  },
  openGraph: {
    title: "AI Solutions | Envision Lab",
    description:
      "Discover how Envision Lab can transform your business with cutting-edge AI solutions tailored to your specific needs.",
    url: "https://envisionlab.com/solutions",
  },
}

// Solutions data
const solutions = [
  {
    title: "Personalized AI Marketing",
    description:
      "Leverage AI to create personalized marketing campaigns that resonate with your target audience and drive conversions.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "personalized-marketing",
  },
  {
    title: "IT & Business Consulting",
    description:
      "Expert guidance on digital transformation and AI integration to optimize your business processes and increase efficiency.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "it-consulting",
  },
  {
    title: "Data Analyzer",
    description:
      "Advanced AI-powered data analysis tools to extract valuable insights and make data-driven decisions for your business.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "data-analyzer",
  },
  {
    title: "Virtual Assistant",
    description:
      "Enhance customer service and streamline operations with our intelligent AI-powered virtual assistants.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "virtual-assistant",
  },
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Our Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how Envision Lab can transform your business with cutting-edge AI solutions tailored to your specific
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden bg-secondary card-hover">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={solution.image || "/placeholder.svg"} alt={solution.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href={`/solutions/${solution.slug}`}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

