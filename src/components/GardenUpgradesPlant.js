import { useDrag } from 'react-dnd'

function GardenUpgradesPlant() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'PLANT',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    //This is optional. The dragPreview will be attached to the dragSource by default
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
        {/* The drag ref marks this node as being the "pick-up" node */}
        <div ref={drag} />
    </div>
  )
}