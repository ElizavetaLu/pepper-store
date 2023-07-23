import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../../../firebase/firebase";
import firebase from 'firebase/compat/app';
import SingleReview from "../single-review/SingleReview";
import ReviewForm from "../review-form/ReviewForm";
import "./reviewSection.scss";

const ReviewSection = ({ value, setValue, product }) => {


    const [user] = useAuthState(auth);
    const reviewsRef = firestore.collection('reviews');
    const query = reviewsRef.orderBy('createdAt');


    const [reviews] = useCollectionData(query);
    const currentProductReview = reviews && auth.currentUser ? reviews.filter(item => item.product === product.namerow) : [];


    const rating = useSelector(state => state.rating.rating);

    const sendReview = async (e) => {
        e.preventDefault()
        const { uid } = auth.currentUser;

        await reviewsRef.add({
            product,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            rating
        })

        setValue('');
    }

    return (
        <div className="review">
            <ReviewForm formValue={value} setFormValue={setValue} sendReview={sendReview} />

            {
                currentProductReview &&
                <div className="reviews-panel">

                    {
                        currentProductReview.length === 0
                            ? <span className="dumb">There's no reviews yet...</span>
                            : null
                    }
                    <div className="all-reviews">
                        {
                            currentProductReview.map((review, indx) => {
                                return (
                                    <SingleReview
                                        key={indx}
                                        review={review.text}
                                        rating={review.rating}
                                        auth={auth}
                                        time={review.createdAt ? new Date(review.createdAt.seconds * 1000).toString() : '--:--'}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            }
        </div>
    )
}

export default ReviewSection 