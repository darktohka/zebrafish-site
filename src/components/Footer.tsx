import { Github, Mail } from 'lucide-react';
import { ZebrafishLogo } from './ZebrafishLogo';

export const Footer = () => (
  <footer className="bg-zebrafish-950 text-zebrafish-200 py-12 px-4">
    <div className="container mx-auto text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="rounded-full bg-white p-2">
          <ZebrafishLogo className="h-8 w-8" />
        </div>
        <span className="text-xl font-bold">Zebrafish</span>
      </div>
      <p className="text-zebrafish-400 mb-4">
        Modern, security-focused, containerized operating system
      </p>
      <p className="text-zebrafish-400 mb-6">
        © {new Date().getFullYear()} Derzsi Dániel.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/darktohka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zebrafish-400 hover:text-zebrafish-200 transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="mailto:daniel@tohka.us"
          className="text-zebrafish-400 hover:text-zebrafish-200 transition-colors"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
);
