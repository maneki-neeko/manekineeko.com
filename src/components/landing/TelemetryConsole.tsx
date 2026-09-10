import React, { useEffect, useState } from 'react';
import { Terminal, Activity, Cpu, CheckCircle2, Shield } from 'lucide-react';

export const TelemetryConsole: React.FC = () => {
  const [latency, setLatency] = useState(11.8);
  const [throughput, setThroughput] = useState(42.4);

  // Micro-fluctuations for realistic live telemetry feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(+(11.4 + Math.random() * 0.7).toFixed(1));
      setThroughput(+(42.1 + Math.random() * 0.6).toFixed(1));
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl bg-obsidian-surface-1 p-5 border border-hairline hover:border-hairline-amber/40 shadow-2xl transition-all duration-300 overflow-hidden group">
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-amber/10 blur-[80px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 bg-teal/10 blur-[80px] rounded-full" />

      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-hairline">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 border border-[#F59E0B]" />
          <span className="w-3 h-3 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
          <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-[#9CA3AF]">
            <Terminal className="w-3.5 h-3.5 text-amber" />
            <span>maneki-core :: runtime</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
          </span>
          <span className="font-mono text-[11px] text-teal font-semibold tracking-wider uppercase">
            Live System
          </span>
        </div>
      </div>

      {/* Cluster Status Header */}
      <div className="p-3 rounded-xl bg-obsidian-surface-2 border border-hairline/60 flex items-center justify-between text-xs font-mono mb-3">
        <span className="text-[#9CA3AF] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-amber" />
          <span>Cluster Mesh Deployment</span>
        </span>
        <span className="text-teal font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          br-south-1 / us-east-1
        </span>
      </div>

      {/* Code Snippet Box */}
      <div className="p-3.5 rounded-xl bg-[#07080A] border border-hairline/80 font-mono text-[12.5px] leading-relaxed mb-3.5 overflow-x-auto text-[#E5E7EB] select-none">
        <div className="text-[#6B7280] italic">// Microsserviço de alta disponibilidade &amp; tolerância a falhas</div>
        <div className="mt-1">
          <span className="text-amber">const</span> engine = <span className="text-teal">createTailoredArchitecture</span>({'{'}
        </div>
        <div className="pl-4 text-[#D1D5DB]">
          tenant: <span className="text-[#FFB783]">&apos;enterprise-client&apos;</span>,
        </div>
        <div className="pl-4 text-[#D1D5DB]">
          resilience: <span className="text-teal">true</span>,
        </div>
        <div className="pl-4 text-[#D1D5DB]">
          realtimeEvents: <span className="text-teal">true</span>,
        </div>
        <div className="pl-4 text-[#D1D5DB]">
          latencyThresholdMs: <span className="text-amber">12</span>,
        </div>
        <div className="pl-4 text-[#D1D5DB]">
          zeroDowntimeDeploy: <span className="text-teal">true</span>
        </div>
        <div>{'}'});</div>
        <div className="text-teal mt-1.5 text-[11.5px] flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Deployment status: 200 OK [all 12 nodes in consensus]</span>
        </div>
      </div>

      {/* Live Animated Telemetry Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3.5">
        <div className="p-3 rounded-xl bg-obsidian-surface-2 border border-hairline flex flex-col">
          <span className="text-[10.5px] font-mono text-[#9CA3AF] uppercase tracking-wider">
            Latência P99
          </span>
          <span className="font-display text-lg font-bold text-teal mt-0.5">
            {latency}ms
          </span>
          <span className="text-[10px] font-mono text-[#6B7280]">sub-12ms target</span>
        </div>

        <div className="p-3 rounded-xl bg-obsidian-surface-2 border border-hairline flex flex-col">
          <span className="text-[10.5px] font-mono text-[#9CA3AF] uppercase tracking-wider">
            Uptime SLO
          </span>
          <span className="font-display text-lg font-bold text-white mt-0.5">
            99.98%
          </span>
          <span className="text-[10px] font-mono text-teal">estabilidade total</span>
        </div>

        <div className="p-3 rounded-xl bg-obsidian-surface-2 border border-hairline flex flex-col">
          <span className="text-[10.5px] font-mono text-[#9CA3AF] uppercase tracking-wider">
            Vazão Real
          </span>
          <span className="font-display text-lg font-bold text-amber mt-0.5">
            {throughput}k
          </span>
          <span className="text-[10px] font-mono text-[#6B7280]">req/segundo</span>
        </div>

        <div className="p-3 rounded-xl bg-obsidian-surface-2 border border-hairline flex flex-col">
          <span className="text-[10.5px] font-mono text-[#9CA3AF] uppercase tracking-wider">
            Downtime
          </span>
          <span className="font-display text-lg font-bold text-teal mt-0.5">
            Zero
          </span>
          <span className="text-[10px] font-mono text-[#6B7280]">zero downtime</span>
        </div>
      </div>

      {/* Real-time Sparkline SVG Box */}
      <div className="p-3 rounded-xl bg-obsidian-surface-2/70 border border-hairline flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-amber" />
            <span>Throughput Transacional Contínuo</span>
          </span>
          <span className="text-teal font-mono font-medium">42,480 req/s</span>
        </div>
        
        <div className="relative h-10 w-full overflow-hidden rounded">
          <svg
            className="w-full h-full text-amber overflow-visible"
            fill="none"
            viewBox="0 0 300 40"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 30 Q 30 15, 60 22 T 120 12 T 180 20 T 240 8 T 300 14"
              stroke="#FF6A3D"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M0 30 Q 30 15, 60 22 T 120 12 T 180 20 T 240 8 T 300 14 L 300 40 L 0 40 Z"
              fill="url(#amberGradient)"
            />
          </svg>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="mt-3 pt-2.5 border-t border-hairline flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-teal" />
          <span>Security by-design • TLS 1.3 Strict</span>
        </div>
        <span className="text-amber font-medium">crafting tailored systems</span>
      </div>
    </div>
  );
};

export default TelemetryConsole;
