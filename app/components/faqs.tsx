import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'
import ChatMessage from './icons/chat-message'
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'

const faqs = [
    {
        question:
            'Is Atomic Blend really secure?',
        answer: 'Absolutely. Atomic Blend is built with end-to-end encryption by default, so only you — and the people you share with — can access your data. Not even we can see it.',
    },
    {
        question:
            'Wait… you’re using AWS for your Cloud version — don’t they spy on our data?',
        answer: "No worries! We only use AWS for its reliable cloud infrastructure. Thanks to end-to-end encryption, AWS never has access to your actual data. You stay in full control at all times.",
    },
    {
        question:
            'Are there any hidden fees?',
        answer: "No hidden costs. Atomic Blend is free and open source if you self-host. Optional paid services (like hosting or support) are available, but never required.",
    },
    {
        question:
            'Can I move from self-hosting to the managed (SaaS) version later?',
        answer: 'Not just yet — we’re working on it! Right now, it’s not possible to migrate data from self-hosted to SaaS, but it’s on our roadmap.',
    },
    {
        question:
            'Can I try Atomic Blend before committing?',
        answer: 'Definitely! You can spin up a local instance or even host it for free on Vercel to try it out. No sign-ups, no strings attached.',
    },
]

const FAQs = () => {
    return (
        <section className='relative mx-auto px-5 pb-8 pt-48'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>FAQs</span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Frequently{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            asked{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            questions
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Haven’t found what you’re looking for?{' '}
                    <a
                        href='#name'
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'px-0 text-lg text-foreground'
                        )}
                    >
                        Contact us.
                    </a>
                </p>
                <div className='mt-20 flex items-center justify-between'>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                        )}
                    />
                    <Accordion
                        collapsible
                        type='single'
                        className='mx-auto w-full max-w-4xl grow basis-28 text-left'
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-left text-xl hover:no-underline'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-base text-muted-foreground'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs
