import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConsiderSection from "../main-consider-section/ConsiderSection";
import PopUp from "../popup/PopUp";
import { openCloseChat } from "../../redux/actions/actions";
import SectionTitle from "../section-title/SectionTitle";
import Blocks from "./blocks/Blocks";
import "./main.scss"
import Chat from "../chat/Chat";

const Main = () => {

    const isActive = useSelector(state => state.popup)
    const dispatch = useDispatch()



    return (
        <div className="main" >
            <div className="introduction">
                <img src="/pepper-store/build//images/chilli-seeds_1200x1200.webp" alt="" />

                <div className="introduction-text">
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum earum pariatur expedita porro nisi est obcaecati veritatis natus molestias! Numquam deserunt modi aut animi nulla eius, laborum eum...</div>
                    <div className="button">
                        <button className="btn">read more</button>
                    </div>
                </div>
            </div>


            <div className="main-content">


                <ConsiderSection />

                <Blocks />


                <div className="how-to-container">

                    <SectionTitle title={"Block"} />

                    <div className="how-to-grow-peppers">
                        <div className="info-container">
                            <div className="info-content">
                                <div className="title-text">How to Grow Peppers</div>
                                <div className="text">Read our top tips for growing pepper plants that are healthy, large, and have good harvests. Learn how to germinate your chile seeds faster (yes, they do take longer than most vegetable seeds) and how to prevent weak or leggy seedlings...</div>
                                <div className="button">
                                    <button className="btn">read now</button>
                                </div>
                            </div>
                        </div>
                        <div className="block" style={{ backgroundImage: 'url("/pepper-store/build//images/chili-g7ea6ab88a_1920.jpg")' }}>
                            <div className="title">
                                <div className="lowerCase">How</div>
                                <div className="">to grow</div>
                                <div className="">peppers</div>
                                <div className="light-font">from seed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PopUp isActive={isActive} />

            <div className="chat-icon-container">
                <div></div>
                <div className="chat-icon" onClick={() => dispatch(openCloseChat())}>
                    <img src="/pepper-store/build//images/icons/chat.png" alt="" />
                </div>
            </div>

            <Chat />


        </div>
    )
}

export default Main