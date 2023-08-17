import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestfeatureModule as SharedTestfeatureModule } from '@example-nx-xplat-ng-ns/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TESTFEATURE_COMPONENTS } from './components';

@NgModule({
  imports: [SharedTestfeatureModule, UIModule],
  declarations: [...TESTFEATURE_COMPONENTS],
  exports: [...TESTFEATURE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TestfeatureModule {}
