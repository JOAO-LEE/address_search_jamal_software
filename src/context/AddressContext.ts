import { createContext } from 'react';
import { IAddress } from '../interfaces/IAddress';

const myContext = createContext({} as IAddress);

export default myContext;