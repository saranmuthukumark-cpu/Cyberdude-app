import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogsData = [
  {
    category: 'Technology',
    author: 'Anbuselvan Rocky',
    date: 'May 28, 2026',
    readTime: '6 Min Read',
    title: 'Connecting Physical Sensor Telemetry: Architecting Resilient IoT Infrastructure',
    desc: 'Deep-dive blueprint explaining ESP32 board firmware optimization, MQTT queue configurations, and secure local cache fallbacks for offline operational stability.',
    content: 'Internet of Things (IoT) engineering represents the complex bridge connecting real physical sensors to centralized digital cloud servers. When architecting low-level hardware boards (like ESP32 or Raspberry Pi) to record thermal levels, gas density, or fluid flows, network instability becomes your primary engineering challenge.\n\nAt CyberDude Networks Pvt. Ltd., we construct robust hardware architectures using a strict local storage cache fallback pattern. If the WiFi or cellular connection fails, firmware automatically writes encoded telemetry data directly onto a local SPIFFS / SD card registry. Once the system detects that the network is online, a low-latency thread streams the cached events using secure MQTT payloads.\n\nWe utilize MQTT over secure sockets (MQTTS) because of its lightweight bandwidth footprint. Unlike heavy HTTP requests, MQTT functions over simple pub/sub packets, reducing cellular data costs by up to 80% for massive industrial scale setups.'
  },
  {
    category: 'SaaS & Development',
    author: 'Dev Lead',
    date: 'May 15, 2026',
    readTime: '8 Min Read',
    title: 'Optimizing Multi-Tenant DB Schema Pooling for High-Concurrent SaaS Platforms',
    desc: 'A comprehensive technical layout illustrating PostgreSQL dynamic thread pooling, multi-region caching, and safe tenant data isolation protocols.',
    content: 'Multi-tenant database engineering is the cornerstone of building secure, high-availability software-as-a-service (SaaS) environments. At CyberDude, when we launched CyberHRM and CyberGYM+, we faced a critical design choice: shared databases with tenant column filtering vs. independent schemas per tenant.\n\nWe architected a dynamic, high-security multi-tenant system using independent PostgreSQL schemas. When a user requests data, our middleware automatically intercepts the query, identifies the tenant key, and selects the matching connection schema pool. This guarantees absolute data isolation—meaning a security vulnerability in one tenant can never expose data belonging to another.\n\nTo manage database connection overhead, we configure PgBouncer dynamic pools, allowing up to 10,000 concurrent database queries with near-zero latency.'
  },
  {
    category: 'Cybersecurity',
    author: 'Tech Lead',
    date: 'May 02, 2026',
    readTime: '5 Min Read',
    title: 'Securing API Infrastructure: Resolving Crawling Blockages & Technical SEO Audits',
    desc: 'Guidelines on managing SSL key handshakes, establishing strict DDoS shields, resolving search crawling blockages, and passing technical indexing audits.',
    content: 'Technical security and SEO rankings are deeply intertwined. If search engine crawlers (Googlebot, Bingbot) encounter security certificate handshakes, slow response latency, or heavy script blocks, they will instantly demote your website in search indexing.\n\nOur cybersecurity and digital transformation workflows begin with a strict HTTPS configuration check. We set up automated SSL certificate handshakes, establish Cloudflare DDoS shields to block malicious crawl bots, and refine index configurations to ensure fast page load speeds. A secure site is a highly rankable site.'
  },
  {
    category: 'Branding',
    author: 'Design Lead',
    date: 'Apr 24, 2026',
    readTime: '4 Min Read',
    title: 'The Blueprint of Custom Layout Tokens: Scaling Consistent Visual Systems',
    desc: 'Learn how to construct robust layout design tokens, harmonized typography hierarchies, and interactive responsive UI prototypes using Figma.',
    content: 'Design aesthetics are not just about making a website look "pretty"; they are about architecting structured, consistent layout tokens that establish corporate brand authority. A high-quality visual system relies on a mathematical typography scale, rigid grid configurations, and consistent button designs.\n\nAt CyberDude, we establish harmonized design tokens inside Figma before a single line of code is written. We configure HSL-tailored colors, set explicit padding/margin variables, and outline exact hover transitions. This prevents bloated utility files and ensures that our Front-end engineers can translate UI layouts into responsive web environments flawlessly.'
  }
];

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const idx = parseInt(resolvedParams.id, 10);
  const blog = blogsData[idx];

  if (!blog || isNaN(idx)) {
    notFound();
  }

  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20">
      <HeroBanner
        title={blog.title}
        currentPage={`Insights / Blog Details`}
        showStats={false}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white dark:bg-[#222222] p-8 md:p-12 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#E47911] pb-4 border-b border-gray-150 dark:border-slate-800 uppercase tracking-wider">
            <span className="bg-orange-50 dark:bg-slate-800 px-3 py-1 rounded-sm">{blog.category}</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span className="text-[#4a4a52] dark:text-gray-400">{blog.readTime}</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span className="text-[#4a4a52] dark:text-gray-400">{blog.date}</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4.5xl font-bold text-[#101010] dark:text-white leading-tight tracking-tight">
            {blog.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-3 bg-[#f8f9fa] dark:bg-[#1a1a1a] p-4 rounded-md border border-gray-200 dark:border-slate-800/60">
            <div className="w-10 h-10 rounded-full bg-[#E47911] text-white flex items-center justify-center font-bold">
              {blog.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-[#101010] dark:text-white">{blog.author}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold">CyberDude Professional Team Member</div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line pt-4 font-medium">
            {blog.content}
          </p>

          <div className="pt-8 border-t border-gray-150 dark:border-slate-800/40 flex justify-between items-center">
            <Link
              href="/blog"
              className="text-xs font-bold text-gray-400 hover:text-[#E47911] flex items-center gap-2"
            >
              <i className="fa-solid fa-arrow-left text-[10px]"></i> Back to Insights
            </Link>

            <Link
              href="/contact"
              className="theme-btn1 py-3 px-5 text-xs"
            >
              Consult with our Team <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
