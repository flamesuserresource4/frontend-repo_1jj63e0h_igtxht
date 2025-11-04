import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export default function FooterCTA({ onStart }) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Ready to turn your idea into a live site?
              </h3>
              <p className="mt-2 text-slate-600">
                Bring your own API key and start generating. Edit, preview, and export — all in one place.
              </p>
            </div>
            <div className="flex md:justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-900/10"
              >
                <Rocket className="h-5 w-5" /> Start Building
              </motion.button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Got Idea — AI Website Generator
        </div>
      </div>
    </footer>
  )
}
