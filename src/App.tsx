import {Header
    ,Hero,
    Features,
    MoreInformation,
    Testimonials
} from "./components";

function App() {

    return (
        <main className=' w-[375px] m-auto'>
            <section  className=' bg-neutral-900 p-6  h-[420px]  relative'> 
            <Header />
            
            <img 
            src="/public/images/illustration-intro.png"
            alt="intro illustraction" 
            className='relative z-10  mt-12'
            />

            <img 
            className='absolute bottom-0 left-0 '
            src="/public/images/bg-curvy-mobile.svg" 
            alt="bg curvy mobile"
            />
            </section>

            <section className='bg-neutral-900 p-6'>
                <Hero/>
                
                <Features />
                <MoreInformation />
                <Testimonials />
            </section>


        </main>
    )
}

export default App