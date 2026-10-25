/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BookOpen, Check, Lightbulb, MapPin, Pause, Play, Search, Sparkles, Users } from 'lucide-react'
import { inspectorCallsWork } from '../../data/inspectorCallsContent'
import { actStory, glossary, importantNotes, keyMoments } from '../../data/literature/anInspectorCallsLearning'
import { characterIntroductions, contextGuide, methodGuide, quoteGuide, themeGuide } from '../../data/literature/anInspectorCallsStudy'
import { characterDossiers, extraGlossary, extraMethods, extraQuotes, storyReaderNotes } from '../../data/literature/anInspectorCallsExtended'
import { inspectorCallsAssets } from '../../assets/literature/an-inspector-calls/assetManifest'
import './learningSections.css'

const portraitStyle = (character) => character.id === 'gerald'
  ? { backgroundImage: `url(${inspectorCallsAssets.characters.geraldPortrait})`, backgroundSize: 'cover', backgroundPosition: 'center' }
  : { backgroundImage: `url(${inspectorCallsAssets.characters.portraits})`, backgroundSize: 'auto 200%', backgroundPosition: character.portraitPosition }

const characterFromLabel = (label) => {
  const normalized = label.toLowerCase()
  if (normalized.includes('inspector')) return inspectorCallsWork.characters.find((item) => item.id === 'inspector')
  if (normalized.includes('arthur')) return inspectorCallsWork.characters.find((item) => item.id === 'birling')
  if (normalized.includes('sybil')) return inspectorCallsWork.characters.find((item) => item.id === 'sybil')
  if (normalized.includes('sheila')) return inspectorCallsWork.characters.find((item) => item.id === 'sheila')
  if (normalized.includes('eric')) return inspectorCallsWork.characters.find((item) => item.id === 'eric')
  if (normalized.includes('gerald')) return inspectorCallsWork.characters.find((item) => item.id === 'gerald')
  if (normalized.includes('eva') || normalized.includes('daisy')) return inspectorCallsWork.characters.find((item) => item.id === 'eva')
  return null
}

const sceneImages = inspectorCallsAssets.environments
const completeMethods = [...methodGuide, ...extraMethods]
const completeQuotes = [...quoteGuide, ...extraQuotes]
const completeGlossary = [...glossary, ...extraGlossary].sort((a, b) => a.term.localeCompare(b.term))
const imageByFilename = {
  'birling-family-before-inspector.png': sceneImages.familyBeforeInspector,
  'birling-dining-room-arrival.png': sceneImages.diningRoomArrival,
  'birling-factory-dismissal.png': sceneImages.factoryDismissal,
  'milwards-dismissal.png': sceneImages.milwardsDismissal,
  'gerald-daisy-renton.png': sceneImages.geraldDaisyRenton,
  'charity-refusal.png': sceneImages.charityRefusal,
  'eric-confession.png': sceneImages.ericConfession,
  'final-telephone-call.png': sceneImages.finalTelephoneCall,
  'inspector-final-warning.png': sceneImages.inspectorFinalWarning,
}
const momentImages = {
  opening: sceneImages.familyBeforeInspector,
  'birling-speech': sceneImages.familyBeforeInspector,
  arrival: sceneImages.diningRoomArrival,
  factory: sceneImages.factoryDismissal,
  'sheila-change': sceneImages.milwardsDismissal,
  'gerald-daisy': sceneImages.geraldDaisyRenton,
  'mrs-birling': sceneImages.charityRefusal,
  eric: sceneImages.ericConfession,
  'final-speech': sceneImages.inspectorFinalWarning,
  telephone: sceneImages.finalTelephoneCall,
  ring: sceneImages.geraldDaisyRenton,
  knock: sceneImages.diningRoomArrival,
  'sheila-blame': sceneImages.milwardsDismissal,
  'eric-entrance': sceneImages.ericConfession,
  'family-debate': sceneImages.finalTelephoneCall,
}

function Kicker({ children, icon: Icon }) {
  return <span className="learning-kicker">{Icon ? <Icon size={13} aria-hidden="true" /> : null}{children}</span>
}

