import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onStart }) {
  return (
    <section className="relative w-full" style={{ height: '70vh' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient top overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900">
              Build full websites instantly with your own AI key
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700">
              Got Idea turns prompts into production-ready web apps. You control the API key. We handle the workspace, live preview, and export.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.button
                onClick={onStart}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-600/20"
              >
                Start Building
              </motion.button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 font-semibold text-sky-700 ring-1 ring-sky-200 backdrop-blur"
              >
                See Features
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
