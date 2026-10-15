/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

function StageLighting({ lighting }) {
  return <div className="cinematic-lighting" aria-hidden="true">
    <motion.span className="light-ambient" animate={{ opacity: lighting.ambient }} />
    <motion.span className="light-room-key" animate={{ opacity: lighting.warm }} />
    <motion.span className="light-window" animate={{ opacity: lighting.cool }} />
    <motion.span className="light-fireplace" animate={{ opacity: lighting.fire }} />
    <motion.span className="light-exposure" animate={{ opacity: lighting.exposure }} />
    <motion.span className="light-character-shadows" animate={{ opacity: .55 - (lighting.exposure * .32) }} />
  </div>
}

export default StageLighting
