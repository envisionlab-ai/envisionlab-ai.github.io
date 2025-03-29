import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Implementation Portfolio | Envision Lab",
  description:
    "Explore our successful AI implementation projects and see how we've helped businesses transform with AI-powered solutions across various industries.",
  alternates: {
    canonical: "https://envisionlab.com/portfolios",
  },
  openGraph: {
    title: "AI Implementation Portfolio | Envision Lab",
    description:
      "Explore our successful AI implementation projects and see how we've helped businesses transform with AI-powered solutions.",
    url: "https://envisionlab.com/portfolios",
  },
}

// Portfolio items data
const portfolios = [
  {
    title: "AI-Powered Customer Service for RetailCorp",
    category: "Virtual Assistant",
    description:
      "Implemented a virtual assistant that reduced customer service response time by 75% and increased customer satisfaction by 40%.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "retailcorp",
  },
  {
    title: "Data Analysis Platform for FinTech Solutions",
    category: "Data Analyzer",
    description:
      "Developed a custom data analysis platform that helped identify market trends and increased investment returns by 28%.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "fintech-solutions",
  },
  {
    title: "Personalized Marketing Campaign for E-commerce Giant",
    category: "Personalized AI Marketing",
    description:
      "Created an AI-driven marketing strategy that increased conversion rates by 35% and customer retention by 42%.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ecommerce-marketing",
  },
  {
    title: "Healthcare Data Management System",
    category: "Customized Software Solution",
    description:
      "Built a comprehensive data management system for a healthcare provider that improved operational efficiency by 60%.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "healthcare-data",
  },
]

export default function PortfoliosPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our successful projects and see how we've helped businesses transform with AI-powered solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolios.map((portfolio, index) => (
          <Link href={`/portfolios/${portfolio.slug}`} key={index} className="group">
            <div className="border border-border rounded-lg overflow-hidden bg-secondary card-hover">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={portfolio.image || "/placeholder.svg"}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-primary">
                  {portfolio.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {portfolio.title}
                </h3>
                <p className="text-muted-foreground">{portfolio.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

