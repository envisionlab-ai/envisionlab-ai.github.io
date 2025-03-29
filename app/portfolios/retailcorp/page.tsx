import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function RetailCorpPortfolioPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/portfolios" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Portfolios
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-white mb-4">
            Virtual Assistant
          </span>
          <h1 className="text-4xl font-bold mb-4 gradient-text">AI-Powered Customer Service for RetailCorp</h1>
          <p className="text-xl text-muted-foreground">
            How we transformed customer service operations for a leading retail chain
          </p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1000&text=RetailCorp+Case+Study"
            alt="RetailCorp Case Study"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Industry</h3>
            <p className="text-muted-foreground">Retail / E-commerce</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">6 months</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-muted-foreground">Virtual Assistant Implementation</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>The Challenge</h2>
          <p>
            RetailCorp, a leading retail chain with over 500 stores nationwide and a robust online presence, was
            struggling with customer service scalability. With a growing customer base and increasing query volume,
            their traditional customer service model was becoming:
          </p>
          <ul>
            <li>Costly to maintain and scale</li>
            <li>Unable to provide 24/7 support without significant investment</li>
            <li>Inconsistent in response quality and time</li>
            <li>Overwhelmed during peak shopping seasons</li>
          </ul>
          <p>
            The company needed a solution that could handle routine customer inquiries efficiently while allowing human
            agents to focus on complex issues requiring personal attention.
          </p>

          <h2>Our Approach</h2>
          <p>
            After a thorough analysis of RetailCorp's customer service operations and common inquiry patterns, we
            developed a comprehensive implementation strategy:
          </p>
          <ol>
            <li>
              <strong>Data Analysis:</strong> We analyzed two years of customer service interactions to identify common
              questions, issues, and resolution patterns.
            </li>
            <li>
              <strong>AI Model Development:</strong> We trained a custom natural language processing model on
              RetailCorp's specific product catalog, policies, and customer interaction history.
            </li>
            <li>
              <strong>Omnichannel Integration:</strong> We implemented the virtual assistant across multiple channels
              including website chat, mobile app, and social media platforms.
            </li>
            <li>
              <strong>Human-AI Collaboration:</strong> We designed a seamless handoff system between the AI assistant
              and human agents for complex queries.
            </li>
            <li>
              <strong>Continuous Learning:</strong> We established a feedback loop system to continuously improve the
              assistant's responses based on customer interactions.
            </li>
          </ol>

          <h2>The Solution</h2>
          <p>
            Our team developed and deployed "RetailBot," an AI-powered virtual assistant specifically tailored to
            RetailCorp's needs. Key features included:
          </p>
          <ul>
            <li>Natural language understanding capable of interpreting complex customer queries</li>
            <li>Product recommendation engine based on customer preferences and purchase history</li>
            <li>Order tracking and status updates in real-time</li>
            <li>Return and exchange processing capabilities</li>
            <li>Inventory checking across all store locations</li>
            <li>Personalized responses based on customer history</li>
            <li>Seamless escalation to human agents when necessary</li>
          </ul>

          <h2>Results</h2>
          <p>
            The implementation of RetailBot transformed RetailCorp's customer service operations with impressive
            results:
          </p>
          <ul>
            <li>
              <strong>75% reduction</strong> in average response time to customer inquiries
            </li>
            <li>
              <strong>40% increase</strong> in customer satisfaction scores
            </li>
            <li>
              <strong>65% of inquiries</strong> successfully resolved without human intervention
            </li>
            <li>
              <strong>30% reduction</strong> in customer service operational costs
            </li>
            <li>
              <strong>24/7 support</strong> availability without additional staffing
            </li>
            <li>
              <strong>50% decrease</strong> in agent turnover due to more engaging work
            </li>
          </ul>
          <p>
            Additionally, the data collected through RetailBot provided valuable insights into customer preferences and
            pain points, informing product development and marketing strategies.
          </p>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <blockquote className="italic border-l-4 border-border pl-4 mb-4 text-muted-foreground">
            "Implementing Envision Lab's virtual assistant solution has been transformative for our customer service
            operations. Not only have we seen dramatic improvements in efficiency and customer satisfaction, but we've
            also gained valuable insights that have informed our broader business strategy. The team at Envision Lab was
            exceptional throughout the entire process, from initial analysis to ongoing optimization."
          </blockquote>
          <p className="font-semibold">- Sarah Johnson, Chief Customer Officer, RetailCorp</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/portfolios">View More Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

