import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ITConsultingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">IT & Business Consulting</h1>
          <p className="text-xl text-muted-foreground">
            Strategic guidance on digital transformation and AI integration to optimize your business processes
          </p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="IT & Business Consulting"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Navigate Your Digital Transformation Journey</h2>
          <p>
            Digital transformation is no longer optional—it's essential for business survival and growth. Envision Lab's
            IT & Business Consulting services provide expert guidance to help you navigate the complexities of
            technological change and AI integration, ensuring your organization stays competitive in the digital age.
          </p>

          <h2>Our Consulting Approach</h2>
          <p>
            We take a holistic approach to consulting, considering your business objectives, current technological
            landscape, organizational culture, and industry challenges. Our team of experienced consultants works
            closely with your stakeholders to develop tailored strategies that drive meaningful results.
          </p>

          <h3>Services We Offer</h3>
          <ul>
            <li>
              <strong>Digital Strategy Development:</strong> Create a comprehensive roadmap for your digital
              transformation journey
            </li>
            <li>
              <strong>AI Readiness Assessment:</strong> Evaluate your organization's preparedness for AI adoption
            </li>
            <li>
              <strong>Technology Stack Optimization:</strong> Identify the right technologies to support your business
              goals
            </li>
            <li>
              <strong>Process Reengineering:</strong> Redesign workflows to maximize efficiency and effectiveness
            </li>
            <li>
              <strong>Change Management:</strong> Facilitate smooth transitions during technological implementations
            </li>
            <li>
              <strong>Data Strategy:</strong> Develop frameworks for effective data collection, management, and
              utilization
            </li>
          </ul>

          <h2>Benefits</h2>
          <ul>
            <li>Accelerate your digital transformation initiatives</li>
            <li>Reduce risks associated with technology investments</li>
            <li>Improve operational efficiency and reduce costs</li>
            <li>Enhance decision-making through data-driven insights</li>
            <li>Build internal capabilities for ongoing innovation</li>
            <li>Gain competitive advantage through strategic technology adoption</li>
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "Envision Lab's consulting team helped us identify the right AI technologies to implement and created a
            clear roadmap for our digital transformation. Their expertise was invaluable in navigating complex decisions
            and ensuring our investments delivered tangible business value."
          </blockquote>
          <p className="font-semibold">- CIO, Financial Services Company</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

