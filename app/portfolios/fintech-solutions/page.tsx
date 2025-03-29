import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FintechSolutionsPortfolioPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/portfolios" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Portfolios
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20 text-white mb-4">
            Data Analyzer
          </span>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Data Analysis Platform for FinTech Solutions</h1>
          <p className="text-xl text-muted-foreground">
            Leveraging AI to transform financial data into actionable investment insights
          </p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1000&text=FinTech+Solutions+Case+Study"
            alt="FinTech Solutions Case Study"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Industry</h3>
            <p className="text-muted-foreground">Financial Technology</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">9 months</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-muted-foreground">Custom Data Analysis Platform</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>The Challenge</h2>
          <p>
            FinTech Solutions, a growing investment management firm, was struggling to process and analyze the vast
            amounts of financial data available to them. Their challenges included:
          </p>
          <ul>
            <li>Manual analysis of market trends was time-consuming and error-prone</li>
            <li>Inability to process unstructured data from news sources and social media</li>
            <li>Delayed insights resulting in missed investment opportunities</li>
            <li>Difficulty in identifying correlations across different asset classes and markets</li>
            <li>Limited capacity to perform predictive analysis for future market movements</li>
          </ul>
          <p>
            The firm needed a sophisticated data analysis solution that could process diverse data sources in real-time
            and provide actionable investment insights to gain a competitive edge.
          </p>

          <h2>Our Approach</h2>
          <p>We developed a comprehensive strategy to address FinTech Solutions' data analysis challenges:</p>
          <ol>
            <li>
              <strong>Data Integration:</strong> We created a unified data pipeline to collect and process data from
              multiple sources, including market feeds, financial statements, news APIs, and social media.
            </li>
            <li>
              <strong>AI Model Development:</strong> We built custom machine learning models for sentiment analysis,
              anomaly detection, and predictive forecasting specific to financial markets.
            </li>
            <li>
              <strong>Real-time Processing:</strong> We implemented a scalable architecture capable of processing
              streaming data with minimal latency.
            </li>
            <li>
              <strong>Visualization Framework:</strong> We designed intuitive dashboards and visualization tools to make
              complex data insights accessible to investment managers.
            </li>
            <li>
              <strong>Backtesting Environment:</strong> We created a system to validate investment strategies against
              historical data before real-world implementation.
            </li>
          </ol>

          <h2>The Solution</h2>
          <p>
            Our team developed "FinSight," a comprehensive AI-powered data analysis platform tailored to FinTech
            Solutions' specific needs. Key features included:
          </p>
          <ul>
            <li>Real-time market data processing and analysis</li>
            <li>Natural language processing for news and social media sentiment analysis</li>
            <li>Anomaly detection to identify unusual market patterns</li>
            <li>Predictive analytics for market trend forecasting</li>
            <li>Correlation analysis across different asset classes</li>
            <li>Customizable alert system for investment opportunities</li>
            <li>Interactive visualization dashboards for different user roles</li>
            <li>Strategy backtesting and simulation capabilities</li>
          </ul>

          <h2>Results</h2>
          <p>
            The implementation of FinSight transformed FinTech Solutions' investment approach with remarkable results:
          </p>
          <ul>
            <li>
              <strong>28% increase</strong> in investment returns within the first year
            </li>
            <li>
              <strong>65% reduction</strong> in time spent on data analysis
            </li>
            <li>
              <strong>40% improvement</strong> in risk assessment accuracy
            </li>
            <li>
              <strong>3x increase</strong> in the number of investment opportunities identified
            </li>
            <li>
              <strong>50% reduction</strong> in false positive signals
            </li>
            <li>
              <strong>Real-time insights</strong> enabling faster decision-making
            </li>
          </ul>
          <p>
            Additionally, the platform's ability to identify non-obvious correlations between different market factors
            led to several innovative investment strategies that have become core to FinTech Solutions' competitive
            advantage.
          </p>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <blockquote className="italic border-l-4 border-white pl-4 mb-4 text-muted-foreground">
            "FinSight has completely transformed how we approach investment analysis. The platform's ability to process
            vast amounts of data and surface meaningful insights has given us a significant edge in the market. What
            impressed us most was Envision Lab's deep understanding of both AI technology and financial markets. They
            didn't just deliver a technical solution; they delivered a business advantage."
          </blockquote>
          <p className="font-semibold">- Michael Chen, Chief Investment Officer, FinTech Solutions</p>
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

