export const inspectorCallsWork = {
  id: 'an-inspector-calls',
  title: 'An Inspector Calls',
  author: 'J. B. Priestley',
  exam: 'GCSE English Literature',
  accent: '#d97757',
  chapters: [
    { id: 'story', label: 'Story in pictures', short: '01', type: 'story', eyebrow: 'START HERE', title: 'Understand the whole play before analysing it', description: 'Follow the complete chain of events from engagement celebration to the final telephone call.', progress: 8 },
    { id: 'cast', label: 'Meet the characters', short: '02', type: 'cast', eyebrow: 'MEET THEM', title: 'Recognise the people inside the argument', description: 'Learn each character\'s role, social position, starting point and connection to Eva.', progress: 16 },
    { id: 'plot', label: 'The story', short: '03', type: 'plot', eyebrow: 'READ THE PLAY', title: 'A complete guide to all three acts', description: 'Study every revelation with detailed summary, movement, methods, themes and important notes.', progress: 24 },
    { id: 'play', label: 'Watch the Inspector arrive', short: '04', type: 'play', eyebrow: 'WATCH IT MOVE', title: 'The opening scene as theatre', description: 'Explore seated characters, the knock, entrance, blocking, lighting and the transfer of authority.', progress: 32 },
    { id: 'eva', label: "Eva's journey", short: '05', type: 'eva', eyebrow: 'UNDERSTAND IT', title: 'One life, seven connected stages', description: 'Trace what Eva needs, who has power, what decision is made and what follows.', progress: 40 },
    { id: 'moments', label: 'Key moments in detail', short: '06', type: 'moments', eyebrow: 'LOOK CLOSER', title: 'Fifteen moments that shape the meaning', description: 'Study event, method, character reaction, audience effect, context and consequence together.', progress: 48 },
    { id: 'characters', label: 'Characters in depth', short: '07', type: 'characters', eyebrow: 'ANALYSE PEOPLE', title: 'Seven complete character journeys', description: 'Explore each character across the whole play, including actions, relationships, themes and change.', progress: 56 },
    { id: 'themes', label: 'Themes and ideas', short: '08', type: 'themes', eyebrow: 'CONNECT IT', title: 'Follow ideas across all three acts', description: 'Track responsibility, class, gender, power, change, reputation and welfare through the play.', progress: 64 },
    { id: 'methods', label: "Priestley's methods", short: '09', type: 'methods', eyebrow: 'SEE THE CRAFT', title: 'How Priestley creates meaning', description: 'Study dramatic irony, stagecraft, structure, language, props, movement and contrast in context.', progress: 72 },
    { id: 'quotes', label: 'Important quotes', short: '10', type: 'quotes', eyebrow: 'FOLLOW THE LANGUAGE', title: 'Words connected to the whole play', description: 'Learn quotations through speaker, moment, method, key words, audience effect and purpose.', progress: 80 },
    { id: 'context', label: 'Context: 1912 and 1945', short: '11', type: 'context', eyebrow: 'PLACE THE PLAY', title: 'Context that explains dramatic choices', description: 'Connect class, gender, welfare, capitalism, socialism and history to precise scenes.', progress: 88 },
    { id: 'reference', label: 'Complete glossary', short: '12', type: 'reference', eyebrow: 'KEEP IT CLEAR', title: 'Important notes and dramatic vocabulary', description: 'Use a full connected reference guide with definitions, examples, significance and common mistakes.', progress: 100 },
  ],
  frames: [
    { id: 'arrival-1', duration: 2.2, caption: 'A celebration begins behind glass.', lighting: 'warm', characters: { birling: { x: 29, y: 64, pose: 'seated', emotion: 'assured' }, sheila: { x: 58, y: 67, pose: 'seated', emotion: 'bright' }, eric: { x: 70, y: 66, pose: 'seated', emotion: 'distant' } }, props: ['table', 'decanter'] },
    { id: 'arrival-2', duration: 2.4, caption: 'A knock breaks the rhythm of the room.', lighting: 'warm', characters: { birling: { x: 34, y: 61, pose: 'standing', emotion: 'curious' }, sheila: { x: 58, y: 67, pose: 'seated', emotion: 'alert' }, eric: { x: 70, y: 66, pose: 'seated', emotion: 'alert' } }, props: ['table', 'door'] },
    { id: 'arrival-3', duration: 2.8, caption: 'The Inspector enters. The light gets harder.', lighting: 'hard', characters: { inspector: { x: 76, y: 55, pose: 'standing', emotion: 'calm' }, birling: { x: 34, y: 61, pose: 'standing', emotion: 'defensive' }, sheila: { x: 58, y: 67, pose: 'seated', emotion: 'uncertain' }, eric: { x: 70, y: 66, pose: 'seated', emotion: 'uneasy' } }, props: ['table', 'door', 'case-file'] },
    { id: 'arrival-4', duration: 2.8, caption: 'The room is the same. The family cannot hide in it anymore.', lighting: 'hard', characters: { inspector: { x: 76, y: 55, pose: 'standing', emotion: 'calm', highlighted: true }, birling: { x: 34, y: 61, pose: 'standing', emotion: 'defensive' }, sheila: { x: 58, y: 67, pose: 'seated', emotion: 'thinking', highlighted: true }, eric: { x: 70, y: 66, pose: 'seated', emotion: 'uneasy' } }, props: ['table', 'door', 'case-file'] },
  ],
  characters: [
    {
      id: 'inspector', name: 'Inspector Goole', role: 'Priestley\'s moral interrogator', color: '#243b53', start: 'outsider', end: 'warning', portraitPosition: '0% 0%',
      overview: 'A controlled, mysterious visitor who dismantles the family\'s excuses one revelation at a time. He is less important as a realistic policeman than as the force that makes private behaviour answerable to society.',
      arc: ['Enters as an outsider', 'Controls the order of evidence', 'Connects every confession', 'Leaves a collective warning'],
      actions: ['Separates each person\'s testimony', 'Shows only one photograph at a time', 'Challenges class prejudice', 'Turns Eva\'s story into a social argument'],
      methods: ['stage directions', 'entrances and exits', 'imperative language', 'structural control'],
      themes: ['responsibility', 'socialism', 'morality', 'power'],
      relationships: ['Opposes Birling\'s individualism', 'Accelerates Sheila\'s change', 'Makes Eva the centre of the room'],
      examAngle: 'Track how his control of information makes him Priestley\'s structural voice, not simply a detective.'
    },
    {
      id: 'birling', name: 'Arthur Birling', role: 'The confident individualist', color: '#718096', start: 'certain', end: 'unmoved', portraitPosition: '50% 0%',
      overview: 'A prosperous manufacturer who treats wealth as proof that his opinions are correct. His certainty is repeatedly weakened by dramatic irony, his treatment of workers and his obsession with reputation.',
      arc: ['Celebrates status', 'Defends the dismissal', 'Resists the lesson', 'Returns to reputation'],
      actions: ['Dismisses Eva after the strike', 'Lectures the younger generation', 'Attempts to intimidate the Inspector', 'Focuses on scandal rather than harm'],
      methods: ['dramatic irony', 'authoritative dialogue', 'repetition', 'contrast'],
      themes: ['capitalism', 'class', 'power', 'responsibility'],
      relationships: ['Dominates the family table', 'Is challenged by the Inspector', 'Contrasts with Sheila and Eric'],
      examAngle: 'Priestley makes Birling sound most certain when the audience knows he is most wrong.'
    },
    {
      id: 'sybil', name: 'Sybil Birling', role: 'The guardian of status', color: '#665369', start: 'superior', end: 'unmoved', portraitPosition: '100% 0%',
      overview: 'Social rank shapes what Mrs Birling is willing to see. Her charity work appears respectable, yet her prejudice lets her deny help to the person who needs it.',
      arc: ['Judges from status', 'Rejects Eva\'s appeal', 'Condemns the unknown father', 'Refuses lasting responsibility'],
      actions: ['Uses influence at the charity', 'Calls Eva\'s account impertinent', 'Insists blame belongs elsewhere', 'Remains emotionally unchanged'],
      methods: ['dramatic irony', 'formal register', 'contrast', 'delayed revelation'],
      themes: ['class', 'gender', 'hypocrisy', 'responsibility'],
      relationships: ['Protects family status', 'Misjudges Eva', 'Unknowingly condemns Eric'],
      examAngle: 'Use her charity role to analyse the gap between public respectability and genuine compassion.'
    },
    {
      id: 'sheila', name: 'Sheila Birling', role: 'The change-maker', color: '#d97757', start: 'protected', end: 'morally alert', portraitPosition: '0% 100%',
      overview: 'Sheila begins inside the comfort of her family\'s wealth but learns to examine her own power. Her willingness to feel guilt and resist easy excuses makes change visible on stage.',
      arc: ['Celebrated daughter', 'Recognises her jealousy', 'Accepts responsibility', 'Protects the lesson'],
      actions: ['Complains about Eva at Milwards', 'Challenges her parents\' excuses', 'Understands the Inspector\'s method', 'Refuses to pretend nothing happened'],
      methods: ['character development', 'contrast', 'stage directions', 'generational divide'],
      themes: ['change', 'guilt', 'gender', 'responsibility'],
      relationships: ['Learns from the Inspector', 'Feels connected to Eva', 'Challenges Arthur and Sybil'],
      examAngle: 'Follow her changing language: she moves from emotional reaction to clear moral judgement.'
    },
    {
      id: 'eric', name: 'Eric Birling', role: 'The fractured heir', color: '#53657a', start: 'uneasy', end: 'ashamed but awake', portraitPosition: '50% 100%',
      overview: 'Eric\'s discomfort is visible before his secret is explained. Priestley uses his drinking, evasions and final anger to reveal damage beneath the family\'s polished surface.',
      arc: ['Uneasy at dinner', 'Avoids questions', 'Confesses exploitation', 'Accepts shared blame'],
      actions: ['Uses Eva\'s vulnerability', 'Steals money to support her', 'Condemns his mother\'s refusal', 'Rejects the older generation\'s relief'],
      methods: ['foreshadowing', 'fragmented dialogue', 'contrast', 'delayed confession'],
      themes: ['power', 'gender', 'guilt', 'generational divide'],
      relationships: ['Fears his father', 'Is exposed by his mother\'s judgement', 'Joins Sheila in accepting the lesson'],
      examAngle: 'His guilt does not erase his actions; it shows Priestley separating accountability from denial.'
    },
    {
      id: 'gerald', name: 'Gerald Croft', role: 'The polished compromise', color: '#3f5368', start: 'confident guest', end: 'eager to restore comfort', spritePosition: '66.666% center',
      overview: 'Gerald appears socially polished and more reasonable than Arthur, but his relationship with Daisy Renton exposes the unequal power beneath that charm. His relief when the investigation may be a hoax tests how deeply he has changed.',
      arc: ['Confident fiance', 'Recognises Daisy Renton', 'Admits the affair', 'Offers the ring again'],
      actions: ['Supports Birling\'s business outlook', 'Rescues Eva from Alderman Meggarty', 'Controls the terms of the relationship', 'Investigates whether Goole was genuine'],
      methods: ['contrast', 'delayed revelation', 'euphemism', 'structural return'],
      themes: ['class', 'gender', 'power', 'limited change'],
      relationships: ['Mirrors aspects of Arthur', 'Has power over Eva\'s security', 'Tests whether Sheila will return to the old order'],
      examAngle: 'Avoid describing Gerald as simply kind or cruel: analyse how temporary care can still depend on class and gender power.'
    },
    {
      id: 'eva', name: 'Eva Smith', role: 'The absent centre', color: '#b8674e', start: 'worker', end: 'symbol and individual', portraitPosition: '100% 100%',
      overview: 'Eva never appears on stage, so the audience constructs her through competing accounts. That absence exposes who controls a story and lets one life represent many vulnerable people without making her suffering abstract.',
      arc: ['Skilled worker', 'Precarious employee', 'Socially isolated', 'Centre of the reckoning'],
      actions: ['Asks for fairer pay', 'Loses work after Sheila\'s complaint', 'Refuses stolen money', 'Seeks help from the charity'],
      methods: ['off-stage character', 'changing surname', 'motif', 'structural connection'],
      themes: ['class', 'gender', 'exploitation', 'collective responsibility'],
      relationships: ['Affected by every Birling', 'Seen differently by each narrator', 'Connected to the wider working class'],
      examAngle: 'Keep both readings in view: Eva is a specific person harmed by choices and a structural symbol of many people.'
    },
  ],
  journey: [
    { id: 'factory', label: 'Birling & Co.', caption: 'Eva asks for fairer pay and loses her job after the strike.', impact: 'economic power', power: 'Arthur controls employment and wages.', consequence: 'Eva loses stable work.', color: '#d97757' },
    { id: 'milwards', label: 'Milwards', caption: 'Sheila turns jealousy and social status into another dismissal.', impact: 'class + reputation', power: 'Sheila can make the store listen because she is a wealthy customer.', consequence: 'Eva loses another source of security.', color: '#e7a35c' },
    { id: 'gerald', label: 'Gerald / Daisy', caption: 'Gerald offers temporary protection, but controls the relationship and its ending.', impact: 'gender + dependence', power: 'Gerald provides money, rooms and access to safety.', consequence: 'Eva is left vulnerable when he returns to his social world.', color: '#8c6a5d' },
    { id: 'eric', label: 'Eric', caption: 'Eric exploits Eva, then tries to support her in secret with stolen money.', impact: 'power + secrecy', power: 'Eric has money and male privilege despite his insecurity.', consequence: 'Eva becomes pregnant and is pushed further outside respectability.', color: '#53657a' },
    { id: 'charity', label: 'The charity', caption: 'Mrs Birling refuses Eva because she judges her status and story.', impact: 'institutional power', power: 'Sybil controls whether the charity will offer practical help.', consequence: 'Eva leaves without support when she is most vulnerable.', color: '#665369' },
    { id: 'death', label: 'Death', caption: 'Eva dies after the chain of decisions leaves her isolated.', impact: 'collective consequence', power: 'No single person controls the whole outcome, but many choices contribute.', consequence: 'The private story becomes a public moral question.', color: '#b8674e' },
    { id: 'investigation', label: 'The investigation', caption: 'The Inspector brings every separate line back into the room.', impact: 'shared responsibility', power: 'Goole controls the order of evidence and forces connections into view.', consequence: 'The family must choose whether to learn or return to comfort.', color: '#243b53' },
  ],
  quotes: [
    { id: 'quote-responsibility', text: 'We are members of one body.', speaker: 'Inspector Goole', theme: 'Collective responsibility', method: 'Metaphor', event: 'Inspector delivers his message', pearl: 'Use as a thesis or link to Priestley’s social purpose.' },
    { id: 'quote-weather', text: 'The lighting should be pink and intimate.', speaker: 'Stage direction', theme: 'Appearance and reality', method: 'Stage direction', event: 'Opening celebration', pearl: 'Contrast the opening mood with the harder light after the Inspector arrives.' },
    { id: 'quote-business', text: 'A man has to make his own way.', speaker: 'Arthur Birling', theme: 'Capitalism / individualism', method: 'Dialogue', event: 'Birling’s speech', pearl: 'Pair with dramatic irony to challenge Birling’s authority.' },
    { id: 'quote-change', text: 'I know I’m to blame — and I’m desperately sorry.', speaker: 'Sheila Birling', theme: 'Change', method: 'Characterisation', event: 'Sheila accepts responsibility', pearl: 'Track the shift from passive daughter to active moral voice.' },
  ],
  themes: [
    { id: 'responsibility', label: 'Responsibility', blurb: 'Priestley links separate choices into one social body.', nodes: ['Inspector', 'Eva', 'Sheila', 'Eric', 'Mr Birling', 'final call'] },
    { id: 'class', label: 'Class', blurb: 'Power decides who gets heard, protected or discarded.', nodes: ['Birling & Co.', 'Milwards', 'Eva', 'Mrs Birling'] },
    { id: 'change', label: 'Generational change', blurb: 'The younger characters are more willing to learn from the evidence.', nodes: ['Sheila', 'Eric', '1912', '1945 audience'] },
  ],
  context: [
    { id: 'class', label: 'Class', play: 'Rigid hierarchy. Status protects the Birlings and limits Eva’s choices.', audience: 'After two world wars, inequality looked less permanent and harder to defend.' },
    { id: 'welfare', label: 'Welfare', play: 'There is no safety net when Eva loses work, money and reputation.', audience: 'Priestley’s 1945 audience was debating what a fairer society should provide.' },
    { id: 'gender', label: 'Gender', play: 'Eva and Sheila are judged through different expectations of women.', audience: 'The play questions who gets power to define a woman’s “respectability”.' },
  ],
  pearl: {
    question: 'How does Priestley present responsibility in An Inspector Calls?',
    model: {
      P: 'Priestley presents responsibility as a shared moral duty rather than a private choice.',
      E: 'The Inspector declares that “we are members of one body”.',
      A: 'The metaphor makes society sound like one living organism, so harm to one person threatens the whole body.',
      R: 'An audience may recognise that ignoring another person’s suffering is not neutral; it helps the system continue.',
      L: 'Priestley therefore challenges the individualism represented by Birling and asks his audience to choose collective care.',
    },
  },
  quiz: [
    { question: 'Which method is most visible in the opening lighting?', options: ['Stage direction', 'Foreshadowing', 'Cyclical structure'], answer: 0, explanation: 'The lighting is a stage direction: it tells a production how the room should look and feel.' },
    { question: 'Who most clearly models change after the Inspector’s questioning?', options: ['Arthur Birling', 'Sheila Birling', 'Mrs Birling'], answer: 1, explanation: 'Sheila reflects on her choices and keeps the lesson alive even when others want to dismiss it.' },
    { question: 'What does the final telephone call mainly create?', options: ['A comic ending', 'A return of consequences', 'A new setting'], answer: 1, explanation: 'The cyclical return makes the family’s attempt to move on feel temporary and fragile.' },
  ],
}

export const chapterById = (id) => inspectorCallsWork.chapters.find((chapter) => chapter.id === id) || inspectorCallsWork.chapters[0]
