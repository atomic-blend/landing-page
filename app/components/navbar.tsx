import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useTheme, { changeTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import { type ThemeName } from '~/registry/themes'
import appIcon from "~/assets/appicon_transparent.png";

const Navbar = () => {
    const [theme, setTheme] = useTheme()
    return (
        <div className='px-5 py-2'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={appIcon} alt='' width={40} height={38} />
                    {/* <Saastellar
                        aria-label='saasstellar logo'
                        linearFrom='text-primary'
                        className='w-7'
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
                    /> */}
                    <span className='hidden text-lg font-semibold md:block'>
                        Atomic Blend
                    </span>
                </Link>
                <div className='flex items-center gap-5'>
                    <a
                        href='https://github.com/atomic-blend'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background/30 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10'
                        aria-label='my github'
                    >
                        <GithubIcon className='h-5 w-5' />
                    </a>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
