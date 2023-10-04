import { createContext } from 'react';
import { IAddress } from '../types/TAddress';

const addressContext = createContext({} as IAddress);

export default addressContext;