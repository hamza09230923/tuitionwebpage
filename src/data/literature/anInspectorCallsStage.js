export const inspectorArrivalScene = {
  id: 'inspector-arrival',
  title: 'The Inspector arrives',
  act: 1,
  location: 'Birling dining room',
  summary: 'A private celebration is interrupted. The visual balance of the room shifts from Birling to the doorway, and comfort becomes scrutiny.',
  frames: [
    {
      id: 'establishing', duration: 2200, label: 'Wide establishing shot', caption: 'The room performs wealth, order and security.',
      camera: { scale: 1, x: 0, y: 0, focus: 'room' }, lighting: { ambient: .72, warm: .72, cool: .08, fire: .85, exposure: .06 },
      characters: { arthur: 'talking', sybil: 'seated', sheila: 'listening', eric: 'idle', gerald: 'listening', inspector: 'hidden' },
    },
    {
      id: 'arthur-push', duration: 1800, label: 'Arthur controls the room', caption: 'The camera moves towards the man who believes he controls the future.',
      camera: { scale: 1.12, x: -2, y: 4, focus: 'arthur' }, lighting: { ambient: .72, warm: .76, cool: .06, fire: .86, exposure: .04 },
      characters: { arthur: 'talking', sybil: 'listening', sheila: 'listening', eric: 'restless', gerald: 'listening', inspector: 'hidden' },
    },
    {
      id: 'knock', duration: 1250, label: 'The interruption', caption: 'A sharp knock cuts across Birling\'s confident rhythm.',
      camera: { scale: 1.12, x: -2, y: 4, focus: 'arthur' }, lighting: { ambient: .69, warm: .66, cool: .12, fire: .78, exposure: .09 }, soundCue: 'KNOCK',
      characters: { arthur: 'shocked', sybil: 'concerned', sheila: 'shocked', eric: 'shocked', gerald: 'turn-right', inspector: 'hidden' },
    },
    {
      id: 'family-turns', duration: 1600, label: 'The family turns', caption: 'Five separate reactions replace the single confident family pose.',
      camera: { scale: 1.06, x: 0, y: 1, focus: 'family' }, lighting: { ambient: .67, warm: .6, cool: .18, fire: .74, exposure: .12 },
      characters: { arthur: 'turn-right', sybil: 'turn-right', sheila: 'turn-right', eric: 'turn-right', gerald: 'turn-right', inspector: 'hidden' },
    },
    {
      id: 'door-shift', duration: 1600, label: 'The camera finds the door', caption: 'The outside world occupies the brightest edge of the room.',
      camera: { scale: 1.16, x: -8, y: 1, focus: 'door' }, lighting: { ambient: .63, warm: .5, cool: .34, fire: .68, exposure: .18 },
      characters: { arthur: 'defensive', sybil: 'listening', sheila: 'concerned', eric: 'restless', gerald: 'concerned', inspector: 'hidden' },
    },
    {
      id: 'entrance', duration: 1900, label: 'The Inspector enters', caption: 'His movement is economical; the family supply the agitation.',
      camera: { scale: 1.13, x: -7, y: 1, focus: 'inspector' }, lighting: { ambient: .64, warm: .42, cool: .5, fire: .62, exposure: .3 },
      characters: { arthur: 'defensive', sybil: 'listening', sheila: 'concerned', eric: 'restless', gerald: 'concerned', inspector: 'walking' },
    },
    {
      id: 'inspector-push', duration: 1700, label: 'A deliberate presence', caption: 'The camera pushes in, but the Inspector barely needs to move.',
      camera: { scale: 1.24, x: -11, y: 2, focus: 'inspector' }, lighting: { ambient: .66, warm: .34, cool: .62, fire: .55, exposure: .46 },
      characters: { arthur: 'defensive', sybil: 'listening', sheila: 'thinking', eric: 'concerned', gerald: 'concerned', inspector: 'standing' },
    },
    {
      id: 'harder-light', duration: 1900, label: 'Comfort becomes scrutiny', caption: 'Ambient, window, fire and key light all rebalance. Nothing can remain softly hidden.',
      camera: { scale: 1.18, x: -6, y: 1, focus: 'lighting' }, lighting: { ambient: .88, warm: .18, cool: .82, fire: .32, exposure: .78 },
      characters: { arthur: 'defensive', sybil: 'concerned', sheila: 'thinking', eric: 'ashamed', gerald: 'concerned', inspector: 'standing' },
    },
    {
      id: 'return-wide', duration: 1900, label: 'The new composition', caption: 'The same room now looks like a place of evidence rather than celebration.',
      camera: { scale: 1.03, x: -1, y: 0, focus: 'room' }, lighting: { ambient: .86, warm: .16, cool: .8, fire: .3, exposure: .82 },
      characters: { arthur: 'defensive', sybil: 'concerned', sheila: 'thinking', eric: 'ashamed', gerald: 'concerned', inspector: 'standing' },
    },
    {
      id: 'teaching-pause', duration: 0, label: 'Explore this moment', caption: 'Pause the story. Investigate how Priestley changes the balance of the stage.', teachingPause: true,
      camera: { scale: 1.03, x: -1, y: 0, focus: 'room' }, lighting: { ambient: .86, warm: .16, cool: .8, fire: .3, exposure: .82 },
      characters: { arthur: 'defensive', sybil: 'concerned', sheila: 'thinking', eric: 'ashamed', gerald: 'concerned', inspector: 'standing' },
    },
  ],
  cast: [
    { id: 'arthur', name: 'Arthur Birling', spritePosition: 0, x: 46, y: 21, scale: .78, depth: 'midground' },
    { id: 'sybil', name: 'Sybil Birling', spritePosition: 16.666, x: 30, y: 25, scale: .69, depth: 'midground' },
    { id: 'sheila', name: 'Sheila Birling', spritePosition: 33.333, x: 15, y: 32, scale: .66, depth: 'midground' },
    { id: 'eric', name: 'Eric Birling', spritePosition: 50, x: 57, y: 29, scale: .68, depth: 'midground' },
    { id: 'gerald', name: 'Gerald Croft', spritePosition: 66.666, x: 67, y: 30, scale: .69, depth: 'midground' },
    { id: 'inspector', name: 'Inspector Goole', spritePosition: 83.333, x: 83, y: 21, scale: .78, depth: 'foreground' },
  ],
  hotspots: [
    { id: 'lighting', label: 'Lighting', x: 38, y: 27, focus: 'lighting', method: 'Stage directions and contrast', title: 'The room can no longer flatter the family', explanation: 'Priestley changes several light sources together. Warm fire and table light recede while cooler doorway and key light reveal faces, distance and tension.', question: 'Why might exposure be more threatening to Birling than darkness?', pearlPrompt: 'Priestley uses the change from intimate to harder light to...' },
    { id: 'inspector', label: 'Inspector', x: 88, y: 44, focus: 'inspector', method: 'Blocking and characterisation', title: 'Stillness becomes authority', explanation: 'The Inspector needs fewer gestures than the family. Their turns, recoils and defensive postures make his control visible before he speaks at length.', question: 'How does minimal movement increase his authority?', pearlPrompt: 'By placing the Inspector apart from the family, Priestley...' },
    { id: 'family', label: 'Family', x: 48, y: 39, focus: 'family', method: 'Ensemble blocking', title: 'One family becomes six reactions', explanation: 'Before the knock, the group reads as one confident social unit. After it, different eye-lines and postures expose uncertainty, guilt and resistance.', question: 'Which character appears most ready to change?', pearlPrompt: 'The fragmented family composition reflects...' },
    { id: 'door', label: 'Door', x: 76, y: 29, focus: 'door', method: 'Entrance and symbolism', title: 'The outside world enters', explanation: 'The open door breaks the sealed room. It connects private wealth to public consequence and gives the Inspector a visually separate route onto the stage.', question: 'What does the family lose when the door opens?', pearlPrompt: 'The doorway symbolises...' },
    { id: 'stage-direction', label: 'Stage Direction', x: 19, y: 31, focus: 'room', method: 'Dramatic method', title: 'Meaning is built before dialogue', explanation: 'Lighting, positioning, props and movement instruct a production how to shape the audience\'s judgement. They are evidence, not decoration.', question: 'Which visual choice most weakens Birling\'s authority?', pearlPrompt: 'Through the stage direction, Priestley directs the audience to...' },
  ],
}

export const characterRigParts = [
  'head', 'hair', 'face', 'torso', 'upper-arm-left', 'forearm-left', 'hand-left',
  'upper-arm-right', 'forearm-right', 'hand-right', 'upper-legs', 'lower-legs',
]

export const supportedCharacterStates = [
  'idle', 'seated', 'standing', 'walking', 'talking', 'listening', 'thinking',
  'shocked', 'defensive', 'angry', 'ashamed', 'concerned', 'turn-left', 'turn-right',
  'look-at-character', 'restless', 'hidden',
]
