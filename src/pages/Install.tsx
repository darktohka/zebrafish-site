import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  AlertTriangle,
  Download,
  Terminal,
  HardDrive,
  Network,
  Shield,
  ArrowLeft,
  Github,
  Copy,
  Check,
} from 'lucide-react';
import { Link } from '@react-nano/router';
import { ZebrafishLogo } from '@/components/ZebrafishLogo';
import { Footer } from '@/components/Footer';
import { useState } from 'preact/hooks';

const Install = () => {
  const [copiedCommands, setCopiedCommands] = useState<{
    [key: string]: boolean;
  }>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommands((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedCommands((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const CodeBlock = ({
    code,
    id,
    title,
  }: {
    code: string;
    id: string;
    title?: string;
  }) => (
    <div className="relative">
      {title && <p className="text-sm text-zebrafish-600 mb-2">{title}</p>}
      <div className="bg-zebrafish-950 text-zebrafish-100 p-4 rounded-lg overflow-x-auto relative group">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-zebrafish-300 hover:text-white hover:bg-zebrafish-800"
          onClick={() => copyToClipboard(code, id)}
        >
          {copiedCommands[id] ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  const architectures = [
    {
      name: 'UEFI x86_64',
      desc: 'EFI stub kernel boot, Haswell+ microarchitecture required',
      icon: '🖥️',
      requirements: '4th gen Intel Core (Haswell) or newer',
    },
    {
      name: 'UEFI ARM64',
      desc: 'ARMv8-A architecture, optimized for Neoverse-N1',
      icon: '💻',
      requirements: 'ARMv8-A (Neoverse-N1 tuned)',
    },
    {
      name: 'BIOS x86_64',
      desc: 'Legacy BIOS and QEMU deployments',
      icon: '⚙️',
      requirements: '4th gen Intel Core (Haswell) or newer',
    },
  ];

  const kernelParams = [
    {
      param: 'initrd',
      desc: 'Path to initial RAM disk image',
      example: '/zebrafish-initrd',
      required: true,
    },
    {
      param: 'console',
      desc: 'System console for kernel messages',
      example: 'tty0',
      required: true,
    },
    {
      param: 'hostname',
      desc: 'Machine hostname',
      example: 'triton-srv',
      required: true,
    },
    {
      param: 'machine',
      desc: 'Unique machine identifier (UUID/hash)',
      example: 'a71d0f9a4b491ee1db858bd5ae3f3c6f',
      required: true,
    },
    {
      param: 'ipv4',
      desc: 'Static IPv4 address',
      example: '10.0.0.140',
      required: false,
    },
    {
      param: 'ipv4gateway',
      desc: 'IPv4 default gateway',
      example: '10.0.0.1',
      required: false,
    },
    {
      param: 'ipv4dns',
      desc: 'DNS servers (comma separated)',
      example: '8.8.8.8,8.8.4.4',
      required: false,
    },
    {
      param: 'ipv6',
      desc: 'Assigns a static IPv6 address.',
      example: '2603:c020:800d::14',
      required: false,
    },
    {
      param: 'ipv6dns',
      desc: 'Specifies one or more DNS servers for IPv6 networking, separated by commas.',
      example: '2001:4860:4860::8888,2001:4860:4860::8844',
      required: false,
    },
    {
      param: 'ipv6netmask',
      desc: 'Defines the subnet mask or prefix length for the IPv6 network interface.',
      example: '64',
      required: false,
    },
    {
      param: 'ipv6gateway',
      desc: 'Sets the default gateway for the IPv6 network.',
      example: '2603:c020:800d::1',
      required: false,
    },
    {
      param: 'dockerlogin',
      desc: 'Provides credentials for a Docker registry. Format: registry.example.com,user,pass.',
      example: 'registry.tohka.us,triton,a94d...7cb',
      required: false,
    },
    {
      param: 'sshport',
      desc: 'SSH server port',
      example: '12488',
      required: false,
    },
    {
      param: 'sshkey',
      desc: 'Public SSH key for authentication',
      example: 'ssh-ed25519 AAA...',
      required: false,
    },
    {
      param: 'wg0',
      desc: 'WireGuard interface config',
      example: 'private_key,address/cidr,port',
      required: false,
    },
    {
      param: 'wg0peer',
      desc: 'Configures a WireGuard peer. Format: public_key,endpoint_ip:port,allowed_ips/cidr.',
      example: 'dJG2...5Bw=,88.99.163.115:49427,10.0.3.1/32',
      required: false,
    },
    {
      param: 'nbdclient',
      desc: 'Network Block Device client',
      example: 'server_ip,port,/dev/nbd0',
      required: false,
    },
    {
      param: 'zfskeys',
      desc: 'Keys for encrypted ZFS datasets',
      example: 'dataset,key',
      required: false,
    },
    {
      param: 'zfsmount',
      desc: 'Specifies the ZFS dataset to mount as the root filesystem.',
      example: 'archangel',
      required: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zebrafish-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-zebrafish-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <ZebrafishLogo className="h-10 w-10" />
                <span className="text-2xl font-bold text-zebrafish-900">
                  Zebrafish
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-zebrafish-300 text-zebrafish-700 hover:bg-zebrafish-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
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

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zebrafish-900 mb-4">
            Zebrafish Installation Guide
          </h1>
          <p className="text-xl text-zebrafish-600 max-w-3xl mx-auto">
            Complete instructions for installing Zebrafish from a live Linux
            environment
          </p>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Warning:</strong> This installation process is destructive
            and will erase all data on the selected disk. Please back up any
            important data before proceeding.
          </AlertDescription>
        </Alert>

        {/* Supported Architectures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-zebrafish-900">
              <HardDrive className="mr-2 h-5 w-5" />
              Supported Hardware Configurations
            </CardTitle>
            <CardDescription>
              Zebrafish supports installation on the following architectures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {architectures.map((arch, index) => (
                <div
                  key={index}
                  className="text-center p-4 border border-zebrafish-200 rounded-lg"
                >
                  <div className="text-3xl mb-3">{arch.icon}</div>
                  <h3 className="font-semibold text-zebrafish-900 mb-2">
                    {arch.name}
                  </h3>
                  <p className="text-sm text-zebrafish-600 mb-3">{arch.desc}</p>
                  <Badge
                    variant="secondary"
                    className="bg-zebrafish-50 text-zebrafish-700"
                  >
                    {arch.requirements}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Boot into Live Environment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zebrafish-700 mb-4">
                Boot your target machine using a live Linux USB stick. The
                Alpine Linux standard image is recommended as it includes the
                necessary tools.
              </p>
              <p className="text-zebrafish-700 mb-4">
                On cloud providers, you can use the provided{' '}
                <b>Rescue environment</b>.
              </p>
              <div className="text-center mt-6">
                <a
                  href="https://alpinelinux.org/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-zebrafish-600 text-white hover:bg-zebrafish-700">
                    <Download className="mr-2 h-5 w-5" />
                    Download Alpine Linux ISO
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Install Required Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zebrafish-700 mb-4">
                Open a terminal and install the tools needed for installation:
              </p>
              <CodeBlock
                code="apk add curl jq parted lsblk dosfstools"
                id="install-tools"
              />
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Identify and Prepare Target Disk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-zebrafish-700 mb-4">
                  First, identify your target disk using{' '}
                  <code className="bg-zebrafish-100 px-2 py-1 rounded">
                    lsblk
                  </code>
                  :
                </p>
                <CodeBlock code="lsblk -p" id="list-disks" />
              </div>

              <div>
                <p className="text-zebrafish-700 mb-4">
                  Set a shell variable for your target disk (replace{' '}
                  <code className="bg-zebrafish-100 px-2 py-1 rounded">
                    /dev/sda
                  </code>{' '}
                  with your actual disk):
                </p>
                <CodeBlock
                  code={`# !! IMPORTANT !!
# !! Set this to your target disk. All data on this disk will be erased.
export DISK="/dev/sda"`}
                  id="set-disk"
                />
              </div>

              <div>
                <p className="text-zebrafish-700 mb-4">
                  Partition the disk (256MB boot partition + data partition):
                </p>
                <CodeBlock
                  code={`parted -a optimal -s "$DISK" \\
  mklabel gpt \\
  mkpart primary 1MiB 256MiB \\
  set 1 boot on \\
  mkpart primary 256MiB 100% \\
  print`}
                  id="partition-disk"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Format and Mount Boot Partition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-zebrafish-700 mb-4">
                  Define partition variables:
                </p>
                <CodeBlock
                  code={`# For NVMe drives, partitions look like /dev/nvme0n1p1, for SATA/SCSI, /dev/sda1
if [[ "$DISK" == *"nvme"* ]]; then
  export BOOT_PART="\${DISK}p1"
  export DATA_PART="\${DISK}p2"
else
  export BOOT_PART="\${DISK}1"
  export DATA_PART="\${DISK}2"
fi`}
                  id="define-partitions"
                />
              </div>

              <div>
                <p className="text-zebrafish-700 mb-4">
                  Format and mount the boot partition:
                </p>
                <CodeBlock
                  code={`mkfs.fat "$BOOT_PART"
mount "$BOOT_PART" /mnt`}
                  id="format-mount"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Download and Extract Zebrafish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-zebrafish-700 mb-4">
                  Navigate to mount point and download Zebrafish:
                </p>
                <CodeBlock
                  code={`cd /mnt

# Download the appropriate architecture
if [ "$(uname -m)" = "aarch64" ]; then
  ZEBRAFISH_LINK="https://cdn.zebrafish.tohka.us/zebrafish-aarch64.tar"
else
  ZEBRAFISH_LINK="https://cdn.zebrafish.tohka.us/zebrafish-x64.tar"
fi

curl -sL "$ZEBRAFISH_LINK" | tar -x`}
                  id="download-zebrafish"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Prepare Data Partition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zebrafish-700 mb-4">
                Prepare the data partition by marking it for Zebrafish.{' '}
                <b>
                  This partition will be automatically formatted on the first
                  Zebrafish boot and used as the data partition.
                </b>
              </p>
              <CodeBlock
                code={`echo "zebrafish-please-format-me" | dd conv=notrunc of="$DATA_PART"`}
                id="prepare-data"
              />
            </CardContent>
          </Card>

          {/* Kernel Command Line Parameters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <Network className="mr-2 h-5 w-5" />
                Kernel Command Line Parameters
              </CardTitle>
              <CardDescription>
                Configure system parameters for boot-time initialization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zebrafish-200">
                      <th className="text-left py-2 font-semibold text-zebrafish-900">
                        Parameter
                      </th>
                      <th className="text-left py-2 font-semibold text-zebrafish-900">
                        Description
                      </th>
                      <th className="text-left py-2 font-semibold text-zebrafish-900">
                        Example
                      </th>
                      <th className="text-left py-2 font-semibold text-zebrafish-900">
                        Required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {kernelParams.map((param, index) => (
                      <tr key={index} className="border-b border-zebrafish-100">
                        <td className="py-2">
                          <code className="bg-zebrafish-100 px-2 py-1 rounded text-zebrafish-800">
                            {param.param}
                          </code>
                        </td>
                        <td className="py-2 text-zebrafish-700">
                          {param.desc}
                        </td>
                        <td className="py-2">
                          <code className="text-xs text-zebrafish-600">
                            {param.example}
                          </code>
                        </td>
                        <td className="py-2">
                          <Badge
                            variant={param.required ? 'default' : 'secondary'}
                            className={param.required ? 'bg-zebrafish-600' : ''}
                          >
                            {param.required ? 'Required' : 'Optional'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Separator className="my-6" />

              <div>
                <p className="text-zebrafish-700 mb-4">
                  Create your kernel command line configuration:
                </p>
                <CodeBlock
                  code={`cat <<EOS > /mnt/cmdline.txt
initrd=/zebrafish-initrd console=tty0 hostname=my-server machine=a71d0f9a4b491ee1db858bd5ae3f3c6f ipv4=10.0.0.140 ipv4gateway=10.0.0.1 sshkey="ssh-ed25519 AAA..."
EOS`}
                  id="create-cmdline"
                  title="Replace with your actual configuration"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 7 - Bootloader */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                Install Bootloader
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-zebrafish-50 p-4 rounded-lg">
                <h4 className="font-semibold text-zebrafish-900 mb-3">
                  For UEFI Systems
                </h4>
                <div className="space-y-4">
                  <CodeBlock
                    code="apk add efibootmgr"
                    id="install-efi"
                    title="Install efibootmgr"
                  />
                  <CodeBlock
                    code={`command_line="$(cat /mnt/cmdline.txt)"
efibootmgr -c -d "$DISK" --part 1 --loader /zebrafish-kernel --label "Zebrafish" -u "$command_line"`}
                    id="create-efi-entry"
                    title="Create UEFI boot entry"
                  />
                </div>
              </div>

              <div className="bg-zebrafish-50 p-4 rounded-lg">
                <h4 className="font-semibold text-zebrafish-900 mb-3">
                  For BIOS Systems
                </h4>
                <div className="space-y-4">
                  <CodeBlock
                    code={`apk add syslinux
mkdir /mnt/syslinux
extlinux --install /mnt/syslinux
dd if=/usr/share/syslinux/gptmbr.bin of="$DISK" bs=440 count=1`}
                    id="install-syslinux"
                    title="Install and configure syslinux"
                  />
                  <CodeBlock
                    code={`command_line="$(cat /mnt/cmdline.txt)"

cat <<EOS > /mnt/syslinux/syslinux.cfg
PROMPT 0
TIMEOUT 10
DEFAULT zebrafish

LABEL zebrafish
  LINUX /zebrafish-kernel
  APPEND $command_line
EOS`}
                    id="create-syslinux-config"
                    title="Create syslinux configuration"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 8 - Finalize */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-zebrafish-900">
                <span className="bg-zebrafish-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  8
                </span>
                Finalize Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zebrafish-700 mb-4">
                Complete the installation process:
              </p>
              <CodeBlock
                code={`cd /
sync
umount /mnt
reboot`}
                id="finalize"
              />
              <Alert className="mt-4 border-green-200 bg-green-50">
                <Check className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Success!</strong> Remove the live USB stick when the
                  machine restarts. On first boot, Zebrafish will format the
                  data partition with ZFS and set up the system. You can then
                  log in using the{' '}
                  <code className="bg-green-100 px-1 rounded">signalizer</code>{' '}
                  user.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-zebrafish-900 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-zebrafish-200 mb-6">
            Visit our GitHub repository for additional documentation,
            troubleshooting, and community support.
          </p>
          <a
            href="https://github.com/darktohka/zebrafish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-zebrafish-900 hover:bg-zebrafish-50">
              <Github className="mr-2 h-5 w-5" />
              View Documentation on GitHub
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Install;
