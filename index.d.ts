declare module 'react-native-majidux' {
  import { Component } from 'react';

  export function widthPercentage(widthPercent: string): number;
  export function heightPercentage(widthPercent: string): number;
  export function listenOrientationChange(screenClassComponent: Component<any, any>): void;
  export function removeOrientationListener(): void;
}
