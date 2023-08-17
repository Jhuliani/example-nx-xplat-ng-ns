import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@example-nx-xplat-ng-ns/xplat/nativescript/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
