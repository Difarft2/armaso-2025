import "../css/timeline.css"
import Countdownt from "./countdown";
import TL from "./TL";


const Timeline =()=>{
    const targetDate = "2024-12-31T00:00:00";

    return(
        <section className="timeline-container" id="timeline">
            <TL/>
            <Countdownt targetDate={targetDate}/>
        </section>
    )
}

export default Timeline;
