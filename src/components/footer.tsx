import { ContactItem } from "./footer/contact-item"

interface ContactInformation{
    text:string,
    inconUrl:string;
    alt:string;
}


const contactInformation: ContactInformation []=[
  {
    text:'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-veritatis-perferendis-iusto-illo-fugiat-vitae-eum-fuga-quos-iure-alias-numquam-alquid-facilis-quis-vero-consectetur-culpa-ab-molestias-rerum-reiciendis',
    inconUrl:'/images/icon-location.svg',
    alt:'location'
  },
  {
    text:'+1-543-123-4567',
    inconUrl:'/images/icon-phone.svg',
    alt:'icon phone'
  },
  {
    text:'example@fylo.com',
    inconUrl:'/images/icon-email.svg',
    alt:'icon email'
  },

]
export const Footer = () => {
  return (
    <footer className='pt-[260px] pb-[300px] px-6'> 
        <img className='mb-10' src="/images/logo.svg" alt="Logo" />
      
    <div className='flex flex-col gap-4' >


    
      {
          contactInformation.map
          (contact=> (
              <ContactItem key={contact.alt} {...contact} />
            ))
      }
    </div>
    </footer>
  )
}


