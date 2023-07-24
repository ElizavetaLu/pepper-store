import { useDispatch, useSelector } from "react-redux";
import { selectSection } from "../../redux/actions/actions"
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import Card from "../product-card/Card";
import SectionTitle from "../section-title/SectionTitle";

import "swiper/css";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "./considerSection.scss"

const ConsiderSection = () => {

    const mostPopular = useSelector(state => state.products.mostPopular)
    const newAddition = useSelector(state => state.products.new)
    const onSale = useSelector(state => state.products.onSale)


    const dispatch = useDispatch()
    const active = useSelector(state => state.considerSection)

    return (

        <div className="consider-section">

            <SectionTitle title={"Consider"} />

            <div className="category">
                <div className={active === 'new' ? "item active" : "item"} onClick={() => dispatch(selectSection('new'))}>new addition </div>
                <div className={active === 'sale' ? "item active" : "item"} onClick={() => dispatch(selectSection('sale'))}>on sale</div>
                <div className={active === 'popular' ? "item active" : "item"} onClick={() => dispatch(selectSection('popular'))}>most popular</div>
            </div>


            <div className="category-cards">

                <Swiper
                    slidesPerView={6}
                    grid={{ rows: 2 }}
                    slidesPerGroup={12}
                    navigation
                    modules={[Grid, Navigation]}
                    className="mySwiper"
                >


                    {active === 'new'
                        ? <div className="category-cards">
                            {
                                newAddition &&
                                newAddition.map(item => (<SwiperSlide key={item.namerow} className="swiper-slide">
                                    <Card {...item} />
                                </SwiperSlide>))

                            }
                        </div>
                        : active === 'sale'
                            ? <div className="category-cards">
                                {
                                    onSale &&
                                    onSale.map(item => (<SwiperSlide key={item.namerow} className="swiper-slide">
                                        <Card {...item} />
                                    </SwiperSlide>))

                                }
                            </div>
                            : <div className="category-cards">
                                {mostPopular &&
                                    mostPopular.map(item => (<SwiperSlide key={item.namerow} className="swiper-slide">
                                        <Card {...item} />
                                    </SwiperSlide>))
                                }
                            </div>
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default ConsiderSection






