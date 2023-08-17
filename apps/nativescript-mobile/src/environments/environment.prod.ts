import { environmentBase } from './environment.base';
import { IEnvironment } from '@example-nx-xplat-ng-ns/xplat/core';
import { environmentProd } from '@example-nx-xplat-ng-ns/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});