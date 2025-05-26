import React from 'react'
import {
    BlocksIcon,
    DollarSignIcon,
    MessagesSquareIcon,
    ShieldCheckIcon,
    ZapIcon,
    BookOpenText,
    Smartphone,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'Fully open-source',
        description:
            'App as well as backend are open-source and self-hostable.',
        icon: <BookOpenText size={28} className='text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Built for privacy',
        description: 'End-to-end encryption and zero-knowledge architecture, from the database to push notifications.',
        icon: <ShieldCheckIcon size={28} className='text-green-500' />,
        backgroundColor: 'from-green-500/20 to-green-500/5',
    },
    {
        title: 'Easy to use',
        description: 'Intuitive and user-friendly interface for seamless navigation.',
        icon: <ZapIcon size={28} className='text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
        title: 'Use anywhere',
        description:
            'Access your data from any device, anywhere, anytime.',
        icon: <Smartphone className='text-red-500' />,
        backgroundColor: 'from-red-500/20 to-red-500/5',
    },
    {
        title: 'Affordable pricing',
        description:
            'Self-host or use our cloud service at a competitive price.',
        icon: <DollarSignIcon className='text-pink-500' />,
        backgroundColor: 'from-pink-500/20 to-pink-500/5',
    },
    {
        title: 'Community-driven',
        description: 'Join a vibrant community of users and developers.',
        icon: <MessagesSquareIcon size={28} className='text-purple-500' />,
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
    },
]

const Features = () => {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <section className='mx-auto max-w-7xl px-5'>
                <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                    <div>
                        <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                            <span className='brightness-[1.7]'>
                                Powerful Features
                            </span>
                        </span>
                        <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                            <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                Your {' '}
                            </span>
                            <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                Data.{' '}
                            </span>
                            <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                Your{' '}
                            </span>
                            <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                Rules.{' '}
                            </span>
                        </h1>
                    </div>
                    <p className='text-lg text-muted-foreground'>
                        <span className='hidden lg:block'>
                            A fully open-source suite of encrypted apps to help you take back control, stay organized, and get more done — without giving up your privacy.
                        </span>
                        <span className='block lg:hidden'>
                            A fully open-source suite of encrypted apps to help you take back control, stay organized, and get more done — without giving up your privacy.                    </span>
                    </p>
                </div>
                <div>
                    <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                        {featuresData.map((feature, i) => (
                            <li key={i}>
                                <FeatureCard
                                    title={feature.title}
                                    description={feature.description}
                                    backgroundColor={feature.backgroundColor}
                                    icon={feature.icon}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Features