export function StoryOverviewSection({ onComplete, onOpenPlay }) {
  const [selected, setSelected] = useState(0)
  const [playing, setPlaying] = useState(false)
  const events = useMemo(() => actStory.flatMap((act) => act.events.map((event) => ({ ...event, act: act.act }))), [])
  const event = events[selected]
  useEffect(() => {
    if (!playing) return undefined
    const timer = window.setInterval(() => setSelected((current) => {
      if (current === events.length - 1) { setPlaying(false); return current }
      return current + 1
    }), 5200)
    return () => window.clearInterval(timer)
  }, [events.length, playing])
  return <section className="book-section story-overview-section">
    <div className="learning-section-heading"><div><Kicker icon={BookOpen}>STORY IN PICTURES / 15 ILLUSTRATED MOMENTS</Kicker><h2>Watch the whole play unfold.</h2><p>Play the complete journey or move through it yourself. Every illustrated moment shows who is present, what changes, where power sits and how the next consequence is created.</p></div><span className="learning-index">01</span></div>
    <div className="overview-controls"><button type="button" onClick={() => { if (selected === events.length - 1) setSelected(0); setPlaying((value) => !value) }}>{playing ? <Pause size={14} /> : <Play size={14} />}{playing ? 'Pause visual journey' : 'Play all 15 moments'}</button><span>{String(selected + 1).padStart(2, '0')} / {events.length} · {event.act}</span></div>
    <div className="overview-timeline"><div className="overview-timeline-track"><div className="overview-timeline-line"><motion.span animate={{ width: `${(selected / (events.length - 1)) * 100}%` }} /></div>{events.map((item, index) => <button type="button" key={item.id} className={selected === index ? 'is-active' : ''} onClick={() => setSelected(index)} aria-label={`Open ${item.title}`}><span>{String(index + 1).padStart(2, '0')}</span><small>{item.act}</small></button>)}</div></div>
    <div className="overview-workspace"><AnimatePresence mode="wait"><motion.div key={event.id} className="overview-visual" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}><motion.img src={sceneImages[event.image]} alt={`${event.title} scene`} style={{ objectPosition: event.focus }} initial={{ scale: 1.05, x: '-1%' }} animate={{ scale: 1.0, x: '1%' }} transition={{ duration: 5.1, ease: 'easeOut' }} /><div><span>{event.act} / {event.location}</span><h3>{event.title}</h3><p>{event.characters.join(' · ')}</p></div></motion.div></AnimatePresence><AnimatePresence mode="wait"><motion.div key={`${event.id}-copy`} className="overview-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}><span>WHAT HAPPENS</span><h3>{event.summary}</h3><div className="overview-facts"><div><span>WHAT THE AUDIENCE LEARNS</span><p>{event.important}</p></div><div><span>WHO HAS POWER?</span><p>{event.power}</p></div><div><span>WHAT CHANGES?</span><p>{event.change}</p></div><div><span>CONSEQUENCE FOR EVA</span><p>{event.consequence}</p></div><div><span>DRAMATIC METHOD</span><p>{event.method}</p></div></div>{selected >= events.length - 1 ? <button type="button" onClick={() => { onComplete(); onOpenPlay() }}>Open the Inspector-arrival deep dive <ArrowRight size={14} /></button> : <button type="button" onClick={() => setSelected((current) => Math.min(events.length - 1, current + 1))}>Next story point <ArrowRight size={14} /></button>}</motion.div></AnimatePresence></div>
  </section>
}

