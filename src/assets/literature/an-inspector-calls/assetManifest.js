import diningRoomArrival from './environments/birling-dining-room-arrival.png'
import diningRoomEmpty from './environments/birling-dining-room-empty.png'
import familyBeforeInspector from './environments/birling-family-before-inspector.png'
import factoryDismissal from './environments/birling-factory-dismissal.png'
import milwardsDismissal from './environments/milwards-dismissal.png'
import geraldDaisyRenton from './environments/gerald-daisy-renton.png'
import charityRefusal from './environments/charity-refusal.png'
import ericConfession from './environments/eric-confession.png'
import finalTelephoneCall from './environments/final-telephone-call.png'
import inspectorFinalWarning from './environments/inspector-final-warning.png'
import characterLineup from './characters/full-body-lineup.png'
import portraitBoard from './characters/portrait-board.png'
import geraldPortrait from './characters/gerald-portrait.png'

export const inspectorCallsAssets = {
  environments: {
    diningRoomArrival,
    diningRoomEmpty,
    familyBeforeInspector,
    factoryDismissal,
    milwardsDismissal,
    geraldDaisyRenton,
    charityRefusal,
    ericConfession,
    finalTelephoneCall,
    inspectorFinalWarning,
  },
  characters: {
    lineup: characterLineup,
    portraits: portraitBoard,
    geraldPortrait,
    rigVersion: 1,
    replaceableParts: [
      'head', 'hair', 'face', 'torso', 'upperArms', 'forearms', 'hands', 'upperLegs', 'lowerLegs',
    ],
  },
  props: {
    // Reserved for independently animated telephone, door and dining props.
  },
  effects: {
    // Lighting is currently rendered as composited CSS layers in StageLighting.
  },
}
