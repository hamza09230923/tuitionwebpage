/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'

function VirtualCamera({ camera, children }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className="cinematic-camera"
      animate={reduceMotion ? { scale: 1, x: 0, y: 0 } : { scale: camera.scale, x: `${camera.x}%`, y: `${camera.y}%` }}
      transition={{ duration: reduceMotion ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }}
      data-focus={camera.focus}
    >
      {children}
    </motion.div>
  )
}

export default VirtualCamera
