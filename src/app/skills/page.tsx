const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">React.js</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[90%]"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">Next.js</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[85%]"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">TypeScript</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">Node.js</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[85%]"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">Python</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[75%]"></div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">Git</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[90%]"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">Google colab</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[70%]"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">Vercel</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2 w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
