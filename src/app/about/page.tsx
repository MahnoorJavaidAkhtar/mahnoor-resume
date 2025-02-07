
import Image from 'next/image'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="mb-4">
            Here’s your revised professional summary:  

---

Experienced software developer with over 5 years of expertise in React, Node.js, and cloud technologies. Passionate about leveraging technology to create scalable and efficient solutions that drive business growth. Alongside software development, I have a strong background in mathematics education, having taught students at various levels. My professional journey also includes experience as a call center representative for Amazon and eBay, where I honed my communication and problem-solving skills. Currently, I am further expanding my expertise by studying IT at Governor House and pursuing a diploma in Agentic AI at PIAIC.  




            </p>
          </div>
        </div>

      

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Frontend</h3>
              <p>React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Backend</h3>
              <p>Node.js, Sanity, Python</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2">DevOps</h3>
              <p>Docker, Git, Vercel</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Graduated In ADA From KU</h3>
            <p className="text-gray-600">ICOM From HSC</p>
            <p className="mt-2">Matriculation in science</p>
            <p className="mt-2">IT Course (Continue)from Govrnor House</p>
            <p className="mt-2">Agentic AI (Continue)from PIAIC</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc ml-6">
            <li>Amazon Certified: Best Product Hunting</li>
            <li>Ebay: DropShipping</li>
            <li>MS Office</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
