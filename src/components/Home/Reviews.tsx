import React, { useRef, useState, useEffect } from 'react';
import styles from './Reviews.module.css';
import user from './../../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const reviews = [
    { author_name: 'alawi', relative_time_description: 'a month ago', rating: 5, text: "THE BEST! I'm a used car dealer and need my cars cleaned frequently. So happy I found these guys. The service is unmatched. The meticulous attention to detail is a marvel. They even fixed the scratches and restored the headlights. I thought I'd have to get a new paint job but it came out flawless. It's so convenient getting so many services all done at the same time. No appointment, I dropped my car off in the morning and it was ready next day, dropped off another and picked up the one they completed. They made a 5 year old car look like it just came off the assembly line. Their quality of work, professionalism and timeliness is impeccable. They earned themselves a lifelong customer." },
    { author_name: 'Hassan', relative_time_description: '2 months ago', rating: 5, text: "I am absolutely thrilled with the service I received at LuxeGlow! From the moment I arrived, the team made me feel welcome and reassured me that my car was in good hands. The detailing job they did exceeded my expectations – my car looks better than the day I bought it! The attention to detail and professionalism of the staff truly sets this place apart. I will definitely be a returning customer and highly recommend to anyone in need of top-quality service." },
    { author_name: 'Abe Aljahmi', relative_time_description: '2 months ago', rating: 5, text: "I recently had my car detailed at LuxeGlow Auto Spa and couldn't be more satisfied with the results. The team was professional, thorough, and attentive to every detail, making my car look and feel brand new. The interior was meticulously cleaned, with every nook and cranny addressed, while the exterior gleamed with a flawless shine. The staff was friendly and knowledgeable, offering excellent customer service throughout the process. With reasonable prices and top-notch quality, they have earned my highest recommendation for anyone seeking exceptional car detailing services." },
    { author_name: 'Ayan Ahmed Hussain', relative_time_description: '3 months ago', rating: 5, text: "WOW! Just picked up my Truck after a full car detailing and I'm speechless. These guys work magic!\nThe interior looks and smells like new, and the exterior shines like never before. The team was super friendly, and you can tell they love what they do.\nMy ride feels brand new! If you want your car to sparkle and shine, this is the place to go.\n5 stars all the way!" },
    { author_name: 'Obay Alakel', relative_time_description: '2 months ago', rating: 5, text: "Very good and satisfying service. Took them less than a hour to transform my car from garbage to brand new 🚗🚙." },
    { author_name: 'Hisham Ahmad', relative_time_description: '2 months ago', rating: 5, text: "Took my car to multiple places in this city however this had to be best service I’ve ever gotten. Not only the service itself but also the way the team treats their customers. Their service is worth every cent. Definitely going to be coming back often." },
]


interface ReviewsProps {
    screenWidth: number
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
        setCurrentIndex((prev) => (((prev + 1) * numReviews) >= reviews.length) ? 0 : prev + 1)
    }
    function prevSlide() {
        setCurrentIndex((prev) => prev - 1)
    }
    const prevButtonClassName = `fa-layers fa-fw ${styles.prev_button}`;
    const nextButtonClassName = `fa-layers fa-fw ${styles.next_button}`;

    

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
                        reviews.map((review, index) => {
                            return (
                                <div className={styles.review_div} style={{
                                    marginLeft: ((index % numReviews == 0) && index > 0) ? extraMarginLeft : marginLeft,
                                    minWidth: reviewDivWidth, 
                                    maxWidth: reviewDivWidth,
                                }}>
                                    <div className={styles.review_top}>
                                        <img src={user} className={styles.user_pic} />
                                        <div className={styles.review_info}>
                                            <p className={styles.review_user}>
                                                {review.author_name}
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