/* eslint-disable react/prop-types */

function StageProp({ image, className = '', label = '' }) {
  return <div className={`cinematic-stage-prop ${className}`} aria-hidden="true">
    <img src={image} alt="" />
    {label && <span>{label}</span>}
  </div>
}

export default StageProp
