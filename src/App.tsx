import { Nav } from './components';
import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffers,
    Subscribe,
    SuperQuality,
} from './sections';

const App = () => (
    <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="padding">
            <PopularProducts />
        </section>
        <section className="padding">
            <SuperQuality />
        </section>
        <section className="py-10 padding-x">
            <Services />
        </section>
        <section className="padding">
            <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue">
            <CustomerReviews />
        </section>
        <section className="w-full py-16 padding sm:py-32">
            <Subscribe />
        </section>
        <section className="pb-8 bg-black padding padding-x">
            <Footer />
        </section>
    </main>
);

export default App;
