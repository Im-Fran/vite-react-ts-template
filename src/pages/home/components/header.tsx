import {Zap} from "lucide-react";

const Header = () => <div className="bg-blue-600 text-white dark:bg-blue-800 dark:text-white">
  <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <Zap className="h-6 w-6"/>
      <span className="text-lg font-bold">ViteReactTS</span>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#features" className="hover:underline text-white dark:text-white">Features</a></li>
        <li><a href="#getting-started" className="hover:underline text-white dark:text-white">Get Started</a></li>
        <li><a href="https://github.com/Im-Fran/vite-react-ts-template"
               className="hover:underline text-white dark:text-white">GitHub</a></li>
      </ul>
    </nav>
  </div>
</div>

export default Header