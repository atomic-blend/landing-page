import { type MetaFunction } from '@remix-run/node'
import Banner from '~/components/banner'
import Cms from '~/components/cms'
import Contact from '~/components/contact'
import FAQs from '~/components/faqs'
import Features from '~/components/features'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import Navbar from '~/components/navbar'
import Pricing from '~/components/pricing'

export const meta: MetaFunction = () => {
    return [
        { title: 'Atomic Blend' },
        {
            name: 'description',
            content:
                'Atomic Blend is a privacy-first, all-in-one app suite designed to boost productivity and streamline your workflow. With end-to-end encryption, you can trust that your data is secure while you manage tasks, notes, calendar events, and more in one seamless platform.',
        },
        {
            name: 'keywords',
            content:
                'SaaS solutions, end-to-end encrypted, Boost productivity, todo, tasks, notes, calendar, mail, habits, Efficiency tools, Cloud-based software, Productivity software, SaaS platform, Seamless workflows, SaaS productivity, Data analytics, Streamline processes, SaaS benefits, Cloud solutions',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Brandon Guigo',
        },
        {
            tagName: 'link',
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
        },
        {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#5bbad5',
        },
        {
            name: 'msapplication-TileColor',
            content: '#da532c',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
        {
            property: 'og:title',
            content:
                'Atomic Blend - The All-in-One, Privacy-first App Suite',
        },
        {
            property: 'og:description',
            content:
                'Your gateway to taking control of your data, streamlining your tools, and building a future rooted in privacy and freedom.',
        },
        {
            property: 'og:image',
            name: 'og:image',
            content: 'https://atomicblend.brandonguigo.com/app-og-image.png',
        },
        {
            property: 'og:url',
            content: 'https://atomicblend.brandonguigo.com/',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content:
                'Atomic Blend - The All-in-One, Privacy-first App Suite',
        },
        {
            name: 'twitter:description',
            content:
                'Your gateway to taking control of your data, streamlining your tools, and building a future rooted in privacy and freedom.',
        },
        {
            name: 'twitter:image',
            content: 'https://atomicblend.brandonguigo.com/app-og-image.png',
        },
        {
            name: 'twitter:url',
            content: 'https://atomicblend.brandonguigo.com/',
        },
        {
            name: 'twitter:domain',
            content: 'atomicblend.brandonguigo.com',
        },
    ]
}

export default function Index() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-35%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            {/* <Banner /> */}
            <FAQs />
            <Contact />
            <Footer />
        </div>
    )
}

