import React from 'react';

export function FathymDiagram() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Main Container */}
        <div className="border-2 border-[#6D3AD0] rounded-lg p-8 bg-[#0f0f1a]">
          
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-center text-[#80FFFF]">THE FATHYM STACK</h1>
          </div>

          {/* Stack Container */}
          <div className="border-2 border-[#8B5CF6] rounded-lg p-6 bg-[#12121f] mb-8">
            
            {/* Layer 1 */}
            <StackLayer
              number="1"
              title="CLI (FTM)"
              subtitle={["commands", "stage gates"]}
              description="Human-AI interface"
              subdescription="Stage-gated workflows"
            />

            {/* Layer 2 */}
            <StackLayer
              number="2"
              title="EaC Schema"
              subtitle={["defines", "configures"]}
              description="Declarative config"
              subdescription="AI-readable/writable"
            />

            {/* Layer 3 */}
            <StackLayer
              number="3"
              title="DFS"
              subtitle={["resolves", "handlers"]}
              description="Source abstraction"
              subdescription="Any source, one interface"
            />

            {/* Layer 4 */}
            <StackLayer
              number="4"
              title="Composable Runtimes"
              subtitle={["hosts", "executes"]}
              description="14+ processors, custom"
              subdescription="Build any combination"
            />

            {/* Layer 5 */}
            <StackLayer
              number="5"
              title="Synaptic"
              subtitle={["bridges"]}
              description="AI agent orchestration"
              subdescription="Portable circuits"
            />

            {/* Layer 6 - No arrow */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-5">
                <div className="border-2 border-[#6D3AD0] rounded-lg p-4 bg-[#0a0a14]">
                  <h3 className="text-[#A78BFA] mb-2">
                    <span className="text-[#C589FF]">6.</span> MCP Integration
                  </h3>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="border border-[#6D3AD0] rounded-lg p-3 bg-[#0a0a14]">
                  <div className="flex items-center gap-3 mb-1">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="flex-shrink-0">
                      <path d="M6 6 L40 6 M6 2 L0 6 L6 10" stroke="#00CED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#00D9D9] text-sm">External AI tool access</p>
                  </div>
                  <p className="text-[#00A8A8] text-sm ml-12">Governed data exposure</p>
                </div>
              </div>
            </div>

          </div>

          {/* Separator */}
          <div className="mb-6">
            <div className="border-t-2 border-[#6D3AD0] opacity-50"></div>
          </div>

          {/* Governance Flow */}
          <div className="border border-[#0080FF] rounded-lg p-6 bg-[#12121f]">
            <h3 className="text-center text-[#00D9D9] mb-4">GOVERNANCE FLOWS THROUGH EVERY LAYER:</h3>
            <p className="text-[#00CED1] text-sm leading-relaxed">
              CLI enforces stage gates → EaC defines RBAC/quotas → DFS respects 
              permissions → Runtimes isolate tenants → Synaptic governs AI → 
              MCP controls external access
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function StackLayer({ 
  number, 
  title, 
  subtitle,
  description,
  subdescription
}: { 
  number: string; 
  title: string;
  subtitle: string[];
  description: string;
  subdescription: string;
}) {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mb-3">
        <div className="md:col-span-5">
          <div className="border-2 border-[#6D3AD0] rounded-lg p-4 bg-[#0a0a14]">
            <h3 className="text-[#A78BFA] mb-2">
              <span className="text-[#C589FF]">{number}.</span> {title}
            </h3>
            <div className="text-[#8B7AA8] text-sm space-y-1 ml-6">
              {subtitle.map((item, idx) => (
                <p key={idx}>│ {item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="border border-[#6D3AD0] rounded-lg p-3 bg-[#0a0a14]">
            <div className="flex items-center gap-3 mb-1">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="flex-shrink-0">
                <path d="M6 6 L40 6 M6 2 L0 6 L6 10" stroke="#00CED1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#00D9D9] text-sm">{description}</p>
            </div>
            <p className="text-[#00A8A8] text-sm ml-12">{subdescription}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-8 md:ml-0">
        <div className="text-[#6D3AD0] text-2xl">▼</div>
      </div>
    </div>
  );
}