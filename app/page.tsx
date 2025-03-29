import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Envision Lab - Your Leading Generative AI Implementor",
  description:
    "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals. Envision Lab provides Generative AI implementation, IT & Business Consulting, and Customized Software Solutions.",
  alternates: {
    canonical: "https://envisionlab.com",
  },
  openGraph: {
    title: "Envision Lab - Your Leading Generative AI Implementor",
    description: "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.",
    url: "https://envisionlab.com",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden grid-pattern">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Your Leading Generative AI Implementor</h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Provide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions and services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Generative AI Implementation",
                description:
                  "Integrate cutting-edge AI technologies into your business processes to automate tasks, enhance decision-making, and drive innovation.",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "IT & Business Consulting",
                description:
                  "Strategic guidance on digital transformation, technology adoption, and business process optimization to maximize your competitive advantage.",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Customized Software Solutions",
                description:
                  "Bespoke software development tailored to your specific business needs, ensuring seamless integration with your existing systems.",
                icon: "/placeholder.svg?height=64&width=64",
              },
            ].map((service, index) => (
              <div key={index} className="border border-border rounded-lg p-8 text-center card-hover">
                <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center bg-secondary rounded-full">
                  <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[400px] w-full">
                <Image src="/placeholder.svg?height=600&width=600" alt="AI Solutions" fill className="object-contain" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solutions & Expertise</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a comprehensive suite of AI-powered solutions designed to address your specific business
                challenges and drive growth.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/solutions">Explore All Solutions</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized AI Marketing",
                description:
                  "Leverage AI to create targeted marketing campaigns that resonate with your audience and drive conversions.",
                link: "/solutions/personalized-marketing",
              },
              {
                title: "Virtual Assistant",
                description:
                  "Implement intelligent virtual assistants to enhance customer service and streamline internal operations.",
                link: "/solutions/virtual-assistant",
              },
              {
                title: "Data Analyzer",
                description:
                  "Transform raw data into actionable insights with our advanced AI-powered data analysis tools.",
                link: "/solutions/data-analyzer",
              },
            ].map((solution, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-8 card-hover">
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <Link href={solution.link} className="text-primary hover:underline font-medium flex items-center">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform with AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "AI-Powered Customer Service for RetailCorp",
                category: "Virtual Assistant",
                image: "/placeholder.svg?height=300&width=500",
                link: "/portfolios/retailcorp",
              },
              {
                title: "Data Analysis Platform for FinTech Solutions",
                category: "Data Analyzer",
                image: "/placeholder.svg?height=300&width=500",
                link: "/portfolios/fintech-solutions",
              },
              {
                title: "Personalized Marketing Campaign for E-commerce Giant",
                category: "Personalized AI Marketing",
                image: "/placeholder.svg?height=300&width=500",
                link: "/portfolios/ecommerce-marketing",
              },
              {
                title: "Healthcare Data Management System",
                category: "Customized Software Solution",
                image: "/placeholder.svg?height=300&width=500",
                link: "/portfolios/healthcare-data",
              },
            ].map((item, index) => (
              <Link href={item.link} key={index} className="group">
                <div className="relative overflow-hidden rounded-lg border border-border card-hover h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
                    <span className="text-sm text-primary font-medium mb-2">{item.category}</span>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="rounded-full">
              <Link href="/portfolios">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading companies across industries trust Envision Lab to deliver innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative h-16 w-32 opacity-50 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Company ${index + 1}`}
                    alt={`Company ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in AI and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "The Future of Generative AI in Business",
                excerpt:
                  "Explore how generative AI is transforming business operations and creating new opportunities for growth.",
                date: "March 25, 2025",
                category: "AI Trends",
                image: "/placeholder.svg?height=300&width=500",
                link: "/blog/future-of-generative-ai",
              },
              {
                title: "Implementing Virtual Assistants: Best Practices",
                excerpt: "Learn the key strategies for successfully implementing virtual assistants in your business.",
                date: "March 18, 2025",
                category: "Virtual Assistants",
                image: "/placeholder.svg?height=300&width=500",
                link: "/blog/virtual-assistant-best-practices",
              },
              {
                title: "Data Analysis: Turning Information into Insights",
                excerpt:
                  "Discover how advanced data analysis techniques can help you extract valuable insights from your business data.",
                date: "March 10, 2025",
                category: "Data Analysis",
                image: "/placeholder.svg?height=300&width=500",
                link: "/blog/data-analysis-insights",
              },
            ].map((post, index) => (
              <Link href={post.link} key={index} className="group">
                <div className="border border-border rounded-lg overflow-hidden card-hover h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-primary px-2 py-1 rounded-full border border-primary/20 bg-primary/10">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="rounded-full">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Message From Our Founders</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-background/10 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 flex gap-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-white">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Founder 1" fill className="object-cover" />
                </div>
                <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-white">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Founder 2" fill className="object-cover" />
                </div>
              </div>
              <div>
                <blockquote className="italic text-muted-foreground mb-6">
                  "At Envision Lab, we believe that AI is not just a technology, but a transformative force that can
                  revolutionize how businesses operate and deliver value to their customers. Our mission is to make
                  advanced AI solutions accessible to businesses of all sizes, helping them stay competitive in an
                  increasingly digital world."
                </blockquote>
                <p className="text-right font-semibold">- Jane Smith & John Doe, Co-Founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}