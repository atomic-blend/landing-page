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
import Anchor from './icons/anchor'

const Hero = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()

    return (
        <main className='mx-auto my-10 flex min-h-[calc(90vh-73px)] max-w-3xl flex-col justify-center gap-6 px-5 text-center lg:my-0'>
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
                    The All-in-One,
                </span>{' '}
                <span
                    className={cn(
                        'relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl',
                        theme === 'orange' && 'to-rose-600',
                        theme === 'blue' && 'to-purple-600',
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
                    Privacy-first
                </span>
                <br />
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    App Suite{' '}
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className='text-base text-muted-foreground lg:text-lg'
            >
                Welcome to <span className='text-primary'>Atomic Blend</span>,
                Your gateway to taking control of your data, streamlining your tools, and building a future rooted in privacy and freedom.{' '}

                <span className='hidden lg:block'>
                    Discover a brighter future with us.
                </span>
            </motion.p>
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
                        <Anchor
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
