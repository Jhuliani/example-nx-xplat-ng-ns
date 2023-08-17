import { NgModule } from '@angular/core';
import { TestfeatureModule as SharedTestfeatureModule } from '@example-nx-xplat-ng-ns/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TESTFEATURE_COMPONENTS } from './components';

@NgModule({
  imports: [SharedTestfeatureModule, UIModule],
  declarations: [...TESTFEATURE_COMPONENTS],
  exports: [...TESTFEATURE_COMPONENTS],
})
export class TestfeatureModule {}
