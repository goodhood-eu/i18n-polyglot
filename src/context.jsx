import { createContext } from 'react';

const LocaleContext = createContext();

export const { Consumer, Provider } = LocaleContext;
export default LocaleContext;
