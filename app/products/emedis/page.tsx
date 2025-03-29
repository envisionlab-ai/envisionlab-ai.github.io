import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function EmedisPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Emedis</h1>
          <p className="text-xl text-muted-foreground">AI-Powered Electronic Medical Record System</p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Emedis EMR System"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Revolutionizing Healthcare with AI</h2>
          <p>
            Emedis is an innovative Electronic Medical Record (EMR) system that leverages artificial intelligence to
            improve patient care, streamline clinical workflows, and enhance healthcare decision-making. Designed by
            healthcare professionals for healthcare professionals, Emedis addresses the real challenges faced in modern
            medical practices.
          </p>

          <h2>Key Features</h2>

          <h3>Intelligent Documentation</h3>
          <p>
            Emedis uses advanced natural language processing to automate and enhance medical documentation, allowing
            healthcare providers to focus more on patient care and less on paperwork.
          </p>
          <ul>
            <li>Voice-to-text transcription with medical terminology recognition</li>
            <li>Automated coding suggestions for billing accuracy</li>
            <li>Smart templates that adapt to different specialties</li>
            <li>Contextual documentation assistance</li>
          </ul>

          <h3>Clinical Decision Support</h3>
          <p>
            Access evidence-based recommendations and insights at the point of care to support better clinical
            decision-making and improve patient outcomes.
          </p>
          <ul>
            <li>Drug interaction alerts and medication management</li>
            <li>Diagnosis suggestion based on symptoms and patient history</li>
            <li>Treatment protocol recommendations</li>
            <li>Risk stratification for preventive care</li>
          </ul>

          <h3>Patient Engagement</h3>
          <p>
            Enhance the patient experience with tools that facilitate communication, education, and active participation
            in their healthcare journey.
          </p>
          <ul>
            <li>Secure patient portal with messaging capabilities</li>
            <li>Personalized health education materials</li>
            <li>Appointment scheduling and reminders</li>
            <li>Remote monitoring integration</li>
          </ul>

          <h3>Analytics & Insights</h3>
          <p>
            Gain valuable insights into practice performance, patient populations, and clinical outcomes to drive
            continuous improvement.
          </p>
          <ul>
            <li>Population health management dashboards</li>
            <li>Clinical quality metrics tracking</li>
            <li>Operational efficiency analytics</li>
            <li>Predictive analytics for patient care needs</li>
          </ul>

          <h2>Implementation & Support</h2>
          <p>
            We understand that implementing a new EMR system is a significant undertaking. That's why Emedis comes with
            comprehensive implementation services and ongoing support:
          </p>
          <ul>
            <li>Customized implementation plan tailored to your practice</li>
            <li>Data migration from existing systems</li>
            <li>Staff training and certification</li>
            <li>24/7 technical support</li>
            <li>Regular updates and enhancements</li>
          </ul>

          <h2>Pricing</h2>
          <p>Emedis offers flexible pricing models to accommodate healthcare organizations of all sizes:</p>
          <ul>
            <li>
              <strong>Per Provider:</strong> Starting at $499/month per provider
            </li>
            <li>
              <strong>Enterprise:</strong> Custom pricing for hospitals and large healthcare networks
            </li>
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Customer Testimonial</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "Emedis has transformed our practice. The AI-assisted documentation has saved our physicians an average of 2
            hours per day, and the clinical decision support has helped us improve our quality metrics significantly.
            The implementation was smooth, and the ongoing support has been exceptional."
          </blockquote>
          <p className="font-semibold">- Medical Director, Primary Care Practice</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full mr-4">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/products/emedis/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

