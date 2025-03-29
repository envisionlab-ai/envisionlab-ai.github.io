import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, Github } from "lucide-react"

export default function JohnDoeProfilePage() {
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
                  src="/placeholder.svg?height=600&width=600&text=John+Doe"
                  alt="John Doe"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-primary font-medium mb-4">Co-Founder & Technical Lead</p>

              <div className="flex gap-3 mb-6">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail size={18} />
                </Button>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-sm font-semibold text-foreground">Education</p>
                  <p>Tokopedia University</p>
                  <p>M.S., Computer Science</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p>Tech City, TC</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Languages</p>
                  <p>English, Indonesian, Python, JavaScript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>About John</h2>
              <p>
                John Doe is the Co-Founder and Technical Lead at Envision Lab, where he oversees all technical aspects
                of the company's AI solutions and products. With over 12 years of experience in software development and
                AI technologies, John has built numerous cutting-edge systems that have transformed how businesses
                operate.
              </p>
              <p>
                Before co-founding Envision Lab, John was the Lead AI Engineer at TechInnovate, where he developed
                proprietary machine learning algorithms that improved prediction accuracy by 35% and reduced
                computational costs by 40%. His work has been recognized in multiple technical publications and
                conferences.
              </p>
              <p>
                John is passionate about making AI technologies accessible and practical for businesses of all sizes. He
                believes in building systems that not only leverage the latest research but are also robust, scalable,
                and aligned with real business needs.
              </p>

              <h2>Technical Expertise</h2>
              <ul>
                <li>Machine Learning & Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Reinforcement Learning</li>
                <li>Distributed Systems</li>
                <li>Cloud Architecture</li>
                <li>DevOps & MLOps</li>
              </ul>

              <h2>Professional Experience</h2>
              <h3>Envision Lab</h3>
              <p>
                <em>Co-Founder & Technical Lead (2020 - Present)</em>
              </p>
              <ul>
                <li>Co-founded Envision Lab to democratize access to advanced AI technologies</li>
                <li>Leads a team of 25 engineers, data scientists, and ML researchers</li>
                <li>Architected the company's core AI platform that powers all product offerings</li>
                <li>Developed proprietary algorithms for natural language understanding and generation</li>
                <li>Established technical standards and best practices for all development work</li>
                <li>Oversees the technical implementation of client projects</li>
              </ul>

              <h3>TechInnovate</h3>
              <p>
                <em>Lead AI Engineer (2016 - 2020)</em>
              </p>
              <ul>
                <li>Led the development of the company's machine learning infrastructure</li>
                <li>Created novel algorithms for predictive analytics that improved accuracy by 35%</li>
                <li>Designed and implemented a scalable data processing pipeline handling 10TB+ daily</li>
                <li>Mentored junior engineers and data scientists</li>
                <li>Collaborated with product teams to translate business requirements into technical solutions</li>
              </ul>

              <h3>Google</h3>
              <p>
                <em>Senior Software Engineer (2012 - 2016)</em>
              </p>
              <ul>
                <li>Worked on the Google Assistant team, focusing on natural language understanding</li>
                <li>Contributed to the development of speech recognition algorithms</li>
                <li>Implemented machine learning models for intent classification and entity extraction</li>
                <li>Optimized models for mobile deployment with limited computational resources</li>
              </ul>

              <h2>Education</h2>
              <h3>Tokopedia University</h3>
              <p>
                <em>M.S., Computer Science (2010 - 2012)</em>
              </p>
              <p>
                Specialized in Artificial Intelligence and Machine Learning. Thesis: "Efficient Deep Learning Approaches
                for Natural Language Understanding."
              </p>

              <h3>National University of Singapore</h3>
              <p>
                <em>B.S., Computer Science (2006 - 2010)</em>
              </p>
              <p>Graduated summa cum laude. Minor in Mathematics.</p>

              <h2>Open Source Contributions</h2>
              <ul>
                <li>Core contributor to TensorFlow, with focus on NLP components</li>
                <li>Creator of FastNLP, a lightweight library for rapid NLP prototyping</li>
                <li>Contributor to Hugging Face Transformers library</li>
                <li>Maintainer of several popular AI-related GitHub repositories with 10,000+ stars</li>
              </ul>

              <h2>Publications and Conferences</h2>
              <ul>
                <li>"Efficient Transformer Architectures for Resource-Constrained Environments" - NeurIPS 2023</li>
                <li>"Practical Approaches to Explainable AI in Production Systems" - ICML 2022</li>
                <li>"Scaling Language Models for Enterprise Applications" - ACL 2021</li>
                <li>Speaker, PyData Global Conference, 2024</li>
                <li>Workshop Organizer, "AI Systems at Scale," ICLR 2023</li>
              </ul>

              <h2>Technical Philosophy</h2>
              <p>
                "I believe that the most powerful AI systems are those that combine state-of-the-art research with
                pragmatic engineering. At Envision Lab, we focus on building solutions that aren't just technically
                impressive but also reliable, maintainable, and aligned with real business needs. I'm particularly
                passionate about creating AI systems that augment human capabilities rather than replace them, enabling
                people to work more effectively and creatively."
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
                      src="/placeholder.svg?height=200&width=200&text=Jane+Smith"
                      alt="Jane Smith"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jane Smith</h3>
                    <p className="text-primary mb-2">Co-Founder & Business Lead</p>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link href="/team/jane-smith">View Profile</Link>
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