export function MeetCastSection() {
  const [selected, setSelected] = useState('inspector')
  const [panel, setPanel] = useState('journey')
  const character = inspectorCallsWork.characters.find((item) => item.id === selected)
  const dossier = characterDossiers[selected]
  return <section className="book-section character-section character-section-premium">
    <div className="learning-section-heading split-heading">
      <div><Kicker icon={Users}>MEET THE CHARACTERS / COMPLETE GUIDE</Kicker><h2>Meet every character, then follow the full journey.</h2><p>Choose a face for a quick orientation, then open the same chapter for actions, relationships, evidence, themes and Priestley&apos;s purpose.</p></div>
      <div className="character-count"><strong>07</strong><span>connected<br />character studies</span></div>
    </div>
    <div className="character-premium-layout">
      <div className="character-portrait-rail" aria-label="Choose a character">
        {inspectorCallsWork.characters.map((item) => <button type="button" key={item.id} className={selected === item.id ? 'is-active' : ''} onClick={() => { setSelected(item.id); setPanel('journey') }}>
          <span className="character-thumbnail" style={portraitStyle(item)} />
          <span><strong>{item.name}</strong><small>{item.role}</small></span>
        </button>)}
      </div>
      <AnimatePresence mode="wait"><motion.div key={selected} className="character-portrait-stage" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
        <div className="character-portrait-large" style={portraitStyle(character)} />
        <div className="character-portrait-caption"><span>{character.start}</span><i /><span>{character.end}</span></div>
      </motion.div></AnimatePresence>
      <div className="character-dossier">
        <span className="dossier-label">CHARACTER DOSSIER / {character.role}</span>
        <h3>{character.name}</h3>
        <p className="character-overview">{character.overview}</p>
        <div className="character-panel-tabs">
          {['journey', 'actions', 'relationships', 'evidence', 'analysis'].map((item) => <button type="button" key={item} className={panel === item ? 'is-active' : ''} onClick={() => setPanel(item)}>{item}</button>)}
        </div>
        <AnimatePresence mode="wait"><motion.div key={`${selected}-${panel}`} className="character-panel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
          {panel === 'journey' && <div className="character-full-journey"><p className="character-thesis">{dossier.thesis}</p><ol className="character-arc">{dossier.acts.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></li>)}</ol></div>}
          {panel === 'actions' && <ul className="character-detail-list">{character.actions.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>}
          {panel === 'relationships' && <ul className="character-detail-list">{character.relationships.map((item) => <li key={item}><ArrowRight size={14} />{item}</li>)}</ul>}
          {panel === 'evidence' && <div className="character-evidence-list">{dossier.keyQuotes.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}</div>}
          {panel === 'analysis' && <div className="character-analysis-depth"><div className="character-exam-angle"><span>COMPLEXITY</span><p>{dossier.complexity}</p></div><div className="character-exam-angle"><span>PRIESTLEY&apos;S PURPOSE</span><p>{dossier.purpose}</p></div><div className="character-exam-angle"><span>STRONG ANALYSIS FOCUS</span><p>{character.examAngle}</p></div></div>}
        </motion.div></AnimatePresence>
        <div className="character-connections"><div><span>METHODS</span><p>{character.methods.map((item) => <button type="button" key={item} onClick={() => setPanel('analysis')}>{item}</button>)}</p></div><div><span>THEMES</span><p>{character.themes.map((item) => <button type="button" key={item} onClick={() => setPanel('relationships')}>{item}</button>)}</p></div></div>
      </div>
    </div>
    <div className="character-footer-note"><span>LOOK ACROSS THE PLAY</span><p>A strong answer explains how the character changes, how Priestley creates that change, and why the audience is asked to notice it.</p></div>
  </section>
}

