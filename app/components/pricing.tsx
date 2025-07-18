import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Badge } from './ui/badge'
import { Link } from "@remix-run/react";

const Pricing = () => {
    const [checked, setChecked] = useState(false)

    return (
        <section className='mx-auto mb-8 mt-48 px-5 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <div className='mx-auto mb-16 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-primary to-transparent'></div>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Adaptable Pricing
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Choose{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            your{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            plan
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Find your plan that fits your needs, whether you prefer
                    self-hosting for complete control or our cloud solution for
                    convenience.
                </p>
                <div className='mt-20 flex items-center justify-center space-x-2'>
                    <Label
                        htmlFor='price-toggle'
                        className={cn(checked && 'text-muted-foreground')}
                    >
                        Monthly
                    </Label>
                    <Switch
                        id='price-toggle'
                        defaultChecked={false}
                        checked={checked}
                        onCheckedChange={() => setChecked(!checked)}
                        className='data-[state=unchecked]:bg-primary'
                        aria-label='toggle pricing'
                    />
                    <Label
                        htmlFor='price-toggle'
                        className={cn(!checked && 'text-muted-foreground')}
                    >
                        Annually
                    </Label>
                </div>
                <div className='mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-around lg:px-6'>
                    <div className='flex flex-col gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-bl from-primary/10 via-transparent to-transparent p-8 text-left before:bg-gradient-to-bl before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Self-hosting</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    Free Forever
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Ideal for complete control and customization
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited task lists</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited tags</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited members</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited storage</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Access to all the apps</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited tasks, habits, notes...</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Community support</span>
                            </li>
                        </ul>
                        <Button className='mt-auto w-full' variant={'outline'}>
                            <Link to={"/download"}>Get started</Link>
                        </Button>
                    </div>
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-b from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-b before:from-primary before:to-primary/10 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Cloud Free</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    0.00
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Perfect for simplicity and ease of use
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>3 task lists</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>5 tags</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>2 members</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>1GB storage</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Access to all the apps</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited tasks, habits, notes...</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Email & community support</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full'>
                            <Link to={"/download"}>Get started</Link>
                        </Button>
                    </div>
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-b from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-b before:from-primary before:to-primary/10 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Cloud</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? '39.99' : '3.99'}
                                    {!checked && (
                                        <Badge variant={'outline'}>
                                            SAVE 15%
                                        </Badge>
                                    )}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Perfect for simplicity and ease of use
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited task lists</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited tags</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited members</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited storage</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Access to all the apps</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited tasks, habits, notes...</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Email & community support</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full'>
                            <Link to={"/download"}>Get started</Link>
                        </Button>
                    </div>
                    {/* <div className='gradient-border relative max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-br before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Premium</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? '699' : '69'}
                                    {checked && (
                                        <Badge variant={'outline'}>
                                            SAVE 15%
                                        </Badge>
                                    )}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Comprehensive solutions for enterprises
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Unlimited team members</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>1TB of cloud storage</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Customizable options</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Dedicated account manager</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>24/7 priority support</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='5 mt-0.5 shrink-0 text-primary' />
                                <span>Advanced security features</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full' variant={'outline'}>
                            Contact us
                        </Button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Pricing
