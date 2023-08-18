import { NgModule } from '@angular/core';

// xplat
import { TestfeatureModule, UIModule } from '@example-nx-xplat-ng-ns/xplat/web/features';

const MODULES = [UIModule, TestfeatureModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