export function FullStorySection() {
  const [actIndex, setActIndex] = useState(0)
  const [eventIndex, setEventIndex] = useState(0)
  const act = actStory[actIndex]
  const event = act.events[eventIndex]
  const reader = storyReaderNotes[event.id]
  const selectAct = (index) => { setActIndex(index); setEventIndex(0) }
  return <section className="book-section full-story-section">
    <div className="learning-section-heading"><div><Kicker icon={BookOpen}>THE STORY / FULL ACT GUIDE</Kicker><h2>Read the complete play through three detailed acts.</h2><p>Use the visual scene as an anchor, then study the full summary, revelations, movement, methods, themes and important notes for each event.</p></div><span className="learning-index">03</span></div>
    <div className="story-cast-strip"><span>WHO&apos;S WHO</span>{inspectorCallsWork.characters.map((item) => <button type="button" key={item.id} onClick={() => document.getElementById('literature-cast')?.scrollIntoView({ behavior: 'smooth' })}><i style={portraitStyle(item)} /><small>{item.name}</small></button>)}</div>
    <div className="act-selector">{actStory.map((item, index) => <button type="button" key={item.id} className={index === actIndex ? 'is-active' : ''} onClick={() => selectAct(index)}><span>{item.act}</span><strong>{item.title}</strong><small>{item.movement}</small></button>)}</div>
    <div className="act-overview"><div><span>{act.act} OVERVIEW</span><h3>{act.title}</h3><p>{act.summary}</p></div><div className="act-movement"><span>DRAMATIC MOVEMENT</span><strong>{act.movement}</strong></div></div>
    <div className="visual-play-frame">
      <AnimatePresence mode="wait"><motion.div key={`${act.id}-${event.id}`} className="visual-scene-image" initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .65 }}>
        <motion.img src={sceneImages[event.image]} alt={`${event.title} in ${event.location}`} style={{ objectPosition: event.focus }} initial={{ scale: 1.045 }} animate={{ scale: 1 }} transition={{ duration: 4.5, ease: 'easeOut' }} />
        <div className="visual-scene-shade" />
        <div className="visual-scene-heading"><span>{act.act} / SCENE {String(eventIndex + 1).padStart(2, '0')}</span><h3>{event.title}</h3><p><MapPin size={13} />{event.location}</p></div>
        <div className="visual-cast-track"><span>ON STAGE</span>{event.characters.map((name, index) => <motion.i key={name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18 + index * .07 }}>{name}</motion.i>)}</div>
      </motion.div></AnimatePresence>
      <div className="visual-scene-progress">{act.events.map((item, index) => <button type="button" key={item.id} className={eventIndex === index ? 'is-active' : eventIndex > index ? 'is-past' : ''} onClick={() => setEventIndex(index)} aria-label={`Open ${item.title}`}><span /></button>)}</div>
    </div>
    <div className="story-event-workspace"><ol className="story-event-list">{act.events.map((item, index) => <li key={item.id}><button type="button" className={eventIndex === index ? 'is-active' : ''} onClick={() => setEventIndex(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong></button></li>)}</ol><AnimatePresence mode="wait"><motion.div key={`${act.id}-${event.id}-notes`} className="story-event-detail" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }}><span>COMPLETE ACT READER</span><h3>{event.title}</h3><p className="reader-before"><strong>Before this moment:</strong> {reader.before}</p><div className="reader-sequence"><span>WHAT HAPPENS, IN ORDER</span><ol>{reader.steps.map((step) => <li key={step}>{step}</li>)}</ol></div><div className="reader-cast"><span>CHARACTERS IN THIS MOMENT</span><p>{event.characters.map((name) => { const character = characterFromLabel(name); return <i key={name}>{character && <b style={portraitStyle(character)} />}{name}</i> })}</p></div><div className="reader-evidence"><span>SHORT EVIDENCE</span>{reader.evidence.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}</div><div className="scene-learning-grid"><div><span>WHO HAS POWER?</span><strong>{event.power}</strong></div><div><span>CONSEQUENCE</span><strong>{event.consequence}</strong></div><div><span>PRIESTLEY&apos;S METHOD</span><strong>{event.method}</strong></div><div><span>WHY HERE?</span><strong>{reader.whyNow}</strong></div><div><span>WHAT CHANGES?</span><strong>{event.change}</strong></div><div><span>WHAT HAPPENS NEXT?</span><strong>{reader.after}</strong></div></div><aside className="important-scene-note"><span>IMPORTANT NOTE</span><p>{event.important}</p></aside></motion.div></AnimatePresence></div>
  </section>
}

