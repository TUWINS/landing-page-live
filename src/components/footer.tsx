import type { JSX } from "react";
import { ContactItem } from "./footer/contact-item"
import { FooterListItem } from "./footer/footer-list-item"
import { FacebookIcon } from "./footer/facebook-icon";
import { XIcon } from "./footer/x-icon";
import { InstagramIcon } from "./footer/instagram-icon";

interface ContactInformation {
  text: string,
  inconUrl: string;
  alt: string;
}


const contactInformation: ContactInformation[] = [
  {
    text: 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-veritatis-perferendis-iusto-illo-fugiat-vitae-eum-fuga-quos-iure-alias-numquam-alquid-facilis-quis-vero-consectetur-culpa-ab-molestias-rerum-reiciendis',
    inconUrl: '/images/icon-location.svg',
    alt: 'location'
  },
  {
    text: '+1-543-123-4567',
    inconUrl: '/images/icon-phone.svg',
    alt: 'icon phone'
  },
  {
    text: 'example@fylo.com',
    inconUrl: '/images/icon-email.svg',
    alt: 'icon email'
  },

];

const pages: string[] = [
  'About us',
  'Jobs',
  'Press',
  'Blog'

];

const conditions: string[] = [
  'Contact',
  'Terms',
  'Privacy'
];

interface Media {
  text: string;
  icon: JSX.Element;

}

const medias: Media[] = [
  {
    text: 'facebook',
    icon: <FacebookIcon />,
  },
  {
    text:'X',
    icon: <XIcon/>
  },
  {
    text:'Insta',
    icon: <InstagramIcon/>
  }
];

export const Footer = () => {
  return (
    <footer className='pt-[260px] pb-[60px] px-6'>
      <img className='mb-10' src="/images/logo.svg" alt="Logo" />

      <div className='flex flex-col gap-4' >



        {
          contactInformation.map
            (contact => (
              <ContactItem key={contact.alt} {...contact} />
            ))
        }
      </div>

      <div className='flex flex-col gap-8 mt-16'>
        <ul>
          {
            pages.map((page: string) => (
              <FooterListItem key={page} text={page} />

            ))
          }

        </ul>
        <ul>
          {
            conditions.map((condition: string) => (
              <FooterListItem key={condition} text={condition} />
            ))
          }
        </ul>


  
  <div className='flex justify-center gap-4'>
            {medias.map((media) => (
              <div
                key={media.text}
                className='text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[40px] p-2'
              >
                {media.icon}
              </div>
            ))}
</div>
      </div>
    </footer>
  );
};


