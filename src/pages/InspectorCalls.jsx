/* eslint-disable react/prop-types, no-unused-vars */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, CircleHelp,
  Eye, Lightbulb, LockKeyhole, Play, RotateCcw, Sparkles,
  Target, Volume2, WandSparkles, X, Zap,
} from 'lucide-react'
import { inspectorCallsWork } from '../data/inspectorCallsContent'
import CinematicPlayStage from '../components/literature/stage/PlayStage'
import {
  ContextGuideSection,
  EvaJourneySection,
  FullStorySection,
  GlossarySection,
  KeyMomentsSection,
  MeetCastSection,
  MethodsGuideSection,
  QuoteLibrarySection,
  StoryOverviewSection,
  ThemeGuideSection,
} from '../components/literature/LearningSections'
import './InspectorCalls.accessibility.css'

const STORAGE_KEY = 'myschola:literature:an-inspector-calls'

const defaultProgress = {
  completed: [],
  viewed: ['story'],
  sceneFrame: 0,
  quizScore: 0,
  savedEvidence: [],
  pearlMode: 'guided',
}

function readProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    return stored ? { ...defaultProgress, ...stored } : defaultProgress
  } catch {
    return defaultProgress
  }
}

function useBookProgress() {
  const [progress, setProgress] = useState(readProgress)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])
  const markViewed = (id) => setProgress((current) => ({
    ...current,
    viewed: Array.from(new Set([...current.viewed, id])),
  }))
  const markComplete = (id) => setProgress((current) => ({
    ...current,
    completed: Array.from(new Set([...current.completed, id])),
    viewed: Array.from(new Set([...current.viewed, id])),
  }))
  return { progress, setProgress, markViewed, markComplete }
}

function SectionKicker({ children, icon: Icon }) {
  return <span className="literature-kicker">{Icon ? <Icon size={13} aria-hidden="true" /> : null}{children}</span>
}

function Button({ children, variant = 'dark', className = '', ...props }) {
  return <button type="button" className={`literature-button literature-button-${variant} ${className}`} {...props}>{children}</button>
}

