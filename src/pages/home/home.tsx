import { useState } from 'react'
import { ArrowRight, CheckCircle, Github, Clipboard } from 'lucide-react'
import { Button } from "@/components/ui/button/button"
import Header from "@/pages/home/components/header"
import { toast } from 'react-hot-toast'
import Footer from "@/pages/home/components/footer.tsx";

const Home = () => {
  const [_, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (code: string) => navigator.clipboard.writeText(code).then(() => {
    setCopiedStates((prev) => ({...prev, [code]: true}));
    toast.success('Successfully copied to clipboard');
    setTimeout(() => setCopiedStates((prev) => ({...prev, [code]: false})), 2000); // Reset after 2 seconds
  }).catch((err) => {
    console.err({msg: 'Failed to copy', err})
    toast.error("Failed to copy code! Please try again later.")
  });

  const steps = [
    { label: "1. Clone the repository", code: "git clone https://github.com/Im-Fran/vite-react-ts-template.git" },
    { label: "2. Navigate to the project directory", code: "cd vite-react-ts-template" },
    { label: "3. Install dependencies", code: "bun install" },
    { label: "4. Start the development server", code: "bun run dev" }
  ];

  return <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Header/>

    <main>
      <section className="bg-gradient-to-b from-blue-600 to-white py-20 text-center dark:from-blue-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Vite + React + TS Template
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Jumpstart your project with our powerful, feature-rich template combining Vite, React, TypeScript, SWC,
            TailwindCSS v4, and React Router.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Button size="lg">
              <a href="#getting-started">Get Started</a>
            </Button>
            <Button variant="ghostOutline" size="lg">
              <a className={"flex"} href="https://github.com/Im-Fran/vite-react-ts-template">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Vite: Lightning fast build tool",
              "React: Powerful UI library",
              "TypeScript: Static typing for better development",
              "SWC: Super-fast JavaScript/TypeScript compiler",
              "TailwindCSS v4: Utility-first CSS framework",
              "React Router: Declarative routing for React",
              "React Hot Toast: Lightweight toast notifications",
              "Class Variance Authority: Reusable component variants",
              "Bun.sh: All-in-one JavaScript runtime & toolkit"
            ].map((feature, index) => <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow dark:bg-gray-700">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 dark:text-blue-300" />
                <span className="dark:text-white">{feature}</span>
              </div>)}
          </div>
        </div>
      </section>

      <section id="getting-started" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Getting Started</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {steps.map((step, index) => <div key={index} className="bg-white p-6 rounded-lg shadow dark:bg-gray-700">
                <h3 className="font-semibold mb-2 dark:text-white">{step.label}</h3>
                <div className="relative">
                  <code className="block bg-gray-200 p-2 rounded text-sm dark:bg-gray-800 dark:text-white">
                    {step.code}
                  </code>
                  <button
                    onClick={() => handleCopy(step.code)}
                    className="absolute top-2 right-2 text-blue-600 dark:text-blue-300"
                  >
                    <Clipboard className="h-5 w-5" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to Supercharge Your Development?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto dark:text-gray-400">
            Get started with our Vite + React + TS template today and experience the perfect blend of speed, type safety,
            and developer experience.
          </p>
          <Button size="lg">
            <a className={"flex"} href="https://github.com/Im-Fran/vite-react-ts-template">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>

    <Footer/>
  </div>;
};

export default Home;