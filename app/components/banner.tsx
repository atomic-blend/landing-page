import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import saasstellar from '../assets/saasstellar.svg'
import { useForm } from '@formspree/react'
import { Loader2Icon } from 'lucide-react'
import Saastellar from './icons/saasstellar'
import { cn } from '~/lib/utils'
import useTheme from '~/hooks/use-theme'
const Banner = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()
    return (
        <section className='relative mt-48 flex flex-col items-center justify-between gap-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/20'>
            <div className='h-[1px] w-full bg-gradient-to-r from-primary to-transparent'></div>
            <div className='relative w-full max-w-7xl px-5'>
                <div className='flex justify-between'>
                    <div className='mx-auto flex max-w-2xl flex-col gap-6 lg:mx-0'>
                        <div>
                            <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    Empower{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    and{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    boost{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    your{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    business's{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    productivity
                                </span>
                            </h1>
                        </div>
                        <p className='text-center text-lg text-muted-foreground lg:text-left'>
                            Unlock the potential of your business with
                            SaaSStellar. Experience simplified operations.
                        </p>
                    </div>
                    <Saastellar
                        linearFrom='text-primary'
                        className='absolute -bottom-10 right-5 hidden w-48 lg:block'
                        linearTo={cn(
                            'text-primary',
                            theme === 'zinc' && 'text-zinc-600',
                            theme === 'slate' && 'text-slate-600',
                            theme === 'stone' && 'text-stone-600',
                            theme === 'gray' && 'text-gray-600',
                            theme === 'neutral' && 'text-neutral-600',
                            theme === 'red' && 'text-red-600',
                            theme === 'rose' && 'text-pink-600',
                            theme === 'orange' && 'text-rose-600',
                            theme === 'green' && 'text-emerald-600',
                            theme === 'blue' && 'text-purple-600',
                            theme === 'yellow' && 'text-yellow-600',
                            theme === 'violet' && 'text-violet-600'
                        )}
                    />
                    {/* <img
                        src={saasstellar}
                        alt=''
                        width={196}
                        className='absolute -bottom-10 right-5 hidden lg:block'
                    /> */}
                </div>
            </div>
            <div className='h-[1px] w-full bg-gradient-to-l from-primary to-transparent'></div>
        </section>
    )
}

export default Banner
