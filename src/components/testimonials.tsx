
import { testimonials } from "../common/constants";
import type { Testimonial } from "../types.ts/type";
import { TestimonialCard } from "./testimonial-card";


export const Testimonials = () => {
    return (
    <div className='flex flex-col gap-6 items-center  pt-6 relative 
    w-[320px] md:w-[480px] mx-auto '> 
    <img className='size-6 absolute top-0 left-8 ' src="/public/images/bg-quotes.png" alt="" />
        {
            testimonials.map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />

            ))  
        }
    
    </div>
    )
}

