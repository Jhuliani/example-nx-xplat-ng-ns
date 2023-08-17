import { IEnvironment } from '@example-nx-xplat-ng-ns/xplat/core';
import { deepMerge } from '@example-nx-xplat-ng-ns/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
