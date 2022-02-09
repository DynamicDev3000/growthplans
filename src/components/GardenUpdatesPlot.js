
import { useDrop } from 'react-dnd';

function GardenUpgradesPlot() {
    const [{ drop, isOver }, drop] = useDrop(() => ({
      // The type (or types) to accept - strings or symbols
    accept: 'PLANT',

      // Props to collect
    collect: (monitor) => ({
        endDrag: monitor.getDropResult(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    })
    }))

    return (
    <div
        ref={drop}
        role={'PLOT'}
        style={{ backgroundColor: isOver ? 'red' : 'white' }}
    >
        {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
    )
    }