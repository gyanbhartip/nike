import React from 'react';

type Props = {
    bigShoeImage: string;
    changeBigShoeImage: (shoe: string) => void;
    shoe: {
        bigShoe: string;
        thumbnail: string;
    };
};

const ShoeCard: React.FC<Props> = ({
    shoe,
    changeBigShoeImage,
    bigShoeImage,
}) => {
    const handleClick = () => {
        if (bigShoeImage !== shoe.bigShoe) {
            changeBigShoeImage(shoe.bigShoe);
        }
    };
    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImage === shoe.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}>
            <div className="flex items-center justify-center bg-center bg-cover bg-card sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
                <img
                    src={shoe.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
