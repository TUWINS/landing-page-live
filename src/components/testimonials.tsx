import { TestimonialCard } from "./testimonial-card";

interface Testimonials {
    name: string;
    role: string;
    image: string;
    quote: string;
}

const testimonials: Testimonials[] = [
    {
        name: ' Satish Patel',
        role: 'Founder & CEO, Huddle',
        image: '/images/profile-1.jpg',
        quote: 'Fylo has improved our team productivity by an order of magnitude.  Since making the switch our team has become a well-oiled collaboration machine.'
    },
    {
        name: '  Dara Wilbur',
        role: 'Co-Founder, Huddle',
        image: '/images/profile-2.jpg',
        quote: 'The team was able to get through the project in record time and the results were beyond expectations. We are very happy with the outcome.'
    },
    {
        name: '  John Tarkpor',
        role: 'Co-Founder, Huddle',
        image: '/images/profile-3.jpg',
        quote: 'The team was able to get through the project in record time and the results were beyond expectations. We are very happy with the outcome.'
    }
]


export const Testimonials = () => {
    return (
    <div className='flex flex-col gap-6 items-center  pt-6 relative'> 
    <img className='size-6 absolute top-0 left-8 ' src="/public/images/bg-quotes.png" alt="" />
        {
            testimonials.map((testimonials: Testimonials) => (
                <TestimonialCard key={testimonials.name} {...testimonials} />

            ))  
        }
    
    </div>
    )
}

