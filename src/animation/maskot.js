import '../css/maskot.css';

import mas_lk from "../other/maskot/msk_lk.png";
import mas_pr from "../other/maskot/msk_pr.png";

const Mascot = () => {

    return (
        <div className="maskot-container">
            <div className="mas-kanan">
                <img className="mas-kanan-img" src={mas_pr} alt="maskot perempuan" />
            </div>

            {/* <div className="mas-about">
                <p>njirrrrrr</p>
            </div> */}

            <div className="mas-kiri">
                <img className="mas-kiri-img" src={mas_lk} alt="maskot laki-laki" />
            </div>
        </div>
    );
};

export default Mascot;
