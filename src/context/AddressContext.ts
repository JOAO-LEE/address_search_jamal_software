import { createContext } from 'react';
import { IAddress } from '../interfaces/IAddress';

const addressContext = createContext({} as IAddress);

export default addressContext;