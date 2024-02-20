import React from 'react';
import { star } from '../assets/icons';

type Props = {
    product: {
        imgURL: string;
        name: string;
        price: string;
    };
};

const PopularProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <img
                src={product.imgURL}
                alt={product.name}
                className="w-[282px] h-[282px]"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating icon" width={24} height={24} />
                <p className="text-xl leading-normal font-montserrat text-slate-gray">
                    (4.5)
                </p>
            </div>
            <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
                {product.name}
            </h3>
            <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
                {product.price}
            </p>
        </div>
    );
};

export default PopularProductCard;
