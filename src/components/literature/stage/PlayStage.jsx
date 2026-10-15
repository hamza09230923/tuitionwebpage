/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Pause, Play, RotateCcw, X } from 'lucide-react'
import { inspectorCallsAssets } from '../../../assets/literature/an-inspector-calls/assetManifest'
import { inspectorArrivalScene } from '../../../data/literature/anInspectorCallsStage'
import VirtualCamera from './VirtualCamera'
import StageLighting from './StageLighting'
import SceneHotspot from './SceneHotspot'
import SceneCaption from './SceneCaption'
import './stage.css'

const familyScene = inspectorCallsAssets.environments.familyBeforeInspector
const arrivalScene = inspectorCallsAssets.environments.diningRoomArrival

const focusCameras = {
  room: { scale: 1.03, x: -1, y: 0, focus: 'room' },
  lighting: { scale: 1.09, x: -2, y: 1, focus: 'lighting' },
  inspector: { scale: 1.23, x: -11, y: 2, focus: 'inspector' },
  family: { scale: 1.13, x: 0, y: 3, focus: 'family' },
  door: { scale: 1.18, x: -9, y: 1, focus: 'door' },
}

function PlayStage({ onComplete, onUsePearl }) {
  const [frameIndex, setFrameIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState('')
  const completedRef = useRef(false)
  const frame = inspectorArrivalScene.frames[frameIndex]
  const hotspot = inspectorArrivalScene.hotspots.find((item) => item.id === activeHotspot)
  const camera = activeHotspot ? focusCameras[hotspot.focus] : frame.camera
  const teachingPause = Boolean(frame.teachingPause && !playing)

  useEffect(() => {
    if (!playing) return undefined
    if (frameIndex >= inspectorArrivalScene.frames.length - 1) {
      setPlaying(false)
      return undefined
    }
    const timer = window.setTimeout(() => setFrameIndex((current) => current + 1), frame.duration)
    return () => window.clearTimeout(timer)
  }, [playing, frame.duration, frameIndex])

  useEffect(() => {
    if (frame.teachingPause && !completedRef.current) {
      completedRef.current = true
      onComplete?.()
    }
  }, [frame.teachingPause, onComplete])

  const start = () => {
    setActiveHotspot('')
    if (frameIndex === inspectorArrivalScene.frames.length - 1) setFrameIndex(0)
    setPlaying(true)
  }

  return <div className="cinematic-stage-shell">
    <div className="cinematic-stage-topbar">
      <span>ACT ONE / THE BIRLING DINING ROOM / 1912</span>
      <span className={playing ? 'is-playing' : ''}>{playing ? 'PLAYING' : teachingPause ? 'TEACHING PAUSE' : 'READY'}</span>
    </div>
    <div className="cinematic-stage-viewport" data-active-focus={hotspot?.focus || ''}>
      <VirtualCamera camera={camera}>
        <motion.img className="cinematic-environment cinematic-family-scene" src={familyScene} alt="Arthur, Sybil, Sheila, Eric and Gerald seated around the Birling dining table before the Inspector arrives" animate={{ opacity: frameIndex >= 5 ? 0 : 1, scale: frameIndex === 2 ? 1.012 : 1 }} transition={{ duration: frameIndex >= 5 ? 1.15 : .7, ease: [0.22, 1, 0.36, 1] }} />
        <motion.img className="cinematic-environment cinematic-arrival-scene" src={arrivalScene} alt="Inspector Goole entering as the Birling family turn towards the open door" initial={false} animate={{ opacity: frameIndex >= 5 ? 1 : 0, clipPath: frameIndex >= 5 ? 'inset(0 0% 0 0)' : 'inset(0 0 0 100%)' }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }} />
        <div className="cinematic-depth depth-background" aria-hidden="true" />
        <motion.div className="cinematic-character-reaction reaction-arthur" animate={{ rotate: frameIndex === 1 ? -.7 : 0, y: frameIndex === 2 ? -2 : 0 }} />
        <motion.div className="cinematic-character-reaction reaction-family" animate={{ x: frameIndex >= 3 && frameIndex < 5 ? 3 : 0, opacity: frameIndex >= 5 ? 0 : 1 }} />
      </VirtualCamera>
      <StageLighting lighting={frame.lighting} />
      {frame.soundCue && <motion.div className="cinematic-sound-cue" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }}><span>{frame.soundCue}</span><i /><i /><i /></motion.div>}
      <AnimatePresence>{teachingPause && <motion.div className="explore-moment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><span>EXPLORE THIS MOMENT</span><small>Select a stage choice to investigate Priestley&apos;s method.</small></motion.div>}</AnimatePresence>
      <AnimatePresence>{teachingPause && inspectorArrivalScene.hotspots.map((item, index) => <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .12 + index * .08 }} exit={{ opacity: 0 }}><SceneHotspot hotspot={item} active={activeHotspot === item.id} onSelect={(id) => setActiveHotspot((current) => current === id ? '' : id)} /></motion.div>)}</AnimatePresence>
      {activeHotspot && <motion.div className={`cinematic-focus-dimmer focus-${hotspot.focus}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
      <SceneCaption frame={frame} index={frameIndex} total={inspectorArrivalScene.frames.length} />
    </div>
    <div className="cinematic-stage-controls">
      <button type="button" className="cinematic-play-button" onClick={playing ? () => setPlaying(false) : start}>{playing ? <Pause size={14} fill="currentColor" /> : frameIndex === inspectorArrivalScene.frames.length - 1 ? <RotateCcw size={14} /> : <Play size={14} fill="currentColor" />}{playing ? 'Pause scene' : frameIndex === inspectorArrivalScene.frames.length - 1 ? 'Replay scene' : 'Play scene'}</button>
      <div className="cinematic-timeline" aria-label={`Scene beat ${frameIndex + 1} of ${inspectorArrivalScene.frames.length}`}>{inspectorArrivalScene.frames.map((item, index) => <button type="button" key={item.id} className={index <= frameIndex ? 'is-past' : ''} onClick={() => { setPlaying(false); setActiveHotspot(''); setFrameIndex(index) }} aria-label={`Go to ${item.label}`}><span /></button>)}</div>
      <span className="cinematic-beat-count">{String(frameIndex + 1).padStart(2, '0')} / {String(inspectorArrivalScene.frames.length).padStart(2, '0')}</span>
    </div>
    <AnimatePresence>{hotspot && <motion.aside className="cinematic-teaching-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
      <div className="teaching-panel-method"><span>METHOD</span><strong>{hotspot.method}</strong></div>
      <div className="teaching-panel-copy"><span>LOOK CLOSER</span><h3>{hotspot.title}</h3><p>{hotspot.explanation}</p><div className="teaching-question"><strong>THINK</strong><span>{hotspot.question}</span></div><div className="teaching-pearl"><strong>ANALYSIS STARTER</strong><span>{hotspot.pearlPrompt}</span></div></div>
      <div className="teaching-panel-actions"><button type="button" onClick={() => setActiveHotspot('')} aria-label="Close teaching panel"><X size={16} /></button><button type="button" className="send-to-pearl" onClick={onUsePearl}>Open full scene notes <ArrowRight size={14} /></button></div>
    </motion.aside>}</AnimatePresence>
    <details className="cinematic-transcript"><summary>Read the scene instead</summary><p>{inspectorArrivalScene.summary}</p><ol>{inspectorArrivalScene.frames.slice(0, -1).map((item) => <li key={item.id}><strong>{item.label}:</strong> {item.caption}</li>)}</ol></details>
  </div>
}

export default PlayStage
