import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chat.scss"
import { openCloseChat } from "../../redux/actions/actions"
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./chat-message/ChatMessage";
import { firestore, auth } from "../../firebase/firebase"


function useChatScroll(dep) {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep]);
    return ref;
}



const Chat = () => {

    const [user] = useAuthState(auth);
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');


    const [messages] = useCollectionData(query);
    const [formValue, setFormValue] = useState('');

    useEffect(() => {
        const onKeyDown = e => {
            if (e.keyCode === 13) {
                return sendMessage(e);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    });


    const sendMessage = async (e) => {
        e.preventDefault()
        const { uid } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
        })

        setFormValue('');
    }

    const ref = useChatScroll(messages)

    const isChatActive = useSelector(state => state.chat)
    const prevSelectedProduct = useSelector(state => state.setSelectedProductData)
    const dispatch = useDispatch()

    const currentUserMessages = messages && auth.currentUser ? messages.filter(item => item.uid === auth.currentUser.uid) : null

    return (
        <div className={isChatActive ? "chat active" : "chat"} onClick={() => dispatch(openCloseChat())}>
            <div className="chat-content" onClick={e => e.stopPropagation()}>
                <div className="chat-header">
                    <div className="logo">
                        <img src="/pepper-store/build//images/icons/bell-pepper.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="name">Name</div>
                        <div className="text">Text us if you have any questions</div>
                    </div>
                </div>

                {Object.keys(prevSelectedProduct).length === 0
                    ? null
                    : <div className="prevProduct">
                        <div className="last-view">Last viewed product:</div>
                        <div className="productInfo">
                            <div className="prev-product-img">
                                <img src={`https:${prevSelectedProduct.image.fields.file.url}`} alt="" />
                            </div>
                            <div className="product-data">
                                <div className="product-name">{prevSelectedProduct.namerow}</div>
                                {prevSelectedProduct.onSale
                                    ? <div className="row price">
                                        <div className="prev-price">${prevSelectedProduct.price}</div>
                                        <div className="current-price">${prevSelectedProduct.salePrice}</div>
                                    </div>
                                    : <div className="row price">
                                        <div className="price">${prevSelectedProduct.price}</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>}

                <div className="chat-room" ref={ref} >
                    {currentUserMessages && currentUserMessages.map((msg, indx) => (
                        <ChatMessage
                            key={indx}
                            message={msg}
                            auth={auth}
                            time={msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toString() : '--:--'}
                        />
                    ))
                    }
                </div>

                <form className="chat-footer" onSubmit={e => sendMessage(e)}>
                    <input
                        type="text"
                        placeholder="Write a message..."
                        className="msg-input"
                        value={formValue}
                        onChange={e => setFormValue(e.target.value)}
                    />
                </form>

            </div>
        </div>
    )
}

export default Chat 