import { createContext } from 'react';
import { IAddress } from '../types/address/TAddress';

const addressContext = createContext({} as IAddress);

export default addressContext;