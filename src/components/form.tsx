import type { FormEvent, ChangeEvent } from 'react';
import { useState } from "react";

import { Button } from './button'

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValid = regExp.test(inputValue);

    if (isValid) {
      console.log("Correo Enviado:", inputValue);
      setError(false);
      setInputValue('');
    } else {
      setError(true);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setInputValue(value);
  }

  return (
    <div className='mb-[300px] absolute top-[-200px] left-0 right-0  mx-auto text-center  py-10 px-6 bg-neutral-800
    rounded-[9px] w-[336px] md:w-[480px]  xl:w-[720px] '>
      <h2 className='font-bold  mb-4 text-[1.25rem]'>
        Get early access today
      </h2>
      <p className='text-sm mb-8'>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 xl:flex-row ' action="">
        <input
          onChange={handleChange}
          value={inputValue || ''}
          className='bg-White rounded-3xl placeholder:text-gray-400 text-Navy-800 text-center  h-12 xl:flex-1'
          type="email"
          placeholder='email@example.com'
          required
        />
        {
          error && (<p className='text-red-500 text-sm mt-[-12px]'>Please provide a valid Email</p>)
        }

        <Button styles='xl:w-[200px]' text='Get Started For Free' />
      </form>
    </div>
  )
}
