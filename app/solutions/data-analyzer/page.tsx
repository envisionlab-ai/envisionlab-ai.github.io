import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function DataAnalyzerPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Data Analyzer</h1>
          <p className="text-xl text-muted-foreground">
            Transform raw data into actionable insights with our advanced AI-powered data analysis tools
          </p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Data Analyzer"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Unlock the Power of Your Data</h2>
          <p>
            In today's data-driven world, organizations collect vast amounts of information, but many struggle to
            extract meaningful insights. Envision Lab's Data Analyzer solution employs cutting-edge AI and machine
            learning techniques to help you discover patterns, trends, and correlations that drive better business
            decisions.
          </p>

          <h2>Comprehensive Data Analysis</h2>
          <p>
            Our platform integrates with your existing data sources to provide a unified analysis environment. Whether
            you're dealing with structured databases, unstructured text, images, or real-time streams, our Data Analyzer
            can process and interpret diverse data types to deliver comprehensive insights.
          </p>

          <h3>Key Capabilities</h3>
          <ul>
            <li>
              <strong>Predictive Analytics:</strong> Forecast future trends and outcomes based on historical data
            </li>
            <li>
              <strong>Anomaly Detection:</strong> Identify unusual patterns that may indicate opportunities or risks
            </li>
            <li>
              <strong>Natural Language Processing:</strong> Extract insights from text data including customer feedback,
              social media, and documents
            </li>
            <li>
              <strong>Data Visualization:</strong> Transform complex data into intuitive visual representations
            </li>
            <li>
              <strong>Automated Reporting:</strong> Generate regular insights reports tailored to different stakeholders
            </li>
            <li>
              <strong>Real-time Analysis:</strong> Process and analyze data as it's generated for immediate insights
            </li>
          </ul>

          <h2>Benefits</h2>
          <ul>
            <li>Make data-driven decisions with confidence</li>
            <li>Identify new business opportunities and market trends</li>
            <li>Optimize operations and reduce costs</li>
            <li>Enhance customer understanding and improve experiences</li>
            <li>Mitigate risks through early detection of potential issues</li>
            <li>Democratize data insights across your organization</li>
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Success Story</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "Envision Lab's Data Analyzer platform helped us identify market trends that we had completely missed. The
            insights generated led to a product pivot that increased our revenue by 28% in just six months. The ROI has
            been exceptional."
          </blockquote>
          <p className="font-semibold">- Chief Data Officer, FinTech Solutions</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Start Analyzing Your Data</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

