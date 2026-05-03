export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Analyze API Responses &amp;<br />
          <span className="text-[#58a6ff]">Optimize Your Cache Strategy</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect via webhook or upload logs to instantly discover optimal cache TTLs, reduce redundant requests, and cut infrastructure costs.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">TTL</div>
            <div className="text-xs text-[#8b949e] mt-1">Smart Recommendations</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">↓ 60%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. Cache Miss Reduction</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Response Analysis</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook &amp; log upload integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated TTL recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cache hit/miss visualizations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Response size &amp; frequency analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Actionable savings reports</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Optimizing
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How do I connect my API?</h3>
            <p className="text-sm text-[#8b949e]">Point your API gateway or proxy to our webhook endpoint, or upload HAR/JSON log files directly from your dashboard. Setup takes under 5 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How are TTL recommendations calculated?</h3>
            <p className="text-sm text-[#8b949e]">We analyze response frequency, payload similarity, and change rates across your endpoints to suggest TTLs that maximize cache hits without serving stale data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Is my API data kept private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. All data is encrypted in transit and at rest. We only store metadata and response hashes — never raw response bodies — to protect sensitive information.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} API Cache Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
