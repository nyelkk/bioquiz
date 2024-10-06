// Fonts
import { Poppins, Climate_Crisis } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins'
});
  
export const climateCrisis = Climate_Crisis({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-crisis-climate'
});