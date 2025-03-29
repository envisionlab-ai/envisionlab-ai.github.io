import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FifiPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Fifi</h1>
          <p className="text-xl text-muted-foreground">Personalized AI Marketing SaaS Platform</p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Fifi AI Marketing Platform"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Meet Fifi: Your AI Marketing Assistant</h2>
          <p>
            Fifi is our flagship SaaS platform that puts the power of AI-driven marketing in your hands. Designed for
            marketing teams of all sizes, Fifi automates personalization at scale, helping you create, deploy, and
            optimize marketing campaigns that truly resonate with your audience.
          </p>

          <h2>Key Features</h2>

          <h3>Audience Intelligence</h3>
          <p>
            Fifi analyzes customer data from multiple sources to build comprehensive profiles and segments. The platform
            continuously learns from customer interactions to refine these profiles, ensuring your targeting remains
            accurate over time.
          </p>
          <ul>
            <li>Automated customer segmentation</li>
            <li>Behavioral analysis and prediction</li>
            <li>Interest and preference mapping</li>
            <li>Customer journey tracking</li>
          </ul>

          <h3>Content Generation</h3>
          <p>
            Create personalized marketing content at scale with Fifi's AI-powered content generation tools. From email
            subject lines to social media posts, Fifi helps you craft messages that speak directly to each segment of
            your audience.
          </p>
          <ul>
            <li>AI-generated copy suggestions</li>
            <li>Personalized email templates</li>
            <li>Dynamic content blocks</li>
            <li>A/B testing recommendations</li>
          </ul>

          <h3>Campaign Automation</h3>
          <p>
            Set up sophisticated marketing campaigns that automatically adapt based on customer behavior and engagement.
            Fifi handles the complexity, allowing you to deliver the right message at the right time through the right
            channel.
          </p>
          <ul>
            <li>Multi-channel campaign orchestration</li>
            <li>Trigger-based messaging</li>
            <li>Personalized customer journeys</li>
            <li>Real-time optimization</li>
          </ul>

          <h3>Analytics & Insights</h3>
          <p>
            Gain deep insights into campaign performance and customer engagement with Fifi's comprehensive analytics
            dashboard. Understand what's working, what's not, and how to improve your marketing efforts.
          </p>
          <ul>
            <li>Real-time performance metrics</li>
            <li>Conversion attribution</li>
            <li>ROI calculation</li>
            <li>Predictive performance modeling</li>
          </ul>

          <h2>Pricing</h2>
          <p>Fifi is available in three tiers to suit businesses of different sizes and needs:</p>
          <ul>
            <li>
              <strong>Starter:</strong> $499/month - For small businesses just beginning with AI marketing
            </li>
            <li>
              <strong>Professional:</strong> $999/month - For growing businesses with established marketing operations
            </li>
            <li>
              <strong>Enterprise:</strong> Custom pricing - For large organizations with complex marketing needs
            </li>
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Customer Success</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "Fifi has transformed our marketing approach. We've seen a 40% increase in email open rates and a 25% boost
            in conversion since implementing the platform. The AI-generated content suggestions have been particularly
            valuable for our small team."
          </blockquote>
          <p className="font-semibold">- Marketing Manager, E-commerce Brand</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full mr-4">
            <Link href="/contact">Request a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/products/fifi/pricing">View Pricing Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

