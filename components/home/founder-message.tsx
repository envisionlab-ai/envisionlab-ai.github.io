import Image from "next/image"

export default function FounderMessage() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Message From Our Founders</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0 flex gap-4">
              <div className="relative h-20 w-20 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Founder 1" fill className="object-cover" />
              </div>
              <div className="relative h-20 w-20 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Founder 2" fill className="object-cover" />
              </div>
            </div>
            <div>
              <blockquote className="text-lg md:text-xl italic mb-6">
                "At Envision Lab, we believe that AI is not just a technology, but a transformative force that can
                revolutionize how businesses operate and deliver value to their customers. Our mission is to make
                advanced AI solutions accessible to businesses of all sizes, helping them stay competitive in an
                increasingly digital world."
              </blockquote>
              <p className="text-right font-semibold">- Jane Smith & John Doe, Co-Founders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

