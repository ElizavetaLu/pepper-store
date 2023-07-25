import SectionTitle from "../../section-title/SectionTitle";
import Block from "./block/Block";
import "./blocks.scss"

const Blocks = () => {

    return (
        <div className="blocks-container">

            <SectionTitle title="Interesting to know" />

            <div className="blocks">
                <div className="main-block" >
                    <Block
                        img="/images/water-g9548613a4_1920.jpg"
                        text="Our best selling peppers"
                        lg
                    />
                </div>

                <div className="small-blocks">
                    <Block
                        img="/images/sierpeper-gc1a7e5ab6_1920.jpg"
                        text="What to grow in current season"
                    />
                    <Block
                        img="/images/paprika-gb98e3c808_1920.jpg"
                        text="Fast growing peppers"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blocks