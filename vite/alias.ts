import { AliasOptions } from 'vite';
import path from "path/win32";


const alias = { "@": path.resolve(__dirname, '../src') } as AliasOptions;

export default alias;