import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, Github } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data for team members
const teamData = {
  "jane-smith": {
    name: "Jane Smith",
    role: "Co-Founder & Business Lead",
    bio: "Jane Smith is the Co-Founder and Business Lead at Envision Lab, where she drives the company's strategic vision and business development initiatives. With over 15 years of experience in business strategy and AI implementation, Jane has helped numerous companies successfully integrate AI solutions to drive growth and innovation.",
    longBio: `
      <p>
        Jane Smith is the Co-Founder and Business Lead at Envision Lab, where she drives the company's strategic vision and business development initiatives. With over 15 years of experience in business strategy and AI implementation, Jane has helped numerous companies successfully integrate AI solutions to drive growth and innovation.
      </p>
      <p>
        Prior to founding Envision Lab, Jane served as the Director of Digital Transformation at TechGlobal, where she led initiatives to modernize business processes through AI and automation technologies. Her work resulted in a 40% increase in operational efficiency and significant cost savings for the organization.
      </p>
      <p>
        Jane's expertise lies in identifying business opportunities and translating them into technological solutions. She has a unique ability to bridge the gap between technical capabilities and business needs, ensuring that AI implementations deliver tangible value and ROI.
      </p>
    `,
    image: "/placeholder.svg?height=600&width=600&text=Jane+Smith",
    education: [
      {
        institution: "EDHEC Business School",
        degree: "MBA, Business Administration",
        years: "2008 - 2010",
        details: "Graduated with honors. Specialized in Technology Management and Innovation.",
      },
      {
        institution: "Massachusetts Institute of Technology",
        degree: "B.S., Computer Science",
        years: "2004 - 2008",
        details: 'Minor in Economics. Thesis on "AI Applications in Business Decision Making."',
      },
    ],
    experience: [
      {
        company: "Envision Lab",
        role: "Co-Founder & Business Lead",
        years: "2020 - Present",
        achievements: [
          "Co-founded Envision Lab with a mission to make advanced AI technologies accessible to businesses of all sizes",
          "Developed the company's strategic vision and business model",
          "Led business development efforts resulting in partnerships with over 50 enterprise clients",
          "Oversees product strategy and market positioning",
          "Secured $12M in Series A funding to accelerate growth",
        ],
      },
      {
        company: "TechGlobal",
        role: "Director of Digital Transformation",
        years: "2015 - 2020",
        achievements: [
          "Led company-wide digital transformation initiatives",
          "Implemented AI solutions that increased operational efficiency by 40%",
          "Developed and executed change management strategies to ensure successful technology adoption",
          "Managed cross-functional teams of business analysts, data scientists, and developers",
        ],
      },
      {
        company: "McKinsey & Company",
        role: "Senior Consultant",
        years: "2010 - 2015",
        achievements: [
          "Advised Fortune 500 companies on technology strategy and implementation",
          "Specialized in AI and machine learning applications for business",
          "Conducted market analyses and developed growth strategies for technology clients",
        ],
      },
    ],
    expertise: [
      "Business Strategy Development",
      "AI Implementation and Integration",
      "Digital Transformation",
      "Change Management",
      "Strategic Partnerships",
      "Product Development",
    ],
    publications: [
      '"The Business Case for AI: Measuring ROI in the Age of Automation" - Harvard Business Review, 2023',
      '"Bridging the Gap: How Business Leaders Can Effectively Communicate with Technical Teams" - Forbes, 2022',
      "Keynote Speaker, AI Business Summit, 2024",
      'Panel Moderator, "The Future of Work in an AI-Driven Economy," World Economic Forum, 2023',
    ],
    philosophy:
      "I believe that technology should serve human needs and enhance human capabilities, not replace them. My work is driven by the conviction that AI, when implemented thoughtfully and ethically, can create tremendous value for businesses while also contributing positively to society. At Envision Lab, we're committed to developing AI solutions that are not only powerful and innovative but also responsible and human-centered.",
    location: "Tech City, TC",
    languages: ["English", "French", "Mandarin"],
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "jane@envisionlab.com",
    },
  },
  "john-doe": {
    name: "John Doe",
    role: "Co-Founder & Technical Lead",
    bio: "John Doe is the Co-Founder and Technical Lead at Envision Lab, where he oversees all technical aspects of the company's AI solutions and products. With over 12 years of experience in software development and AI technologies, John has built numerous cutting-edge systems that have transformed how businesses operate.",
    longBio: `
      <p>
        John Doe is the Co-Founder and Technical Lead at Envision Lab, where he oversees all technical aspects of the company's AI solutions and products. With over 12 years of experience in software development and AI technologies, John has built numerous cutting-edge systems that have transformed how businesses operate.
      </p>
      <p>
        Before co-founding Envision Lab, John was the Lead AI Engineer at TechInnovate, where he developed proprietary machine learning algorithms that improved prediction accuracy by 35% and reduced computational costs by 40%. His work has been recognized in multiple technical publications and conferences.
      </p>
      <p>
        John is passionate about making AI technologies accessible and practical for businesses of all sizes. He believes in building systems that not only leverage the latest research but are also robust, scalable, and aligned with real business needs.
      </p>
    `,
    image: "/placeholder.svg?height=600&width=600&text=John+Doe",
    education: [
      {
        institution: "Tokopedia University",
        degree: "M.S., Computer Science",
        years: "2010 - 2012",
        details:
          'Specialized in Artificial Intelligence and Machine Learning. Thesis: "Efficient Deep Learning Approaches for Natural Language Understanding."',
      },
      {
        institution: "National University of Singapore",
        degree: "B.S., Computer Science",
        years: "2006 - 2010",
        details: "Graduated summa cum laude. Minor in Mathematics.",
      },
    ],
    experience: [
      {
        company: "Envision Lab",
        role: "Co-Founder & Technical Lead",
        years: "2020 - Present",
        achievements: [
          "Co-founded Envision Lab to democratize access to advanced AI technologies",
          "Leads a team of 25 engineers, data scientists, and ML researchers",
          "Architected the company's core AI platform that powers all product offerings",
          "Developed proprietary algorithms for natural language understanding and generation",
          "Established technical standards and best practices for all development work",
          "Oversees the technical implementation of client projects",
        ],
      },
      {
        company: "TechInnovate",
        role: "Lead AI Engineer",
        years: "2016 - 2020",
        achievements: [
          "Led the development of the company's machine learning infrastructure",
          "Created novel algorithms for predictive analytics that improved accuracy by 35%",
          "Designed and implemented a scalable data processing pipeline handling 10TB+ daily",
          "Mentored junior engineers and data scientists",
          "Collaborated with product teams to translate business requirements into technical solutions",
        ],
      },
      {
        company: "Google",
        role: "Senior Software Engineer",
        years: "2012 - 2016",
        achievements: [
          "Worked on the Google Assistant team, focusing on natural language understanding",
          "Contributed to the development of speech recognition algorithms",
          "Implemented machine learning models for intent classification and entity extraction",
          "Optimized models for mobile deployment with limited computational resources",
        ],
      },
    ],
    expertise: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Distributed Systems",
      "Cloud Architecture",
      "DevOps & MLOps",
    ],
    publications: [
      '"Efficient Transformer Architectures for Resource-Constrained Environments" - NeurIPS 2023',
      '"Practical Approaches to Explainable AI in Production Systems" - ICML 2022',
      '"Scaling Language Models for Enterprise Applications" - ACL 2021',
      "Speaker, PyData Global Conference, 2024",
      'Workshop Organizer, "AI Systems at Scale," ICLR 2023',
    ],
    openSource: [
      "Core contributor to TensorFlow, with focus on NLP components",
      "Creator of FastNLP, a lightweight library for rapid NLP prototyping",
      "Contributor to Hugging Face Transformers library",
      "Maintainer of several popular AI-related GitHub repositories with 10,000+ stars",
    ],
    philosophy:
      "I believe that the most powerful AI systems are those that combine state-of-the-art research with pragmatic engineering. At Envision Lab, we focus on building solutions that aren't just technically impressive but also reliable, maintainable, and aligned with real business needs. I'm particularly passionate about creating AI systems that augment human capabilities rather than replace them, enabling people to work more effectively and creatively.",
    location: "Tech City, TC",
    languages: ["English", "Indonesian", "Python", "JavaScript"],
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "john@envisionlab.com",
    },
  },
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamData[params.slug]

  if (!member) {
    notFound()
  }

  // Determine which team member to show as "other team member"
  const otherMemberSlug = params.slug === "jane-smith" ? "john-doe" : "jane-smith"
  const otherMember = teamData[otherMemberSlug]

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
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h1 className="text-2xl font-bold mb-2">{member.name}</h1>
              <p className="text-primary font-medium mb-4">{member.role}</p>

              <div className="flex gap-3 mb-6">
                {member.socialLinks.linkedin && (
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin size={18} />
                  </Button>
                )}
                {member.socialLinks.twitter && (
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter size={18} />
                  </Button>
                )}
                {member.socialLinks.github && (
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github size={18} />
                  </Button>
                )}
                {member.socialLinks.email && (
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail size={18} />
                  </Button>
                )}
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-sm font-semibold text-foreground">Education</p>
                  <p>{member.education[0].institution}</p>
                  <p>{member.education[0].degree}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p>{member.location}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Languages</p>
                  <p>{member.languages.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>About {member.name.split(" ")[0]}</h2>
              <div dangerouslySetInnerHTML={{ __html: member.longBio }} />

              <h2>Expertise</h2>
              <ul>
                {member.expertise.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <h2>Professional Experience</h2>
              {member.experience.map((exp, index) => (
                <div key={index}>
                  <h3>{exp.company}</h3>
                  <p>
                    <em>
                      {exp.role} ({exp.years})
                    </em>
                  </p>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2>Education</h2>
              {member.education.map((edu, index) => (
                <div key={index}>
                  <h3>{edu.institution}</h3>
                  <p>
                    <em>
                      {edu.degree} ({edu.years})
                    </em>
                  </p>
                  <p>{edu.details}</p>
                </div>
              ))}

              {member.openSource && (
                <>
                  <h2>Open Source Contributions</h2>
                  <ul>
                    {member.openSource.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </>
              )}

              <h2>Publications and Speaking</h2>
              <ul>
                {member.publications.map((publication, index) => (
                  <li key={index}>{publication}</li>
                ))}
              </ul>

              <h2>Personal Philosophy</h2>
              <p>{member.philosophy}</p>
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
                      src={otherMember.image || "/placeholder.svg"}
                      alt={otherMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{otherMember.name}</h3>
                    <p className="text-primary mb-2">{otherMember.role}</p>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link href={`/team/${otherMemberSlug}`}>View Profile</Link>
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

