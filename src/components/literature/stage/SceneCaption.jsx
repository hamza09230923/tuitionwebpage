/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'

function SceneCaption({ frame, index, total }) {
  return <AnimatePresence mode="wait">
    <motion.div key={frame.id} className="cinematic-caption" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
      <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <div><strong>{frame.label}</strong><p>{frame.caption}</p></div>
    </motion.div>
  </AnimatePresence>
}

export default SceneCaption
