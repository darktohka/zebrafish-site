import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Container,
  Zap,
  Lock,
  Database,
  Network,
  Github,
  Download,
  Terminal,
} from 'lucide-react';
import { Link } from '@react-nano/router';
import AnimatedTerminal from '@/components/AnimatedTerminal';
import { ZebrafishLogo } from '@/components/ZebrafishLogo';
import { Footer } from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: <Container className="h-8 w-8" />,
      title: 'Run containers',
      description:
        'Built using the containerd runtime with OCI compliance for reliable container workloads',
      details: [
        'OCI-compliant',
        'Multi-compose support',
        'Containerd runtime',
        'Docker compatibility',
      ],
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Immutable core',
      description:
        'Zebrafish is unbreakable by design. Atomic updates guarantee that no upgrade will ever brick production.',
      details: [
        'Stable core',
        'Atomic updates',
        'Persistent storage',
        'Overlayed configuration',
        'Easy rollback',
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security first',
      description:
        'Designed with security in mind, using a strict subset of proven secure cryptography',
      details: [
        'ZFS encryption',
        'WireGuard',
        'Public key auth',
        'Port knocking',
        'DNS over HTTPS',
        'HTTP/3',
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data integrity',
      description:
        'Using the ZFS filesystem, your system is always backed up and ready for disaster recovery',
      details: [
        'ZFS file system',
        'Data integrity',
        'Automatic backup',
        'Mirrored infrastructure',
        'Disaster recovery',
      ],
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Distributed architecture',
      description:
        'Remote storage via NBD and WireGuard protocol for secure networking',
      details: [
        'Remote storage',
        'NBD protocol',
        'WireGuard',
        'Network integration',
        'Distributed services',
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightweight',
      description:
        'Minimal attack surface with only essential libraries and tools provided',
      details: [
        'Reduced footprint',
        'Essential tools only',
        'Optimized performance',
        'Fast boot times',
      ],
    },
  ];

  const architectures = [
    { name: 'UEFI x86_64', desc: 'Haswell+ microarchitecture', icon: '🖥️' },
    { name: 'UEFI ARM64', desc: 'ARMv8-A (Neoverse-N1 tuned)', icon: '💻' },
    { name: 'BIOS x86_64', desc: 'Legacy BIOS and QEMU emulators', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zebrafish-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-zebrafish-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ZebrafishLogo className="h-10 w-10" />
              <span className="text-2xl font-bold text-zebrafish-900">
                Zebrafish
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/install">
                <Button
                  variant="outline"
                  className="border-zebrafish-300 text-zebrafish-700 hover:bg-zebrafish-50"
                >
                  Install Guide
                </Button>
              </Link>
              <a
                href="https://github.com/darktohka/zebrafish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zebrafish-600 hover:text-zebrafish-800 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fadeInUp">
            <ZebrafishLogo className="h-24 w-24 mx-auto mb-8 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold text-zebrafish-900 mb-6">
              Zebrafish
            </h1>
            <p className="text-xl md:text-2xl text-zebrafish-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              A modern, security-focused, containerized operating system
              <br />
              made for
              <span className="text-zebrafish-600 font-semibold">
                {' '}
                reliability
              </span>{' '}
              and
              <span className="text-zebrafish-600 font-semibold">
                {' '}
                performance
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/install">
                <Button
                  size="lg"
                  className="bg-zebrafish-600 hover:bg-zebrafish-700 text-white px-8 py-6 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Install Zebrafish Now
                </Button>
              </Link>
              <a
                href="https://github.com/darktohka/zebrafish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zebrafish-300 text-zebrafish-700 hover:bg-zebrafish-50 px-8 py-6 text-lg"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Compose Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zebrafish-50 to-zebrafish-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="h-10 w-10 text-zebrafish-600 mr-3" />
              <h2 className="text-4xl font-bold text-zebrafish-900">
                Multi-Compose Workflows
              </h2>
            </div>
            <p className="text-xl text-zebrafish-600 max-w-2xl mx-auto">
              See how easy it is to set up complex containerized applications
              with multiple Compose projects
            </p>
          </div>

          <AnimatedTerminal />

          <div className="text-center mt-8">
            <p className="text-sm text-zebrafish-600">
              Watch the terminal animation to see how Zebrafish handles
              multi-service deployments
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zebrafish-900 mb-4">
              Built for modern infrastructure
            </h2>
            <p className="text-xl text-zebrafish-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to provide a robust platform
              for containerized applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-zebrafish-200 hover:shadow-lg transition-all duration-300 hover:border-zebrafish-300 group"
              >
                <CardHeader>
                  <div className="text-zebrafish-600 group-hover:text-zebrafish-700 transition-colors mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-zebrafish-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zebrafish-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-zebrafish-50 text-zebrafish-700 mr-2 mb-2"
                      >
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Support */}
      <section className="py-20 px-4 bg-gradient-to-r from-zebrafish-50 to-zebrafish-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zebrafish-900 mb-4">
              Multi-Architecture Support
            </h2>
            <div className="flex flex-col space-y-2">
              <p className="text-xl text-zebrafish-600">
                Deploy on your preferred hardware configuration
              </p>
              <p className="text-xl text-zebrafish-600">
                First-class support for cloud providers like{' '}
                <span className="font-bold">Hetzner, AWS, Azure</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {architectures.map((arch, index) => (
              <Card
                key={index}
                className="text-center border-zebrafish-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{arch.icon}</div>
                  <CardTitle className="text-zebrafish-900">
                    {arch.name}
                  </CardTitle>
                  <CardDescription className="text-zebrafish-600">
                    {arch.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-zebrafish-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-zebrafish-200 max-w-2xl mx-auto">
            Your days of dealing with unreliable operating systems are over.
          </p>
          <p className="text-xl text-zebrafish-200 mb-8 max-w-2xl mx-auto">
            Choose peace of mind with Zebrafish. <b>Join us now.</b>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/install">
              <Button
                size="lg"
                className="bg-white text-zebrafish-900 hover:bg-zebrafish-50 px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Install Zebrafish Now
              </Button>
            </Link>
            <a
              href="https://github.com/darktohka/zebrafish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-zebrafish-900 hover:bg-zebrafish-50 px-8 py-6 text-lg"
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
