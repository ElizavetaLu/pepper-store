import SectionTitle from "../../section-title/SectionTitle";
import "./blocks.scss"

const Blocks = () => {
    
    return (
        <div className="blocks-container">

            <SectionTitle title={"Block"} />

            <div className="blocks">
                <div className="main-block" >
                    <div className="image">
                        <img src="/images/water-g9548613a4_1920.jpg" alt="" />
                    </div>
                    <div className="tittle">
                        <div className="text">Our best selling peppers</div>
                        <div className="button">
                            <button className="btn">view</button>
                        </div>
                    </div>
                </div>
                <div className="small-blocks">
                    <div className="sm-block">
                        <div className="image">
                            <img src="/images/sierpeper-gc1a7e5ab6_1920.jpg" alt="" />
                        </div>
                        <div className="tittle">
                            <div className="text">What to grow in current season</div>
                            <div className="button">
                                <button className="btn">view</button>
                            </div>
                        </div>
                    </div>
                    <div className="sm-block">
                        <div className="image">
                            <img src="/images/paprika-gb98e3c808_1920.jpg" alt="" />
                        </div>
                        <div className="tittle">
                            <div className="text">Fast growing peppers</div>
                            <div className="button">
                                <button className="btn">view</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blocks