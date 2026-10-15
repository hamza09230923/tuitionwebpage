/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'
import { characterRigParts, supportedCharacterStates } from '../../../data/literature/anInspectorCallsStage'

const partMotion = (part, state) => {
  const headTurns = { 'turn-left': -4, 'turn-right': 5, shocked: -3, thinking: -2, ashamed: 4, concerned: -2, listening: 2 }
  if (part === 'head' || part === 'hair' || part === 'face') return { rotate: headTurns[state] || 0, y: state === 'shocked' ? -2 : 0 }
  if (part === 'torso') return { rotate: state === 'defensive' ? -1.5 : state === 'restless' ? 1.5 : 0, scaleY: state === 'seated' ? .82 : 1 }
  if (part === 'upper-arm-left') return { rotate: state === 'defensive' ? -5 : state === 'talking' ? 3 : 0 }
  if (part === 'upper-arm-right') return { rotate: state === 'defensive' ? 5 : state === 'talking' ? -4 : 0 }
  if (part === 'forearm-left') return { rotate: state === 'talking' ? -7 : state === 'concerned' ? 3 : 0 }
  if (part === 'forearm-right') return { rotate: state === 'talking' ? 8 : state === 'shocked' ? -5 : 0 }
  if (part.includes('hand')) return { rotate: state === 'talking' ? 4 : 0 }
  if (part === 'upper-legs' || part === 'lower-legs') return { scaleY: state === 'seated' ? .72 : 1 }
  return { rotate: 0 }
}

function StageCharacter({ character, state = 'idle', asset, dimmed = false }) {
  const reduceMotion = useReducedMotion()
  const supportedState = supportedCharacterStates.includes(state) ? state : 'idle'
  const hidden = supportedState === 'hidden'
  const walkingOffset = supportedState === 'walking' ? 3.5 : 0
  const spriteStyle = {
    '--character-art': `url(${asset})`,
    '--sprite-position': `${character.spritePosition}%`,
  }

  return <motion.div
    className={`stage-character-rig depth-${character.depth}`}
    data-character={character.id}
    data-state={supportedState}
    style={{ ...spriteStyle, left: `${character.x + walkingOffset}%`, top: `${character.y}%`, '--character-scale': character.scale }}
    initial={false}
    animate={{ opacity: hidden ? 0 : dimmed ? .22 : 1, scale: hidden ? character.scale * .96 : character.scale }}
    transition={{ duration: reduceMotion ? 0 : supportedState === 'walking' ? 1.55 : .65, ease: [0.22, 1, 0.36, 1] }}
    aria-label={hidden ? undefined : `${character.name}, ${supportedState}`}
    aria-hidden={hidden}
  >
    <div className="rig-base" />
    {!reduceMotion && characterRigParts.map((part) => <motion.span
      key={part}
      className={`rig-part rig-${part}`}
      animate={partMotion(part, supportedState)}
      transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
    />)}
    <span className="rig-shadow" />
  </motion.div>
}

export default StageCharacter
