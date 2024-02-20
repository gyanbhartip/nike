import { ServiceCard } from '../components';
import { services } from '../constants';

type Props = {};

const Services: React.FC<Props> = () => {
    return (
        <section className="flex flex-wrap justify-center max-container gap-9">
            {services.map(service => (
                <ServiceCard key={service.label} service={service} />
            ))}
        </section>
    );
};

export default Services;
