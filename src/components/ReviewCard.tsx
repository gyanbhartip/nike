import React from 'react';
import { star } from '../assets/icons';

type Props = {
    review: {
        imgURL: string;
        customerName: string;
        rating: number;
        feedback: string;
    };
};

const ReviewCard: React.FC<Props> = ({ review }) => {
    const { imgURL, customerName, rating, feedback } = review;
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={imgURL}
                alt={customerName}
                className="object-cover rounded-full w-[120px] h-[120px]"
            />
            <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    alt="rating icon"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">
                    ({rating})
                </p>
            </div>
            <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">
                {customerName}
            </h3>
        </div>
    );
};

export default ReviewCard;
