import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PersonalizedMarketingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Personalized AI Marketing</h1>
          <p className="text-xl text-muted-foreground">
            Leverage the power of AI to create highly targeted marketing campaigns that resonate with your audience
          </p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Personalized AI Marketing"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Transform Your Marketing Strategy</h2>
          <p>
            In today's competitive landscape, generic marketing messages no longer cut through the noise. Envision Lab's
            Personalized AI Marketing solution uses advanced machine learning algorithms to analyze customer data and
            create highly targeted campaigns that speak directly to individual preferences and behaviors.
          </p>

          <h2>How It Works</h2>
          <p>
            Our AI-powered platform collects and analyzes data from multiple touchpoints to build comprehensive customer
            profiles. These profiles enable us to predict customer preferences, anticipate needs, and deliver
            personalized content at the right time through the right channels.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Customer Segmentation:</strong> Automatically group customers based on behavior, preferences, and
              purchase history
            </li>
            <li>
              <strong>Content Personalization:</strong> Generate tailored content that resonates with specific audience
              segments
            </li>
            <li>
              <strong>Predictive Analytics:</strong> Anticipate customer needs and behaviors to deliver proactive
              marketing
            </li>
            <li>
              <strong>Omnichannel Delivery:</strong> Ensure consistent personalized experiences across all customer
              touchpoints
            </li>
            <li>
              <strong>Performance Tracking:</strong> Measure and optimize campaign performance in real-time
            </li>
          </ul>

          <h2>Benefits</h2>
          <ul>
            <li>Increase conversion rates by up to 30%</li>
            <li>Improve customer engagement and loyalty</li>
            <li>Reduce marketing waste by focusing resources on high-potential customers</li>
            <li>Gain deeper insights into customer preferences and behaviors</li>
            <li>Stay ahead of competitors with cutting-edge AI technology</li>
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Success Story</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "Implementing Envision Lab's Personalized AI Marketing solution increased our conversion rates by 35% and
            customer retention by 42%. The insights we gained have transformed how we approach our marketing strategy."
          </blockquote>
          <p className="font-semibold">- Marketing Director, E-commerce Giant</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Get Started with Personalized Marketing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

