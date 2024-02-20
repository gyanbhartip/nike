import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

type Props = {};

const SpecialOffers: React.FC<Props> = () => {
    return (
        <section className="flex items-center justify-between gap-10 wrap max-xl:flex-col-reverse max-container">
            <div className="flex-1">
                <img
                    src={offer}
                    alt="offer image"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-col flex-1">
                <h2 className="text-4xl font-bold font-palanquin">
                    <span className="text-coral-red">Special </span>
                    Offer
                </h2>
                <p className="mt-4 info-text">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 info-text">
                    Navigate a realm of possibilities designed to fulfill your
                    unique desires, surpassing the loftiest expectations. Your
                    journey with us is nothing short of exceptional.
                </p>
                <div className="flex flex-wrap gap-4 mt-11">
                    <Button label={'Shop now'} iconURL={arrowRight} />
                    <Button
                        label={'Learn more'}
                        backgroundColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
