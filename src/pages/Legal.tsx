import { useLocation } from "react-router-dom";
import { Shield, Lock, FileText, Scale } from "lucide-react";

const legalContent: Record<string, { title: string, icon: any, content: string[] }> = {
  "/privacy-policy": {
    title: "Privacy Policy",
    icon: Lock,
    content: [
      "We respect your digital sovereignty and privacy. This policy outlines how we handle protocol data.",
      "Data Collection: We only collect essential node information required for protocol operations.",
      "Data Security: All data is encrypted and stored in decentralized systems where possible.",
      "User Rights: You have full control over your data and can request deletion at any time."
    ]
  },
  "/terms-&-conditions": {
    title: "Terms & Conditions",
    icon: Scale,
    content: [
      "By joining the Apex Circle protocol, you agree to adhere to our core operational standards.",
      "Membership: Access is merit-based and subject to community governance.",
      "Intellectual Property: Open-source contributions remain the property of the community.",
      "Liability: The protocol is provided as-is, without warranties of any kind."
    ]
  },
  "/code-of-conduct": {
    title: "Code of Conduct",
    icon: Shield,
    content: [
      "We maintain a high-trust environment focused on radical transparency and mutual respect.",
      "Inclusivity: We welcome architects and visionaries from all backgrounds.",
      "Collaboration: Open communication and constructive feedback are core to our mission.",
      "Enforcement: Violations of the code of conduct will result in protocol exclusion."
    ]
  },
  "/community-guidelines": {
    title: "Community Guidelines",
    icon: FileText,
    content: [
      "Guidelines for participating in the Apex Circle decentralized collective.",
      "Governance: All members have a voice in the evolution of the protocol.",
      "Contribution: High-quality, high-intensity contributions are prioritized.",
      "Security: Members must prioritize the security and integrity of the network."
    ]
  }
};

export default function Legal() {
  const { pathname } = useLocation();
  const content = legalContent[pathname] || legalContent["/privacy-policy"];

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 md:mb-24 text-center">
          <content.icon className="text-primary mx-auto mb-6 md:mb-8" size={32} md:size={48} />
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-brutal tracking-tighter uppercase mb-6 md:mb-8">
            {content.title}
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">// Protocol_Legal_Framework</p>
        </header>

        <div className="space-y-8 md:space-y-16">
          {content.content.map((text, i) => (
            <div key={i} className="group p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:border-primary transition-colors">
              <span className="text-primary font-mono text-lg md:text-xl mb-4 block">[{String(i + 1).padStart(2, '0')}]</span>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs md:text-sm italic">
            Last Updated: March 31, 2026. This document is subject to community governance.
          </p>
        </div>
      </div>
    </div>
  );
}
