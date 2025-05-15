import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import Features from "~/components/features";
import Pricing from "~/components/pricing";
import FAQs from "~/components/faqs";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
import DownloadHero from "~/components/download_hero";

export default function Index() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            <div className={"h-24"}></div>
            <DownloadHero/>
            <FAQs />
            <Contact />
            <Footer />
        </div>
    );
}