export function EvaJourneySection() {
  const [selected, setSelected] = useState(inspectorCallsWork.journey[0])
  const visuals = {
    factory: sceneImages.factoryDismissal,
    milwards: sceneImages.milwardsDismissal,
    gerald: sceneImages.geraldDaisyRenton,
    eric: sceneImages.ericConfession,
    charity: sceneImages.charityRefusal,
    death: sceneImages.finalTelephoneCall,
    investigation: sceneImages.diningRoomArrival,
  }
  const next = inspectorCallsWork.journey[inspectorCallsWork.journey.findIndex((item) => item.id === selected.id) + 1]
  return <section className="book-section eva-journey-section">
    <div className="learning-section-heading"><div><Kicker icon={ArrowRight}>EVA&apos;S JOURNEY / CAUSE AND CONSEQUENCE</Kicker><h2>One life, seven connected decisions.</h2><p>This is not a separate storyline: it is the chain the Inspector rebuilds. Read each stop as a decision, an imbalance of power and a consequence which narrows Eva&apos;s options.</p></div><span className="learning-index">05</span></div>
    <div className="eva-journey-layout">
      <ol className="eva-journey-rail">{inspectorCallsWork.journey.map((item, index) => <li key={item.id}><button type="button" className={selected.id === item.id ? 'is-active' : ''} onClick={() => setSelected(item)}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.impact}</small><strong>{item.label}</strong></div></button></li>)}</ol>
      <AnimatePresence mode="wait"><motion.div key={selected.id} className="eva-journey-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
        <div className="eva-journey-image"><img src={visuals[selected.id]} alt={`${selected.label} in Eva Smith's journey`} /><div><span>STAGE {String(inspectorCallsWork.journey.findIndex((item) => item.id === selected.id) + 1).padStart(2, '0')} / 07</span><h3>{selected.label}</h3></div></div>
        <div className="eva-journey-copy"><div><span>WHAT HAPPENS</span><p>{selected.caption}</p></div><div><span>WHO HAS POWER?</span><p>{selected.power}</p></div><div><span>WHAT IT COSTS EVA</span><p>{selected.consequence}</p></div><aside><span>WHY THIS STAGE MATTERS</span><p>{selected.id === 'investigation' ? 'The play brings the entire chain back into one room. The audience must decide whether the lesson is about a single family or the society that made Eva vulnerable.' : `This makes the next stage possible: ${next ? next.label : 'the Inspector’s final warning'}. Priestley makes the chain visible so no character can describe their action as isolated.`}</p></aside></div>
      </motion.div></AnimatePresence>
    </div>
  </section>
}

export function KeyMomentsSection({ onComplete }) {
  const [selected, setSelected] = useState(keyMoments[0])
  return <section className="book-section key-moments-section">
    <div className="learning-section-heading"><div><Kicker icon={Sparkles}>KEY MOMENTS IN DETAIL</Kicker><h2>Study the moments where Priestley changes the meaning.</h2><p>Each moment now connects story, stagecraft, character reaction, theme, context, audience response and the change it creates in the rest of the play.</p></div><span className="learning-index">06</span></div>
    <div className="moment-grid"><div className="moment-list">{keyMoments.map((moment, index) => <button type="button" key={moment.id} className={selected.id === moment.id ? 'is-active' : ''} onClick={() => setSelected(moment)}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{moment.act}</small><strong>{moment.title}</strong></div></button>)}</div><AnimatePresence mode="wait"><motion.div key={selected.id} className="moment-detail" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}><img className="moment-detail-image" src={momentImages[selected.id] || sceneImages.diningRoomArrival} alt={`${selected.title} visual`} /><span>{selected.act} / KEY MOMENT</span><h3>{selected.title}</h3><div className="moment-event"><span>WHAT HAPPENS</span><p>{selected.event}</p></div><div className="moment-why"><span>WHY PRIESTLEY PLACES IT HERE</span><p>{selected.why}</p></div><div className="moment-connections"><div><span>DRAMATIC METHODS</span><p>{selected.methods.map((item) => <i key={item}>{item}</i>)}</p></div><div><span>CONNECTED IDEAS</span><p>{selected.links.map((item) => <i key={item}>{item}</i>)}</p></div></div><div className="moment-study-note"><span>STUDENT NOTE</span><p>Explain the event, then explain how Priestley constructs it and what the audience is now expected to understand.</p></div><button type="button" onClick={onComplete}>Mark this moment understood <Check size={14} /></button></motion.div></AnimatePresence></div>
  </section>
}