function PlayStage({ frame, playing, setPlaying, setFrameIndex, frameIndex, activeHotspot, setActiveHotspot }) {
  const hotspots = [
    { id: 'lighting', label: 'Lighting', x: 15, y: 19, description: 'The opening warmth suggests comfort and privacy. When the Inspector enters, the harder light exposes the room.' },
    { id: 'door', label: 'The door', x: 84, y: 37, description: 'The entrance is a visual interruption: the family’s private celebration now has to answer to the outside world.' },
    { id: 'inspector', label: 'Inspector Goole', x: 76, y: 49, description: 'He stays calm while the family react. His physical control makes their status look fragile and directs the audience\'s attention.' },
    { id: 'table', label: 'The dining table', x: 48, y: 67, description: 'The polished table displays wealth, ritual and unity. During the questioning it becomes a barrier between the family, the Inspector and the truth.' },
  ]
  const camera = [
    { scale: 1, x: '0%', y: '0%' },
    { scale: 1.035, x: '-1.2%', y: '0%' },
    { scale: 1.08, x: '-3.4%', y: '0%' },
    { scale: 1.12, x: '-4.6%', y: '-1%' },
  ][frameIndex]
  const beat = [
    { label: 'COMFORT', detail: 'The room performs security.', speaker: 'BIRLING', line: 'The evening appears to belong to the family.' },
    { label: 'INTERRUPTION', detail: 'Every face turns towards the door.', speaker: 'STAGE DIRECTION', line: 'A sharp ring breaks Birling\'s confident speech.' },
    { label: 'SCRUTINY', detail: 'Harder light enters with him.', speaker: 'INSPECTOR', line: 'The celebration becomes an investigation.' },
    { label: 'EXPOSURE', detail: 'Status no longer controls the story.', speaker: 'AUDIENCE VIEW', line: 'One room. Six reactions. No easy exit.' },
  ][frameIndex]
  useEffect(() => {
    if (!playing) return undefined
    const timer = window.setTimeout(() => {
      if (frameIndex >= inspectorCallsWork.frames.length - 1) setPlaying(false)
      else setFrameIndex((current) => current + 1)
    }, frame.duration * 1000)
    return () => window.clearTimeout(timer)
  }, [playing, frame.duration, frameIndex, setFrameIndex, setPlaying])
  const lighting = frame.lighting === 'hard'
  return (
    <div className={`play-stage ${lighting ? 'play-stage-hard' : 'play-stage-warm'}`}>
      <div className="stage-topline"><span>ACT ONE · BIRLING DINING ROOM</span><span>{playing ? 'SCENE PLAYING' : 'PAUSED'}</span></div>
      <div className="stage-art" aria-label="Animated original illustration of the Birling dining room">
        <motion.img
          className="stage-scene-image"
          src="/literature/an-inspector-calls/inspector-arrival-v2.png"
          alt="Original illustration of Inspector Goole entering the Birling dining room as the family turn towards him"
          animate={camera}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div className="stage-warmth" animate={{ opacity: lighting ? .08 : .42 }} transition={{ duration: 1 }} />
        <motion.div className="stage-scrutiny" animate={{ opacity: lighting ? .72 : .12, width: lighting ? '42%' : '18%' }} transition={{ duration: 1 }} />
        <motion.div className="stage-inspector-focus" animate={{ opacity: frameIndex >= 2 ? 1 : 0, scale: frameIndex === 3 ? 1.06 : 1 }} />
        {frameIndex >= 1 && <motion.div className="stage-sound-cue" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: frameIndex === 1 ? 1 : 0, scale: 1 }}><span>KNOCK</span><i /><i /><i /></motion.div>}
        {hotspots.map((hotspot) => (
          <button key={hotspot.id} type="button" className={`stage-hotspot stage-hotspot-${hotspot.id} ${activeHotspot === hotspot.id ? 'is-active' : ''}`} onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? '' : hotspot.id)} aria-label={`Explore ${hotspot.label}`}>
            <span>+</span><span className="stage-hotspot-label">{hotspot.label}</span>
          </button>
        ))}
        <AnimatePresence mode="wait"><motion.div key={frame.id} className="stage-beat-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><span>{beat.label}</span><strong>{beat.detail}</strong><small>{beat.speaker}</small><p>{beat.line}</p></motion.div></AnimatePresence>
        <div className="stage-caption"><span className="stage-caption-mark">BEAT {String(frameIndex + 1).padStart(2, '0')}</span><AnimatePresence mode="wait"><motion.span key={frame.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>{frame.caption}</motion.span></AnimatePresence></div>
      </div>
      <div className="stage-controls">
        <Button variant="stage" onClick={() => { setPlaying((value) => !value); if (frameIndex === inspectorCallsWork.frames.length - 1) setFrameIndex(0) }}>
          {playing ? <><span className="pause-bars" /> Pause scene</> : <><Play size={14} fill="currentColor" /> {frameIndex === inspectorCallsWork.frames.length - 1 ? 'Play again' : 'Play scene'}</>}
        </Button>
        <div className="stage-progress" aria-label={`Scene frame ${frameIndex + 1} of ${inspectorCallsWork.frames.length}`}>
          {inspectorCallsWork.frames.map((item, index) => <button key={item.id} type="button" className={index <= frameIndex ? 'is-current' : ''} onClick={() => { setFrameIndex(index); setPlaying(false) }} aria-label={`Go to scene frame ${index + 1}`} />)}
        </div>
        <span className="stage-time">{String(frameIndex + 1).padStart(2, '0')} / 04</span>
      </div>
      <AnimatePresence>
        {activeHotspot && <motion.div className="stage-hotspot-note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
          <div><span className="note-label">LOOK CLOSER</span><h4>{hotspots.find((item) => item.id === activeHotspot)?.label}</h4><p>{hotspots.find((item) => item.id === activeHotspot)?.description}</p></div>
          <button type="button" onClick={() => setActiveHotspot('')} aria-label="Close hotspot"><X size={16} /></button>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

function StorySection({ onOpenPlay, onComplete }) {
  const [activeEvent, setActiveEvent] = useState(2)
  const events = [
    { time: 'BEFORE', label: 'The celebration', text: 'The Birlings gather around a warm, private table. Arthur is certain the future belongs to people like him.' },
    { time: 'INTERRUPTION', label: 'The arrival', text: 'A door opens and a stranger changes the pace of the evening. The family’s confidence is now being watched.' },
    { time: 'AFTER', label: 'The reckoning', text: 'A chain of choices becomes impossible to dismiss as “just business” or “just an accident”.' },
  ]
  return <section className="book-section story-section">
    <div className="section-heading split-heading"><div><SectionKicker icon={Eye}>WATCH IT</SectionKicker><h2>See the story before you study it.</h2><p>Three shifts. One question: what happens when a private choice becomes someone else’s consequence?</p></div><div className="story-stamp">A play about<br /><strong>what we owe<br />one another.</strong></div></div>
    <div className="story-rail">
      <div className="story-rail-line"><motion.span animate={{ width: `${((activeEvent + 1) / events.length) * 100}%` }} /></div>
      {events.map((event, index) => <button type="button" key={event.time} className={`story-rail-step ${activeEvent === index ? 'is-active' : ''}`} onClick={() => setActiveEvent(index)}><span>{event.time}</span><strong>{event.label}</strong></button>)}
    </div>
    <div className="story-reveal"><div className={`story-illustration story-illustration-${activeEvent}`}><div className="story-sun" /><div className="story-building" /><div className="story-figure" /><div className="story-thread" /><span className="story-scene-number">0{activeEvent + 1}</span></div><div className="story-copy"><SectionKicker icon={Target}>STORY BEAT 0{activeEvent + 1}</SectionKicker><h3>{events[activeEvent].label}</h3><p>{events[activeEvent].text}</p><div className="story-callout"><span>THE THREAD</span><strong>{activeEvent === 0 ? 'comfort → certainty' : activeEvent === 1 ? 'certainty → scrutiny' : 'choice → consequence'}</strong></div>{activeEvent === 2 && <Button onClick={() => { onComplete(); onOpenPlay() }}>Watch the arrival <ArrowRight size={15} /></Button>}</div></div>
  </section>
}

function EvaSection({ onComplete }) {
  const [active, setActive] = useState(0)
  const item = inspectorCallsWork.journey[active]
  return <section className="book-section eva-section"><div className="section-heading"><SectionKicker icon={Zap}>UNDERSTAND IT</SectionKicker><h2>Eva&apos;s journey is a chain, not a single event.</h2><p>Move through every stage. At each point, see who has power, what decision is made and what consequence follows.</p></div><div className="eva-map"><div className="eva-map-path" />{inspectorCallsWork.journey.map((journey, index) => <button key={journey.id} type="button" className={`eva-node ${active === index ? 'is-active' : ''}`} style={{ '--node-color': journey.color }} onClick={() => setActive(index)}><span>{index + 1}</span><strong>{journey.label}</strong></button>)}<motion.div className="eva-orbit" animate={{ left: `${8 + active * 12}%` }} transition={{ type: 'spring', stiffness: 120 }}><span>Eva</span></motion.div></div><div className="eva-detail"><div className="eva-index">0{active + 1} / {String(inspectorCallsWork.journey.length).padStart(2, '0')}</div><div><h3>{item.impact}</h3><p>{item.caption}</p><small>{item.power || 'Power shifts between the characters.'} {item.consequence || 'The next event changes the chain.'}</small></div><div className="eva-next">Next <ArrowRight size={15} /></div></div><Button onClick={onComplete}>I can explain the complete chain <Check size={15} /></Button></section>
}

function ResponsibilitySection({ onComplete }) {
  const [theme, setTheme] = useState(inspectorCallsWork.themes[0])
  const [selectedNode, setSelectedNode] = useState('Inspector')
  return <section className="book-section network-section"><div className="section-heading"><SectionKicker icon={WandSparkles}>EXPLORE IT</SectionKicker><h2>Responsibility is a web.</h2><p>Pull one thread. See who and what it touches. The connections are the argument.</p></div><div className="theme-tabs">{inspectorCallsWork.themes.map((item) => <button type="button" key={item.id} className={theme.id === item.id ? 'is-active' : ''} onClick={() => { setTheme(item); setSelectedNode(item.nodes[0]) }}>{item.label}</button>)}</div><div className="network-canvas"><div className="network-lines">{theme.nodes.map((node, index) => <span key={node} className={`network-line network-line-${index} ${selectedNode === node ? 'is-active' : ''}`} />)}</div><button type="button" className="network-centre" onClick={() => setSelectedNode(theme.label)}><span>THE IDEA</span><strong>{theme.label}</strong></button>{theme.nodes.map((node, index) => <button type="button" key={node} className={`network-node network-node-${index} ${selectedNode === node ? 'is-active' : ''}`} onClick={() => setSelectedNode(node)}><span>{node}</span></button>)}</div><div className="network-insight"><div><span className="note-label">CONNECTED IDEA</span><h3>{selectedNode === theme.label ? theme.label : selectedNode}</h3><p>{selectedNode === theme.label ? theme.blurb : `${selectedNode} is one part of Priestley’s wider picture of ${theme.label.toLowerCase()}. Ask what changes when this connection is made visible.`}</p></div><Button variant="light" onClick={onComplete}>Use this in a thesis <ArrowRight size={15} /></Button></div></section>
}

function LegacyMethodsSection({ onComplete, onUsePearl }) {
  const [lighting, setLighting] = useState(28)
  const after = lighting > 55
  return <section className="book-section methods-section"><div className="section-heading"><SectionKicker icon={Lightbulb}>ANALYSE IT</SectionKicker><h2>Lighting lab: watch comfort become scrutiny.</h2><p>Slide the stage light. The furniture stays still, but the audience’s reading changes.</p></div><div className={`lighting-lab ${after ? 'is-after' : ''}`}><div className="lighting-room"><div className="lab-glow" style={{ opacity: Math.max(.15, lighting / 100) }} /><div className="lab-table" /><div className="lab-door" /><div className="lab-label before">COMFORT</div><div className="lab-label after">EXPOSURE</div><span className="lab-room-copy">{after ? 'The light refuses to let the room stay private.' : 'The room invites us to trust its appearance.'}</span></div><div className="lighting-control"><div className="lighting-control-head"><span>BEFORE INSPECTOR</span><strong>{after ? 'AFTER INSPECTOR' : 'WARM / INTIMATE'}</strong></div><input aria-label="Lighting intensity" type="range" min="0" max="100" value={lighting} onChange={(event) => setLighting(Number(event.target.value))} /><div className="lighting-words"><span>appearance</span><ArrowRight size={14} /><span>exposure</span></div><div className="lighting-prompt"><CircleHelp size={16} /><p>What changes for the audience when the light gets harder?</p></div><div className="lighting-options"><button type="button" className={after ? 'is-correct' : ''} onClick={() => setLighting(82)}>It makes hidden choices harder to ignore <Check size={14} /></button><button type="button" onClick={() => setLighting(18)}>It makes the family look more comfortable</button></div></div></div><div className="methods-footer"><span><strong>METHOD</strong> stage direction · contrast</span><Button onClick={() => { onComplete(); onUsePearl() }}>PEARL THIS IDEA <ArrowRight size={15} /></Button></div></section>
}

function MethodsSection({ onComplete }) {
  const [lighting, setLighting] = useState(28)
  const after = lighting > 55
  return <section className="book-section methods-section"><div className="section-heading"><SectionKicker icon={Lightbulb}>SEE THE CRAFT</SectionKicker><h2>Lighting lab: watch comfort become scrutiny.</h2><p>Move the light through the room and observe how the audience&apos;s reading changes.</p></div><div className={`lighting-lab ${after ? 'is-after' : ''}`}><div className="lighting-room"><div className="lab-glow" style={{ opacity: Math.max(.15, lighting / 100) }} /><div className="lab-table" /><div className="lab-door" /><div className="lab-label before">COMFORT</div><div className="lab-label after">EXPOSURE</div><span className="lab-room-copy">{after ? 'The light refuses to let the room stay private.' : 'The room invites us to trust its appearance.'}</span></div><div className="lighting-control"><div className="lighting-control-head"><span>BEFORE INSPECTOR</span><strong>{after ? 'AFTER INSPECTOR' : 'WARM / INTIMATE'}</strong></div><input aria-label="Lighting intensity" type="range" min="0" max="100" value={lighting} onChange={(event) => setLighting(Number(event.target.value))} /><div className="lighting-words"><span>appearance</span><ArrowRight size={14} /><span>exposure</span></div><div className="lighting-prompt"><CircleHelp size={16} /><p>What changes for the audience when the light gets harder?</p></div><div className="lighting-options"><button type="button" className={after ? 'is-correct' : ''} onClick={() => setLighting(82)}>It makes hidden choices harder to ignore <Check size={14} /></button><button type="button" onClick={() => setLighting(18)}>It makes the family look more comfortable</button></div></div></div><div className="methods-footer"><span><strong>METHOD</strong> stage direction · contrast</span><Button onClick={onComplete}>Mark this method understood <Check size={15} /></Button></div></section>
}

function ContextSection({ onComplete }) {
  const [topic, setTopic] = useState(inspectorCallsWork.context[0])
  return <section className="book-section context-section"><div className="section-heading split-heading"><div><SectionKicker icon={BookOpen}>ANALYSE IT</SectionKicker><h2>Two dates. One deliberate conversation.</h2><p>Context matters when it sharpens the writer’s choices, not when it becomes a fact dump.</p></div><div className="context-arrow">1912 <ArrowRight /> 1945</div></div><div className="context-tabs">{inspectorCallsWork.context.map((item) => <button type="button" key={item.id} className={topic.id === item.id ? 'is-active' : ''} onClick={() => setTopic(item)}>{item.label}</button>)}</div><div className="context-columns"><div><span className="context-year">1912 · WORLD OF THE PLAY</span><h3>{topic.label}</h3><p>{topic.play}</p></div><div className="context-connector"><span>WHY<br />DOES IT<br />MATTER?</span></div><div><span className="context-year">1945 · PRIESTLEY’S AUDIENCE</span><h3>{topic.label}</h3><p>{topic.audience}</p></div></div><div className="context-bottom"><span>CHARACTER → AUDIENCE → MESSAGE</span><Button variant="light" onClick={onComplete}>I can connect the dates <Check size={15} /></Button></div></section>
}

function QuoteSection({ onComplete, onSaveQuote }) {
  const [selected, setSelected] = useState(inspectorCallsWork.quotes[0])
  return <section className="book-section quote-section"><div className="section-heading"><SectionKicker icon={Target}>ANALYSE IT</SectionKicker><h2>Give every quotation a job.</h2><p>Short evidence becomes useful when you can explain who says it, what method is working and where it belongs in an argument.</p></div><div className="quote-explorer"><div className="quote-picker">{inspectorCallsWork.quotes.map((quote) => <button type="button" key={quote.id} className={selected.id === quote.id ? 'is-active' : ''} onClick={() => setSelected(quote)}><span>“</span><span>{quote.text}</span><small>{quote.speaker}</small></button>)}</div><AnimatePresence mode="wait"><motion.div key={selected.id} className="quote-detail" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}><div className="quote-mark">“</div><blockquote>{selected.text}</blockquote><cite>— {selected.speaker}</cite><div className="quote-tags"><span>{selected.theme}</span><span>{selected.method}</span><span>{selected.event}</span></div><div className="quote-job"><span>PEARL JOB</span><p>{selected.pearl}</p></div><Button variant="light" onClick={() => { onSaveQuote(selected.id); onComplete() }}>{'Save to My Evidence'} <Check size={15} /></Button></motion.div></AnimatePresence></div></section>
}

const PEARL_LABELS = ['P', 'E', 'A', 'R', 'L']

function PearlSection({ onComplete, focusPearl }) {
  const labels = PEARL_LABELS
  const [mode, setMode] = useState('guided')
  const [active, setActive] = useState('P')
  const [completed, setCompleted] = useState([])
  const [showModel, setShowModel] = useState(false)
  useEffect(() => { if (focusPearl) setActive('P') }, [focusPearl])
  useEffect(() => { if (completed.length === PEARL_LABELS.length) onComplete() }, [completed.length, onComplete])
  const pearl = inspectorCallsWork.pearl.model
  const mark = (label) => { setCompleted((current) => Array.from(new Set([...current, label]))); const next = labels[labels.indexOf(label) + 1]; if (next) setActive(next) }
  const modeCopy = { guided: 'Sentence starters and prompts are on.', supported: 'Write the thinking; keep the evidence bank.', independent: 'Labels only. Your argument drives the paragraph.', exam: 'Exam mode. Planning help is hidden.' }
  return <section className="book-section pearl-section"><div className="section-heading split-heading"><div><SectionKicker icon={Target}>BUILD IT</SectionKicker><h2>Build a PEARL paragraph.</h2><p>{inspectorCallsWork.pearl.question}</p></div><div className="pearl-levels">{Object.keys(modeCopy).map((item) => <button type="button" key={item} className={mode === item ? 'is-active' : ''} onClick={() => setMode(item)}>{item}</button>)}</div></div><div className="pearl-workspace"><div className="pearl-steps">{labels.map((label) => <button type="button" key={label} className={`${active === label ? 'is-active' : ''} ${completed.includes(label) ? 'is-done' : ''}`} onClick={() => setActive(label)}><strong>{label}</strong><span>{({ P: 'Point', E: 'Evidence', A: 'Analysis', R: 'Reader', L: 'Link' })[label]}</span>{completed.includes(label) ? <Check size={13} /> : null}</button>)}</div><div className="pearl-editor"><span className="note-label">{mode.toUpperCase()} MODE · {active}</span><h3>{({ P: 'Make the argument visible.', E: 'Choose evidence with purpose.', A: 'Zoom in on the writer’s method.', R: 'Open the idea to the audience.', L: 'Return to the question and purpose.' })[active]}</h3><p>{modeCopy[mode]}</p><div className="pearl-writing-area">{mode === 'guided' && <span className="writing-starter">Priestley presents responsibility as…</span>}{mode === 'supported' && active === 'E' && <div className="evidence-pills">{inspectorCallsWork.quotes.slice(0, 3).map((quote) => <button type="button" key={quote.id} onClick={() => mark('E')}>{quote.text}</button>)}</div>}{mode === 'exam' ? <span className="writing-placeholder">Write your paragraph plan here…</span> : mode !== 'supported' || active !== 'E' ? <textarea aria-label={`${active} paragraph section`} placeholder={mode === 'independent' ? 'Write your thinking here…' : 'Add your idea here…'} /> : null}</div><Button onClick={() => mark(active)}>{completed.includes(active) ? 'Completed' : `Complete ${active}`} {completed.includes(active) ? <Check size={15} /> : <ArrowRight size={15} />}</Button></div><div className="pearl-output"><div className="output-top"><span>YOUR PARAGRAPH</span><span>{completed.length} / 5 parts</span></div>{labels.map((label) => <div key={label} className={`output-line ${completed.includes(label) ? 'is-filled' : ''}`}><strong>{label}</strong><p>{completed.includes(label) ? pearl[label] : <span className="output-blank">Complete {label} to assemble this line</span>}</p></div>)}{completed.length === 5 && <motion.div className="assembled-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Sparkles size={15} /> Your paragraph now moves from argument to purpose.</motion.div>}</div></div><div className="pearl-footer"><span><Zap size={14} /> {completed.length === 5 ? 'Paragraph assembled' : 'Complete each part to reveal your paragraph'}</span><button type="button" onClick={() => setShowModel((value) => !value)}>{showModel ? 'Hide model answer' : 'Explore model answer'} <ChevronDown size={15} /></button></div>{showModel && <ModelAnswer />}</section>
}

function ModelAnswer() {
  const [visible, setVisible] = useState([])
  const labels = ['P', 'E', 'A', 'R', 'L']
  const toggle = (label) => setVisible((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label])
  return <div className="model-answer"><div><span className="note-label">INTERACTIVE MODEL</span><h3>See the decisions inside a strong paragraph.</h3><p>Reveal the architecture one move at a time.</p></div><div className="model-answer-controls">{labels.map((label) => <button type="button" key={label} className={visible.includes(label) ? 'is-active' : ''} onClick={() => toggle(label)}>SHOW {label}</button>)}<button type="button" onClick={() => setVisible(labels)}>SHOW ALL</button><button type="button" onClick={() => setVisible([])}>REMOVE LABELS</button></div><div className="model-copy">{labels.map((label) => <p key={label} className={visible.includes(label) ? `model-${label.toLowerCase()}` : ''}><span>{visible.includes(label) ? label : '·'}</span>{visible.includes(label) ? inspectorCallsWork.pearl.model[label] : 'Reveal this sentence to explore its job.'}</p>)}</div></div>
}

function PracticeSection({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const question = inspectorCallsWork.quiz[index]
  const choose = (choice) => setAnswer(choice)
  const next = () => { if (index < inspectorCallsWork.quiz.length - 1) { setIndex((current) => current + 1); setAnswer(null) } else onComplete() }
  return <section className="book-section practice-section"><div className="practice-orbit"><span>03</span><small>MINUTE<br />REVISION</small></div><div className="section-heading"><SectionKicker icon={RotateCcw}>PRACTISE IT</SectionKicker><h2>Retrieve it, then make it yours.</h2><p>No grade is guessed here. You get immediate explanation and a chance to correct your thinking.</p></div><div className="quiz-card"><div className="quiz-meta"><span>QUESTION {index + 1} / {inspectorCallsWork.quiz.length}</span><div>{inspectorCallsWork.quiz.map((_, item) => <span key={item} className={item <= index ? 'is-active' : ''} />)}</div></div><h3>{question.question}</h3><div className="quiz-options">{question.options.map((option, optionIndex) => <button type="button" key={option} className={`${answer !== null && optionIndex === question.answer ? 'is-correct' : ''} ${answer === optionIndex && optionIndex !== question.answer ? 'is-wrong' : ''}`} onClick={() => choose(optionIndex)}>{option}{answer !== null && optionIndex === question.answer && <Check size={15} />}</button>)}</div>{answer !== null && <motion.div className={`quiz-feedback ${answer === question.answer ? 'is-correct' : 'is-wrong'}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}><strong>{answer === question.answer ? 'Good retrieval.' : 'Look again.'}</strong><p>{question.explanation}</p><button type="button" onClick={next}>{index === inspectorCallsWork.quiz.length - 1 ? 'Finish session' : 'Next question'} <ArrowRight size={15} /></button></motion.div>}</div><div className="practice-footer"><span><Volume2 size={15} /> Say your answer before you click.</span><span><LockKeyhole size={14} /> Progress is saved on this device.</span></div></section>
}

function InspectorCalls() {
  const { setProgress, markViewed, markComplete } = useBookProgress()
  const validChapter = (id) => inspectorCallsWork.chapters.some((item) => item.id === id)
  const [activeId, setActiveId] = useState(() => {
    const requested = window.location.hash.replace('#', '')
    return validChapter(requested) ? requested : 'story'
  })
  const goTo = (id) => {
    if (!validChapter(id)) return
    setActiveId(id)
    markViewed(id)
    window.history.replaceState(null, '', `#${id}`)
    window.requestAnimationFrame(() => document.getElementById(`literature-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  const complete = (id) => markComplete(id)
  const saveQuote = (quoteId) => setProgress((current) => ({
    ...current,
    savedEvidence: Array.from(new Set([...current.savedEvidence, quoteId])),
  }))
  const openMomentNotes = () => goTo('moments')

  useEffect(() => {
    const sections = inspectorCallsWork.chapters
      .map((item) => document.getElementById(`literature-${item.id}`))
      .filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top - 96) - Math.abs(b.boundingClientRect.top - 96))[0]
      if (current) setActiveId(current.target.id.replace('literature-', ''))
    }, { rootMargin: '-10% 0px -72% 0px', threshold: [0.05, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    const initialHash = window.location.hash.replace('#', '')
    if (validChapter(initialHash)) {
      window.requestAnimationFrame(() => document.getElementById(`literature-${initialHash}`)?.scrollIntoView({ block: 'start' }))
    }
    const handleHashChange = () => {
      const requested = window.location.hash.replace('#', '')
      if (validChapter(requested)) {
        setActiveId(requested)
        window.requestAnimationFrame(() => document.getElementById(`literature-${requested}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderChapter = (id) => {
    switch (id) {
      case 'cast':
        return <MeetCastSection />
      case 'plot':
        return <FullStorySection onComplete={() => complete('plot')} />
      case 'play':
        return <section className="book-section play-section"><div className="section-heading split-heading"><div><SectionKicker icon={Play}>WATCH IT MOVE</SectionKicker><h2>The Inspector enters the room.</h2><p>Begin with Arthur, Sybil, Sheila, Eric and Gerald seated together. Then watch the knock, the turn towards the door and the Inspector&apos;s entrance change the balance of the room.</p></div><div className="scene-status">10 BEAT CINEMATIC SCENE</div></div><CinematicPlayStage onComplete={() => complete('play')} onUsePearl={openMomentNotes} /><div className="after-scene"><span><strong>NOTICE</strong> comfort → interruption → scrutiny → exposure</span><Button variant="light" onClick={() => { complete('play'); openMomentNotes() }}>Open the detailed scene notes <ArrowRight size={15} /></Button></div></section>
      case 'eva':
        return <EvaJourneySection onComplete={() => complete('eva')} />
      case 'moments':
        return <KeyMomentsSection onComplete={() => complete('moments')} />
      case 'themes':
        return <ThemeGuideSection onComplete={() => complete('themes')} />
      case 'methods':
        return <MethodsGuideSection onComplete={() => complete('methods')} />
      case 'quotes':
        return <QuoteLibrarySection onComplete={() => complete('quotes')} onSaveQuote={saveQuote} />
      case 'context':
        return <ContextGuideSection onComplete={() => complete('context')} />
      case 'reference':
        return <GlossarySection onComplete={() => complete('reference')} />
      default:
        return <StoryOverviewSection onOpenPlay={() => goTo('play')} onComplete={() => complete('story')} />
    }
  }

  return <div className="literature-shell">
    <header className="literature-header">
      <div className="literature-brand"><Link to="/app/dashboard" aria-label="Back to student dashboard"><ArrowLeft size={17} /></Link><img className="literature-logo" src="/myschola-logo.png" alt="MySchola" /></div>
      <div className="literature-header-actions"><span className="header-book-title">AN INSPECTOR CALLS <small>J. B. PRIESTLEY</small></span><Link to="/app/dashboard" className="return-dashboard">Student dashboard <ArrowRight size={14} /></Link></div>
    </header>
    <div className="literature-layout">
      <aside className="literature-sidebar">
        <div className="sidebar-intro"><span>THE TEXT</span><h1>An Inspector<br /><em>Calls</em></h1><p>J. B. Priestley</p></div>
        <nav aria-label="Literature book chapters"><span className="sidebar-label">CHAPTERS</span>{inspectorCallsWork.chapters.map((item) => <button type="button" key={item.id} onClick={() => goTo(item.id)} className={activeId === item.id ? 'is-active' : ''} aria-current={activeId === item.id ? 'page' : undefined}><span className="chapter-number">{item.short}</span><span>{item.label}</span><span className="chapter-dot" /></button>)}</nav>
      </aside>
      <main className="literature-main">
        <div className="book-content">
          <div id="literature-story">{renderChapter('story')}</div>
          <div id="literature-cast">{renderChapter('cast')}</div>
          <div id="literature-plot">{renderChapter('plot')}</div>
          <div id="literature-play">{renderChapter('play')}</div>
          <div id="literature-eva">{renderChapter('eva')}</div>
          <div id="literature-moments">{renderChapter('moments')}</div>
          <div id="literature-themes">{renderChapter('themes')}</div>
          <div id="literature-methods">{renderChapter('methods')}</div>
          <div id="literature-quotes">{renderChapter('quotes')}</div>
          <div id="literature-context">{renderChapter('context')}</div>
          <div id="literature-reference">{renderChapter('reference')}</div>
        </div>
      </main>
    </div>
  </div>
}

export default InspectorCalls
