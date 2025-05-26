import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import { Loader2Icon, MoveRightIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import useTheme from '~/hooks/use-theme'
import Leaf from './icons/leaf'
import Flower from './icons/flower'
import Swirl from './icons/swirl'
import Fire from './icons/fire'
import Lightning from './icons/lightning'
import taskIcon from '~/assets/task.svg'
import calendarIcon from '~/assets/calendar.svg'
import lockIcon from '~/assets/lock.svg'

// Background icon configuration - distributed across entire space with no overlap
const backgroundIcons = [
    // // Top row
    { icon: taskIcon, x: '3%', y: '5%', size: 'w-16 h-16', rotation: '15deg', delay: 0.1 },
    { icon: calendarIcon, x: '15%', y: '8%', size: 'w-14 h-14', rotation: '-20deg', delay: 0.15 },
    { icon: lockIcon, x: '28%', y: '6%', size: 'w-16 h-16', rotation: '45deg', delay: 0.2 },
    { icon: taskIcon, x: '42%', y: '9%', size: 'w-12 h-12', rotation: '-30deg', delay: 0.25 },
    { icon: calendarIcon, x: '56%', y: '7%', size: 'w-16 h-16', rotation: '60deg', delay: 0.3 },
    { icon: lockIcon, x: '70%', y: '5%', size: 'w-20 h-20', rotation: '-15deg', delay: 0.35 },
    { icon: taskIcon, x: '84%', y: '8%', size: 'w-14 h-14', rotation: '35deg', delay: 0.4 },
    { icon: calendarIcon, x: '94%', y: '6%', size: 'w-16 h-16', rotation: '-45deg', delay: 0.45 },

    // // Second row
    { icon: lockIcon, x: '5%', y: '18%', size: 'w-14 h-14', rotation: '75deg', delay: 0.5 },
    { icon: taskIcon, x: '18%', y: '21%', size: 'w-16 h-16', rotation: '-60deg', delay: 0.55 },
    { icon: calendarIcon, x: '32%', y: '19%', size: 'w-12 h-12', rotation: '30deg', delay: 0.6 },
    { icon: lockIcon, x: '46%', y: '22%', size: 'w-16 h-16', rotation: '-45deg', delay: 0.65 },
    { icon: taskIcon, x: '60%', y: '20%', size: 'w-20 h-20', rotation: '90deg', delay: 0.7 },
    { icon: calendarIcon, x: '74%', y: '18%', size: 'w-14 h-14', rotation: '-75deg', delay: 0.75 },
    { icon: lockIcon, x: '88%', y: '21%', size: 'w-16 h-16', rotation: '25deg', delay: 0.8 },

    // // Third row (behind text area) - removed center icons
    { icon: taskIcon, x: '8%', y: '32%', size: 'w-12 h-12', rotation: '-10deg', delay: 0.85 },
    { icon: calendarIcon, x: '22%', y: '35%', size: 'w-16 h-16', rotation: '50deg', delay: 0.9 },
    { icon: lockIcon, x: '78%', y: '37%', size: 'w-16 h-16', rotation: '80deg', delay: 1.1 },
    { icon: taskIcon, x: '92%', y: '35%', size: 'w-14 h-14', rotation: '-25deg', delay: 1.15 },

    // // Fourth row (behind text area) - removed center icons
    { icon: calendarIcon, x: '6%', y: '46%', size: 'w-16 h-16', rotation: '40deg', delay: 1.2 },
    { icon: lockIcon, x: '20%', y: '49%', size: 'w-14 h-14', rotation: '-70deg', delay: 1.25 },
    { icon: taskIcon, x: '76%', y: '51%', size: 'w-14 h-14', rotation: '-50deg', delay: 1.45 },
    { icon: calendarIcon, x: '90%', y: '49%', size: 'w-16 h-16', rotation: '70deg', delay: 1.5 },

    // // Fifth row
    { icon: lockIcon, x: '4%', y: '60%', size: 'w-16 h-16', rotation: '20deg', delay: 1.55 },
    { icon: taskIcon, x: '17%', y: '63%', size: 'w-12 h-12', rotation: '-80deg', delay: 1.6 },
    { icon: calendarIcon, x: '31%', y: '61%', size: 'w-16 h-16', rotation: '45deg', delay: 1.65 },
    { icon: lockIcon, x: '45%', y: '64%', size: 'w-14 h-14', rotation: '-60deg', delay: 1.7 },
    { icon: taskIcon, x: '59%', y: '62%', size: 'w-16 h-16', rotation: '75deg', delay: 1.75 },
    { icon: calendarIcon, x: '73%', y: '65%', size: 'w-20 h-20', rotation: '-30deg', delay: 1.8 },
    { icon: lockIcon, x: '87%', y: '63%', size: 'w-14 h-14', rotation: '60deg', delay: 1.85 },

    // // Sixth row
    { icon: taskIcon, x: '7%', y: '74%', size: 'w-14 h-14', rotation: '-45deg', delay: 1.9 },
    { icon: calendarIcon, x: '21%', y: '77%', size: 'w-16 h-16', rotation: '35deg', delay: 1.95 },
    { icon: lockIcon, x: '35%', y: '75%', size: 'w-12 h-12', rotation: '-85deg', delay: 2.0 },
    { icon: taskIcon, x: '49%', y: '78%', size: 'w-16 h-16', rotation: '50deg', delay: 2.05 },
    { icon: calendarIcon, x: '63%', y: '76%', size: 'w-16 h-16', rotation: '-65deg', delay: 2.1 },
    { icon: lockIcon, x: '77%', y: '79%', size: 'w-16 h-16', rotation: '40deg', delay: 2.15 },
    { icon: taskIcon, x: '91%', y: '77%', size: 'w-20 h-20', rotation: '-20deg', delay: 2.2 },

    // Bottom row
    // { icon: calendarIcon, x: '2%', y: '88%', size: 'w-16 h-16', rotation: '25deg', delay: 2.25 },
    // { icon: lockIcon, x: '16%', y: '91%', size: 'w-14 h-14', rotation: '-75deg', delay: 2.3 },
    // { icon: taskIcon, x: '30%', y: '89%', size: 'w-16 h-16', rotation: '55deg', delay: 2.35 },
    // { icon: calendarIcon, x: '44%', y: '92%', size: 'w-12 h-12', rotation: '-35deg', delay: 2.4 },
    // { icon: lockIcon, x: '58%', y: '90%', size: 'w-16 h-16', rotation: '70deg', delay: 2.45 },
    // { icon: taskIcon, x: '72%', y: '93%', size: 'w-14 h-14', rotation: '-55deg', delay: 2.5 },
    // { icon: calendarIcon, x: '86%', y: '91%', size: 'w-20 h-20', rotation: '45deg', delay: 2.55 },
    // { icon: lockIcon, x: '96%', y: '89%', size: 'w-16 h-16', rotation: '-40deg', delay: 2.6 },
]

const Hero = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()

    return (
        <main className='relative w-full min-h-screen flex flex-col justify-center gap-6 px-5 text-center'>
            {/* Scattered Background Icons */}
            {backgroundIcons.map((iconConfig, index) => (
                <motion.img
                    key={index}
                    src={iconConfig.icon}
                    alt=""
                    className={cn(
                        'absolute opacity-10 pointer-events-none select-none z-0',
                        iconConfig.size
                    )}
                    style={{
                        left: iconConfig.x,
                        top: iconConfig.y,
                        transform: `rotate(${iconConfig.rotation})`,
                        filter: 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%) contrast(90%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: iconConfig.delay,
                        ease: 'easeOut'
                    }}
                />
            ))}

            <div className="max-w-3xl flex flex-col justify-center items-center mx-auto gap-4 relative z-10 md:mt-24">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={cn(
                        'scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'
                    )}
                >
                    <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                        Tools you know. <br />
                    </span>{' '}
                    <span
                        className={cn(
                            'relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-6xl underline decoration-8 decoration-primary/50',
                            theme === 'orange' && 'to-rose-600',
                            theme === 'blue' && 'to-blue-600',
                            theme === 'green' && 'to-emerald-600',
                            theme === 'red' && 'to-rose-600',
                            theme === 'yellow' && 'to-yellow-600',
                            theme === 'violet' && 'to-violet-600',
                            theme === 'gray' && 'to-gray-600',
                            theme === 'neutral' && 'to-neutral-600',
                            theme === 'slate' && 'to-slate-600',
                            theme === 'stone' && 'to-stone-600',
                            theme === 'zinc' && 'to-zinc-600',
                            theme === 'rose' && 'to-pink-600'
                        )}
                    >
                        Privacy you never had.
                    </span>
                    <br />
                    {/* <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    App Suite{' '}
                </span> */}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    className='text-base text-muted-foreground lg:text-lg'
                >

                    A complete, beautifully integrated suite for your tasks, notes, emails, calendars, and files — designed for simplicity and privacy from day one.
                </motion.p>
            </div>
            {
                theme !== 'rose' &&
                theme !== 'green' &&
                theme !== 'orange' &&
                theme !== 'blue' &&
                theme !== 'yellow' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.6,
                        }}
                        className='mx-auto h-52 w-[1px] rounded-full  bg-gradient-to-b from-transparent to-primary'
                    ></motion.span>
                )
            }
            {
                theme === 'rose' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className='mx-auto'
                    >
                        <Flower
                            className='h-56 rotate-180'
                            linearFrom='text-primary'
                            linearTo='text-primary/10'
                        />
                    </motion.span>
                )
            }
            {
                theme === 'green' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className='mx-auto'
                    >
                        <Swirl
                            className='h-56'
                            linearFrom='text-primary/10'
                            linearTo='text-primary'
                        />
                    </motion.span>
                )
            }
            {
                theme === 'orange' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className='mx-auto'
                    >
                        <Fire
                            className='h-56'
                            linearFrom='text-primary/10'
                            linearTo='text-primary'
                        />
                    </motion.span>
                )
            }
            {
                theme === 'yellow' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className='mx-auto'
                    >
                        <Lightning
                            className='h-56'
                            linearFrom='text-primary/10'
                            linearTo='text-primary'
                        />
                    </motion.span>
                )
            }
            {
                theme === 'blue' && (
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className='mx-auto'
                    >
                        <Lightning
                            className='h-56'
                            linearFrom='text-primary/10'
                            linearTo='text-primary'
                        />
                    </motion.span>
                )
            }
        </main >
    )
}

export default Hero
