import { useState, useEffect } from 'preact/hooks';
import { Card } from '@/components/ui/card';

const AnimatedTerminal = () => (
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
      <script
        src="https://asciinema.org/a/726498.js"
        id="asciicast-726498"
        async={true}
      ></script>
    </div>
  </Card>
);

export default AnimatedTerminal;
