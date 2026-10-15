/* eslint-disable react/prop-types */

function SceneHotspot({ hotspot, active, onSelect }) {
  return <button
    type="button"
    className={`cinematic-hotspot ${active ? 'is-active' : ''}`}
    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    onClick={() => onSelect(hotspot.id)}
    aria-pressed={active}
  >
    <span>{hotspot.label}</span><i>+</i>
  </button>
}

export default SceneHotspot
