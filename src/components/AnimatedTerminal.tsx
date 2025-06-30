import { useState, useEffect } from 'preact/hooks';
import { Card } from '@/components/ui/card';

const AnimatedTerminal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      command: 'cd /compose',
      output: '',
      delay: 500,
    },
    {
      command: 'mkdir fancy-saas',
      output: '',
      delay: 500,
    },
    {
      command: 'nano docker-compose.yaml',
      output: 'GNU nano 6.2                docker-compose.yaml',
      delay: 1000,
      isNano: true,
    },
    {
      command: '',
      output: `version: '3.8'

services:
  mariadb:
    image: mariadb:latest
    container_name: fancysaas_mariadb
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: fancysaas
    networks:
      - fancysaas-network
  
  fancysaas:
    image: darktohka/fancy-saas:latest
    container_name: fancysaas
    depends_on:
      - mariadb
    networks:
      - fancysaas-network

networks:
  fancysaas-network:
    driver: bridge`,
      delay: 2000,
      isNanoContent: true,
    },
    {
      command: '',
      output: '[ Wrote 20 lines ]',
      delay: 500,
      isNanoSave: true,
    },
    {
      command: 'cd ..',
      output: '',
      delay: 500,
    },
    {
      command: 'mkdir caddy',
      output: '',
      delay: 500,
    },
    {
      command: 'nano docker-compose.yaml',
      output: 'GNU nano 6.2                docker-compose.yaml',
      delay: 1000,
      isNano: true,
    },
    {
      command: '',
      output: `version: '3.8'

services:
  caddy:
    image: caddy:latest
    container_name: caddy
    ports:
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
    networks:
      - fancy-saas_fancysaas-network

networks:
  fancy-saas_fancysaas-network:
    external: true`,
      delay: 2000,
      isNanoContent: true,
    },
    {
      command: '',
      output: '[ Wrote 16 lines ]',
      delay: 500,
      isNanoSave: true,
    },
    {
      command: 'docker-compose up -d',
      output: `Creating network "caddy_default" with the default driver
Pulling caddy (caddy:latest)...
latest: Pulling from library/caddy
Creating caddy ... done`,
      delay: 1500,
    },
  ];

  const typeText = (text: string, speed: number = 50) => {
    return new Promise<void>((resolve) => {
      setIsTyping(true);
      setCurrentText('');
      let i = 0;
      const timer = setInterval(() => {
        setCurrentText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          setIsTyping(false);
          resolve();
        }
      }, speed);
    });
  };

  useEffect(() => {
    const runAnimation = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        const step = steps[i];

        if (step.command) {
          await typeText(`$ ${step.command}`, 30);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        if (step.output) {
          setCurrentText((prev) => prev + '\n' + step.output);
        }

        await new Promise((resolve) => setTimeout(resolve, step.delay));

        if (i === steps.length - 1) {
          // Reset animation after completion
          setTimeout(() => {
            setCurrentStep(0);
            setCurrentText('');
            runAnimation();
          }, 3000);
          return;
        }
      }
    };

    runAnimation();
  }, []);

  const getCurrentStepType = () => {
    const step = steps[currentStep];
    if (step?.isNano) return 'nano-header';
    if (step?.isNanoContent) return 'nano-content';
    if (step?.isNanoSave) return 'nano-save';
    return 'terminal';
  };

  const renderTerminalContent = () => {
    const stepType = getCurrentStepType();

    if (stepType === 'nano-header') {
      return (
        <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm">
          <div className="bg-blue-600 text-white px-2 py-1 mb-2 text-center">
            GNU nano 6.2 docker-compose.yaml
          </div>
          <div className="border-t border-gray-600 pt-2">
            <div className="animate-pulse">|</div>
          </div>
        </div>
      );
    }

    if (stepType === 'nano-content') {
      return (
        <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm">
          <div className="bg-blue-600 text-white px-2 py-1 mb-2 text-center">
            GNU nano 6.2 docker-compose.yaml
          </div>
          <div className="border-t border-gray-600 pt-2">
            <pre className="text-green-400 whitespace-pre-wrap">
              {currentText.split('\n').slice(1).join('\n')}
            </pre>
            <div className="animate-pulse inline">|</div>
          </div>
          <div className="border-t border-gray-600 mt-4 pt-2 text-center text-xs">
            ^G Get Help ^O Write Out ^W Where Is ^K Cut Text ^J Justify
          </div>
        </div>
      );
    }

    if (stepType === 'nano-save') {
      return (
        <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm">
          <div className="bg-blue-600 text-white px-2 py-1 mb-2 text-center">
            GNU nano 6.2 docker-compose.yaml
          </div>
          <div className="border-t border-gray-600 pt-2">
            <div className="text-yellow-400">
              {currentText.split('\n').slice(1).join('\n')}
            </div>
          </div>
          <div className="border-t border-gray-600 mt-4 pt-2 text-center text-xs">
            ^G Get Help ^O Write Out ^W Where Is ^K Cut Text ^J Justify
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm min-h-[400px]">
        <div className="mb-2 text-blue-400">user@zebrafish:~</div>
        <pre className="whitespace-pre-wrap">{currentText}</pre>
        {isTyping && <div className="animate-pulse inline">|</div>}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <div className="p-6">
        <div className="flex items-center mb-4 space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600 ml-4">
            Terminal - Multi-Compose Setup
          </span>
        </div>
        {renderTerminalContent()}
      </div>
    </Card>
  );
};

export default AnimatedTerminal;
