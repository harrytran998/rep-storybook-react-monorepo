import '@emotion/react';
import { Theme as _Theme } from './src';

declare module '@emotion/react' {
  export interface Theme extends _Theme {}
}
