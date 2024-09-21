import "../css/timeline.css"
import Countdownt from "./countdown";
import TL from "./TL";


const Timeline =()=>{

    return(
        <section className="timeline-container" id="timeline">
            <TL/>
            <Countdownt/>
        </section>
    )
}

export default Timeline;
