'use server';

import { z } from 'zod';
import { generateAnimeIntro, AnimeIntroInput } from '@/ai/flows/ai-intro-generator';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the form fields.',
    };
  }

  // Here you would typically send an email.
  // For this example, we'll just log it to the console.
  console.log('Contact Form Submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Success! Your message has been sent.',
    errors: {},
  };
}


const introGeneratorSchema = z.object({
  portfolioDescription: z.string().min(10, { message: 'Please describe your portfolio in at least 10 characters.' }),
  targetAudience: z.string().min(3, { message: 'Please describe your target audience.' }),
  desiredTone: z.string().min(3, { message: 'Please describe the desired tone.' }),
});

export async function generateIntroAction(prevState: any, formData: FormData) {
  const validatedFields = introGeneratorSchema.safeParse({
    portfolioDescription: formData.get('portfolioDescription'),
    targetAudience: formData.get('targetAudience'),
    desiredTone: formData.get('desiredTone'),
  });
  
  if (!validatedFields.success) {
    return {
      ...prevState,
      message: 'Validation failed. Check your inputs.',
      errors: validatedFields.error.flatten().fieldErrors,
      intro: null,
    };
  }

  try {
    const input: AnimeIntroInput = validatedFields.data;
    const result = await generateAnimeIntro(input);

    return {
      ...prevState,
      intro: result.introduction,
      message: 'Introduction generated successfully!',
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      message: 'Failed to generate introduction. Please try again.',
      errors: null,
      intro: null,
    };
  }
}
