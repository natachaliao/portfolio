import React from "react";
import './test.css';

const Test = () => {

    return (
        <div className="containerHome">
            <div className="greeting">
                <p className="greeting-text">
                    Welcome to <span>Trail</span>!
                </p>
            </div>
            <div className="latest" id="elnya">
                <div className="title-brief">
                    <p className="latest-release">LATEST RELEASE IS</p>
                    <p className="latest-title">ELNYA</p>
                    <p className="latest-date">2020.9.11</p>
                </div>
                <div className="intro">
                    <p>
                        is called one of the biggest lungs of Europe and is very old -
                        9000 y.o. Its pure air, vast mires views, endless cranberries
                        plantations and fragrance - all worth coming for 3 hours. Highly
                        recommended for nature lovers!
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="pattern"
                                patternUnits="userSpaceOnUse"
                                width="1200"
                                height="600"
                            >
                                <image
                                    href="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg?quality=85&w=1200&h=628&crop=1"
                                    height={600}
                                    width={1200}
                                    x={0}
                                    y={0}
                                />
                            </pattern>
                        </defs>
                        <path
                            d="M0,214.7L282,0h433v399.5l-75.5,97.7l-224.2-49L308.4,557l-180.7-26.3L0,214.7z"
                            fill="url(#pattern)"
                        />
                    </svg>
                </div>
                <div className="note">
                    <p className="note-sign">Note:</p>
                    <p className="note-text">
                        Here you can find both coniferous trees (pines, for instance), and
                        deciduous species, such as birches. Also here are some small lakes
                        and ponds, that are separated by some swamp vegetation.
                    </p>
                    <div className="note-photos"></div>
                </div>
            </div>
        </div>
    );
}

export default Test;
