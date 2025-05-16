import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import {AppleIcon, Image, Loader2Icon, MoveRightIcon} from 'lucide-react'
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
import {Link} from "@remix-run/react";

const DownloadHero = () => {
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
                    Get Started with
                </span>{' '}<br/>
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
                    Atomic Blend
                </span>
                <br />

            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className='text-base text-muted-foreground lg:text-lg'
            >
                Atomic Blend is a suite of open-source apps that help you take control of your data, streamline your tools, and build a future rooted in privacy and freedom.
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
            <motion.div className={"flex flex-col"}>
               <div className={"flex flex-row items-center justify-center mb-4"}>
                   <img
                       src="/atomic_task.png"
                       alt="Atomic Task Logo"
                       className="h-12 w-12 mr-3 rounded-lg"
                   />
                   <p className={"scroll-m-20 font-inter text-2xl font-extrabold tracking-tight lg:text-3xl"}>Atomic Task</p>
               </div>
                <p className={"text-base text-muted-foreground lg:text-lg"}>Atomic Task is a task management app that helps you stay organized and focused. It is designed to be simple, fast, and easy to use.</p>
                <div className={"flex flex-col mt-4"}>
                    <div className={"flex flex-col md:flex-row"}>
                        <Button className='mt-auto mr-2 w-full' >
                            <img
                                src="/apple.png"
                                alt="Apple Logo"
                                className="h-5 w-5 mr-3"
                            />
                            <Link to={"https://apps.apple.com/us/app/atomic-task/id6743615832"} target={"_blank"}>Download for iOS</Link>
                        </Button>
                        <Button className='mt-auto mr-2 w-full'>
                            <img
                                src="/android.png"
                                alt="Android Logo"
                                className="h-5 w-5 mr-3"
                            />
                            <Link to={"https://brandonguigo.notion.site/Android-Beta-1f491ec0b668804eaa45ce2b92be0721?pvs=4"} target={"_blank"}>Download for Android</Link>
                            <p className={"ml-3 outline px-1 rounded outline-gray-200 text-gray-beta"}>beta</p>
                        </Button>
                    </div>
                    <div className={"flex flex-col md:flex-row mt-2"}>
                        <Button className='mt-auto w-full mr-2'>
                            <img
                                src="/apple.png"
                                alt="Apple Logo"
                                className="h-5 w-5 mr-3"
                            />
                            <Link to={"https://atomic-blend-release.s3.eu-west-1.amazonaws.com/macos/AtomicTask-latest.dmg"} target={"_blank"}>Download for MacOS</Link>
                        </Button>
                        <Button className='mt-auto w-full mr-2'>
                            <img
                                src="/linux.png"
                                alt="Linux Logo"
                                className="h-6 w-6 mr-3 rounded-lg"
                            />
                            <Link to={"https://atomic-blend-release.s3.eu-west-1.amazonaws.com/debian/atomic-task_latest_amd64.deb"} target={"_blank"}>Download for Linux</Link>
                        </Button>
                    </div>
                    <div className={"flex flex-col md:flex-row mt-2"}>
                        <Button className='mt-auto w-full mr-2'>
                            <img
                                src="/windows.png"
                                alt="Windows Logo"
                                className="h-5 w-5 mr-3"
                            />
                            <Link to={"https://atomic-blend-release.s3.eu-west-1.amazonaws.com/windows/atomic-task_latest_windows.zip"} target={"_blank"}>Download for Windows</Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </main >
    )
}

export default DownloadHero