export function ThemeGuideSection({ onComplete }) {
  const [selected, setSelected] = useState(themeGuide[0])
  return <section className="book-section theme-guide-section">
    <div className="learning-section-heading"><div><Kicker icon={Users}>THEMES AND IDEAS / 10 COMPLETE THREADS</Kicker><h2>See each idea develop across the whole play.</h2><p>Every theme is traced through Acts 1, 2 and 3 with characters, events, evidence, Priestley&apos;s purpose and the misunderstanding students most often need to avoid.</p></div><span className="learning-index">08</span></div>
    <div className="theme-guide-tabs">{themeGuide.map((item) => <button type="button" key={item.id} className={selected.id === item.id ? 'is-active' : ''} onClick={() => setSelected(item)}>{item.title}</button>)}</div>
    <AnimatePresence mode="wait"><motion.div key={selected.id} className="theme-guide-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><div className="theme-guide-intro"><span>CORE IDEA</span><h3>{selected.title}</h3><p>{selected.definition}</p></div><div className="theme-act-grid">{selected.acts.map((act) => <article key={act}><span>DEVELOPMENT</span><p>{act}</p></article>)}</div><div className="theme-guide-columns"><div><span>CHARACTERS</span><p>{selected.characters.map((item) => <i key={item}>{item}</i>)}</p></div><div><span>CONNECTED EVENTS</span><p>{selected.events.map((item) => <i key={item}>{item}</i>)}</p></div><div><span>IMPORTANT EVIDENCE</span><p>{selected.quotes.map((item) => <i key={item}>{item}</i>)}</p></div></div><div className="theme-guide-note"><div><span>PRIESTLEY&apos;S PURPOSE</span><p>{selected.purpose}</p></div><div><span>AVOID THIS MISUNDERSTANDING</span><p>{selected.misunderstanding}</p></div></div><button type="button" onClick={onComplete}>Mark theme understood <Check size={14} /></button></motion.div></AnimatePresence>
  </section>
}

export function MethodsGuideSection({ onComplete }) {
  const [selected, setSelected] = useState(completeMethods[0])
  return <section className="book-section methods-guide-section">
    <div className="learning-section-heading"><div><Kicker icon={Lightbulb}>PRIESTLEY&apos;S METHODS / {completeMethods.length} METHODS</Kicker><h2>See how the play creates meaning.</h2><p>The complete guide covers structure, stagecraft, dialogue, language, symbols and character construction. Every method is attached to a precise scene, audience effect and purpose.</p></div><span className="learning-index">09</span></div>
    <div className="method-guide-layout"><div className="method-guide-list">{completeMethods.map((item) => <button type="button" key={item.id} className={selected.id === item.id ? 'is-active' : ''} onClick={() => setSelected(item)}><small>{item.category}</small><strong>{item.title}</strong></button>)}</div><AnimatePresence mode="wait"><motion.div key={selected.id} className="method-guide-detail" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}><img src={imageByFilename[selected.visual] || sceneImages.diningRoomArrival} alt={`${selected.title} in ${selected.scene}`} /><div className="method-guide-copy"><span>{selected.category} / METHOD</span><h3>{selected.title}</h3><p className="method-definition">{selected.definition}</p><div><span>SCENE</span><strong>{selected.scene}</strong></div><div><span>WHAT THE AUDIENCE SEES</span><p>{selected.sees}</p></div><div><span>WHY PRIESTLEY USES IT</span><p>{selected.purpose}</p></div><div className="method-links"><span>CONNECTED TO</span><p>{selected.connects.map((item) => <i key={item}>{item}</i>)}</p></div><button type="button" onClick={onComplete}>Mark method understood <Check size={14} /></button></div></motion.div></AnimatePresence></div>
  </section>
}

export function QuoteLibrarySection({ onComplete, onSaveQuote }) {
  const [selected, setSelected] = useState(completeQuotes[0])
  const [query, setQuery] = useState('')
  const filtered = completeQuotes.filter((item) => `${item.text} ${item.speaker} ${item.themes.join(' ')} ${item.method}`.toLowerCase().includes(query.toLowerCase()))
  return <section className="book-section quote-library-section">
    <div className="learning-section-heading"><div><Kicker icon={BookOpen}>IMPORTANT QUOTES / {completeQuotes.length} CORE QUOTATIONS</Kicker><h2>Build understanding around the words that matter.</h2><p>The bank covers every major character, stage directions, all three acts and the central ideas. Each quotation includes its moment, method, key word, audience effect, purpose and connections.</p></div><span className="learning-index">10</span></div>
    <label className="quote-library-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by quote, character, theme or method" /></label>
    <div className="quote-library-layout"><div className="quote-library-list">{filtered.map((quote) => <button type="button" key={quote.text} className={selected.text === quote.text ? 'is-active' : ''} onClick={() => setSelected(quote)}><span>{quote.act}</span><strong>{quote.text}</strong><small>{quote.speaker}</small></button>)}</div><AnimatePresence mode="wait"><motion.article key={selected.text} className="quote-library-detail" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}><span>{selected.act} / {selected.moment}</span><blockquote>“{selected.text}”</blockquote><cite>{selected.speaker}</cite><div className="quote-analysis-grid"><div><span>METHOD</span><p>{selected.method}</p></div><div><span>THEMES</span><p>{selected.themes.join(' / ')}</p></div><div><span>MEANING</span><p>{selected.meaning}</p></div><div><span>KEY WORD</span><p>{selected.word}</p></div><div><span>AUDIENCE EFFECT</span><p>{selected.audience}</p></div><div><span>PRIESTLEY&apos;S PURPOSE</span><p>{selected.purpose}</p></div></div><div className="quote-connections"><span>CONNECTS TO</span><p>{selected.connects.map((item) => <i key={item}>{item}</i>)}</p></div><aside><span>AVOID A WEAK READING</span><p>{selected.avoid}</p></aside><button type="button" onClick={() => { onSaveQuote?.(selected.text); onComplete() }}>Mark quote understood <Check size={14} /></button></motion.article></AnimatePresence></div>
  </section>
}

