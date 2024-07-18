import React, { useRef, useState, useEffect } from 'react';
import styles from './Reviews.module.css';
import user from './../../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface Review{
    name: string, 
    pic: string, 
    rating: number, 
    text: string, 
    relative_time_description: string
}

interface ReviewsProps {
    screenWidth: number, 
    reviews: Review[]
}

const Reviews: React.FC<ReviewsProps> = (props) => {
    const reviewSliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slider = reviewSliderRef.current;
        if (slider) {
            slider.style.transform = `translateX(-${(currentIndex) * 100}%)`;
        }
    }, [currentIndex])
    var reviewDivWidth = '20%'; 
    var marginLeft = '4%';
    var extraMarginLeft = '8%';
    var numReviews = 4; 
    if (props.screenWidth < 700){
        reviewDivWidth = '80%'; 
        marginLeft = '10%';
        extraMarginLeft = '20%'; 
        numReviews = 1;
    }

    else if (props.screenWidth < 1000){
        reviewDivWidth = '42.5%'; 
        marginLeft = '5%';
        extraMarginLeft = '10%'; 
        numReviews = 2;
    }

    else if (props.screenWidth < 1500){
        reviewDivWidth = '30%'; 
        marginLeft = '2.5%';
        extraMarginLeft = '5%'; 
        numReviews = 3;
    }

    function nextSlide() {
        setCurrentIndex((prev) => (((prev + 1) * numReviews) >= props.reviews.length) ? 0 : prev + 1)
    }
    function prevSlide() {
        setCurrentIndex((prev) => prev - 1)
    }
    const prevButtonClassName = `fa-layers fa-fw ${styles.prev_button}`;
    const nextButtonClassName = `fa-layers fa-fw ${styles.next_button}`;

    console.log(props.reviews); 
    return (
        <div className={styles.reviews_container}>
            <h1 className={styles.reviews_header}>
                WHAT OUR CUSTOMERS SAY
            </h1>
            <div className={styles.slider_container}>
                {currentIndex > 0 && (
                    <div className={prevButtonClassName} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} size='lg' />
                    </div>
                )}

                <div className={nextButtonClassName} onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} size='lg' />
                </div>
                <div className={styles.reviews_slider} ref={reviewSliderRef}>
                    {
                        props.reviews?.map((review, index) => {
                            console.log(review); 
                            return (
                                <div className={styles.review_div} style={{
                                    marginLeft: ((index % numReviews == 0) && index > 0) ? extraMarginLeft : marginLeft,
                                    minWidth: reviewDivWidth, 
                                    maxWidth: reviewDivWidth,
                                }}>
                                    <div className={styles.review_top}>
                                        <img src={review.pic} className={styles.user_pic} />
                                        <div className={styles.review_info}>
                                            <p className={styles.review_user}>
                                                {review.name}
                                            </p>
                                            <p className={styles.review_time}>
                                                {review.relative_time_description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.rating_bar}>
                                        {[1, 2, 3, 4, 5].map((star) => {
                                            if (star - review.rating == 0.5) {
                                                return <FontAwesomeIcon style={{ color: 'gold' }} icon={faStarHalf} size='lg' />;
                                            }
                                            else if (review.rating - star < 0) {
                                                return <FontAwesomeIcon style={{ color: 'gold' }} icon={regularStar} size='lg' />;
                                            }
                                            return <FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} size='lg' />;
                                        })}
                                    </div>
                                    <p className={styles.review_text}>
                                        {review.text}
                                    </p>
                                </div>
                            )
                        })

                    }
                </div>
            </div >

        </div>
    )
}

export default Reviews;