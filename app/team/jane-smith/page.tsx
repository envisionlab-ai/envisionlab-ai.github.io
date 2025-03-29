import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function JaneSmithProfilePage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/team" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Team
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="border border-border rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Jane+Smith"
                  alt="Jane Smith"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h1 className="text-2xl font-bold mb-2">Jane Smith</h1>
              <p className="text-primary font-medium mb-4">Co-Founder & Business Lead</p>

              <div className="flex gap-3 mb-6">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail size={18} />
                </Button>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-sm font-semibold text-foreground">Education</p>
                  <p>EDHEC Business School</p>
                  <p>MBA, Business Administration</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p>Tech City, TC</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Languages</p>
                  <p>English, French, Mandarin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>About Jane</h2>
              <p>
                Jane Smith is the Co-Founder and Business Lead at Envision Lab, where she drives the company's strategic
                vision and business development initiatives. With over 15 years of experience in business strategy and
                AI implementation, Jane has helped numerous companies successfully integrate AI solutions to drive
                growth and innovation.
              </p>
              <p>
                Prior to founding Envision Lab, Jane served as the Director of Digital Transformation at TechGlobal,
                where she led initiatives to modernize business processes through AI and automation technologies. Her
                work resulted in a 40% increase in operational efficiency and significant cost savings for the
                organization.
              </p>
              <p>
                Jane's expertise lies in identifying business opportunities and translating them into technological
                solutions. She has a unique ability to bridge the gap between technical capabilities and business needs,
                ensuring that AI implementations deliver tangible value and ROI.
              </p>

              <h2>Expertise</h2>
              <ul>
                <li>Business Strategy Development</li>
                <li>AI Implementation and Integration</li>
                <li>Digital Transformation</li>
                <li>Change Management</li>
                <li>Strategic Partnerships</li>
                <li>Product Development</li>
              </ul>

              <h2>Professional Experience</h2>
              <h3>Envision Lab</h3>
              <p>
                <em>Co-Founder & Business Lead (2020 - Present)</em>
              </p>
              <ul>
                <li>
                  Co-founded Envision Lab with a mission to make advanced AI technologies accessible to businesses of
                  all sizes
                </li>
                <li>Developed the company's strategic vision and business model</li>
                <li>Led business development efforts resulting in partnerships with over 50 enterprise clients</li>
                <li>Oversees product strategy and market positioning</li>
                <li>Secured $12M in Series A funding to accelerate growth</li>
              </ul>

              <h3>TechGlobal</h3>
              <p>
                <em>Director of Digital Transformation (2015 - 2020)</em>
              </p>
              <ul>
                <li>Led company-wide digital transformation initiatives</li>
                <li>Implemented AI solutions that increased operational efficiency by 40%</li>
                <li>Developed and executed change management strategies to ensure successful technology adoption</li>
                <li>Managed cross-functional teams of business analysts, data scientists, and developers</li>
              </ul>

              <h3>McKinsey & Company</h3>
              <p>
                <em>Senior Consultant (2010 - 2015)</em>
              </p>
              <ul>
                <li>Advised Fortune 500 companies on technology strategy and implementation</li>
                <li>Specialized in AI and machine learning applications for business</li>
                <li>Conducted market analyses and developed growth strategies for technology clients</li>
              </ul>

              <h2>Education</h2>
              <h3>EDHEC Business School</h3>
              <p>
                <em>MBA, Business Administration (2008 - 2010)</em>
              </p>
              <p>Graduated with honors. Specialized in Technology Management and Innovation.</p>

              <h3>Massachusetts Institute of Technology</h3>
              <p>
                <em>B.S., Computer Science (2004 - 2008)</em>
              </p>
              <p>Minor in Economics. Thesis on "AI Applications in Business Decision Making."</p>

              <h2>Publications and Speaking</h2>
              <ul>
                <li>
                  "The Business Case for AI: Measuring ROI in the Age of Automation" - Harvard Business Review, 2023
                </li>
                <li>
                  "Bridging the Gap: How Business Leaders Can Effectively Communicate with Technical Teams" - Forbes,
                  2022
                </li>
                <li>Keynote Speaker, AI Business Summit, 2024</li>
                <li>Panel Moderator, "The Future of Work in an AI-Driven Economy," World Economic Forum, 2023</li>
              </ul>

              <h2>Personal Philosophy</h2>
              <p>
                "I believe that technology should serve human needs and enhance human capabilities, not replace them. My
                work is driven by the conviction that AI, when implemented thoughtfully and ethically, can create
                tremendous value for businesses while also contributing positively to society. At Envision Lab, we're
                committed to developing AI solutions that are not only powerful and innovative but also responsible and
                human-centered."
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet the Rest of Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-3">
              <div className="border border-border rounded-lg overflow-hidden bg-secondary card-hover">
                <div className="p-6 flex items-center gap-6">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=John+Doe"
                      alt="John Doe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-primary mb-2">Co-Founder & Technical Lead</p>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link href="/team/john-doe">View Profile</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