export function ContextGuideSection({ onComplete }) {
  const [selected, setSelected] = useState(contextGuide[0])
  return <section className="book-section context-guide-section">
    <div className="learning-section-heading"><div><Kicker icon={BookOpen}>CONTEXT / 1912 ↔ 1945</Kicker><h2>Use context to explain Priestley&apos;s choices.</h2><p>Context is attached to characters, scenes and methods so it clarifies the play instead of becoming a detached fact list.</p></div><span className="learning-index">11</span></div>
    <div className="context-guide-tabs">{contextGuide.map((item) => <button type="button" key={item.title} className={selected.title === item.title ? 'is-active' : ''} onClick={() => setSelected(item)}>{item.label}</button>)}</div>
    <AnimatePresence mode="wait"><motion.div key={selected.title} className="context-guide-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><span>CONTEXT TOPIC</span><h3>{selected.title}</h3><div className="context-guide-columns"><div><span>WORLD OF THE PLAY</span><p>{selected.play}</p></div><div><span>PRIESTLEY&apos;S AUDIENCE</span><p>{selected.audience}</p></div></div><aside><span>HOW TO USE IT</span><p>{selected.link}</p></aside><button type="button" onClick={onComplete}>Mark context connected <Check size={14} /></button></motion.div></AnimatePresence>
  </section>
}

export function GlossarySection({ onComplete }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(completeGlossary[0])
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(completeGlossary.map((item) => item.category))]
  const filtered = useMemo(() => completeGlossary.filter((item) => (category === 'All' || item.category === category) && `${item.term} ${item.definition} ${item.example}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <section className="book-section glossary-section">
    <div className="learning-section-heading"><div><Kicker icon={BookOpen}>COMPLETE GLOSSARY / {completeGlossary.length} TERMS</Kicker><h2>Dramatic vocabulary and the whole play in one place.</h2><p>The reference covers stagecraft, structure, language, context and ideas. Every term includes a definition, a precise example from the play, why it matters and a common mistake to avoid.</p></div><span className="learning-index">12</span></div>
    <div className="important-notes-grid">{importantNotes.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.note}</p></article>)}</div>
    <div className="reference-divider"><span>DRAMATIC LANGUAGE REFERENCE</span><strong>{completeGlossary.length} connected terms</strong></div>
    <div className="glossary-toolbar"><label className="glossary-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms, examples and ideas" /></label><div className="glossary-categories">{categories.map((item) => <button type="button" key={item} className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="glossary-workspace"><div className="glossary-terms">{filtered.map((item) => <button type="button" key={item.term} className={selected.term === item.term ? 'is-active' : ''} onClick={() => setSelected(item)}><small>{item.category}</small>{item.term}</button>)}</div><div className="glossary-definition"><span>{selected.category} TERM</span><h3>{selected.term}</h3><p>{selected.definition}</p><div><span>IN THE PLAY</span><strong>{selected.example}</strong></div><div className="definition-importance"><span>WHY IT MATTERS</span><strong>{selected.importance}</strong></div><div className="definition-misconception"><span>AVOID THIS MISTAKE</span><strong>{selected.misconception}</strong></div><button type="button" onClick={onComplete}>Mark reference explored <Check size={14} /></button></div></div>
  </section>
}
