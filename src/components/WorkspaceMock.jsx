import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Eye } from 'lucide-react'

const starterHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Got Idea Preview</title>
  <style>
    body{font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, \"Apple Color Emoji\", \"Segoe UI Emoji\";padding:24px;margin:0;background:#f8fafc;color:#0f172a}
    .card{background:#fff;border-radius:16px;padding:24px;box-shadow:0 8px 24px rgba(2,6,23,.06);border:1px solid #e2e8f0}
    .btn{background:#0284c7;color:#fff;border-radius:12px;padding:10px 14px;border:none}
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to Got Idea</h1>
    <p>Edit the code on the left and your preview updates here instantly.</p>
    <button class="btn">Primary Action</button>
  </div>
</body>
</html>`

export default function WorkspaceMock() {
  const [code, setCode] = useState(starterHtml)
  const srcDoc = useMemo(() => code, [code])

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Live Workspace</h3>
            <p className="text-slate-600">A split editor and preview — type and see changes instantly.</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
              <div className="text-sm font-medium text-slate-700">index.html</div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
                  <Save className="h-4 w-4" /> Save
                </button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-full min-h-[360px] w-full flex-1 resize-none bg-transparent p-4 font-mono text-[13px] leading-6 text-slate-800 outline-none"
              spellCheck={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="min-h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
              <div className="text-sm font-medium text-slate-700">Preview</div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                  <Eye className="h-3.5 w-3.5" /> Live
                </span>
              </div>
            </div>
            <iframe
              title="preview"
              srcDoc={srcDoc}
              className="h-[380px] w-full"
              sandbox="allow-scripts allow-forms allow-modals"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
