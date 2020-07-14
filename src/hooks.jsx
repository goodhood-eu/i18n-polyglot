import { useContext } from 'react';
import LocaleContext from './context';

export const useInternational = () => useContext(LocaleContext);
export const useLocale = () => useInternational().locale;
export const useT = () => useInternational().t;
