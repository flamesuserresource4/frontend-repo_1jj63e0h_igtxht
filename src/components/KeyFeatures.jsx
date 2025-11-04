import { Rocket, Code2, Wand2, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Rocket,
    title: 'Instant Scaffolding',
    desc: 'Spin up a modern Vite + React app in seconds based on your idea prompt.',
  },
  {
    icon: Code2,
    title: 'Live Code Editor',
    desc: 'Edit with an editor-like feel and see updates in a split preview instantly.',
  },
  {
    icon: Wand2,
    title: 'Your API Key',
    desc: 'Run generation with your own OpenAI (or other) key for full control.',
  },
  {
    icon: Download,
    title: 'One-Click Export',
    desc: 'Download as a Vercel-ready ZIP with correct routing and configs.',
  },
]

export default function KeyFeatures() {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to go from idea to demo
          </h2>
          <p className="mt-4 text-slate-600">
            A clean workspace with live preview, delightful animations, and export-ready builds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
