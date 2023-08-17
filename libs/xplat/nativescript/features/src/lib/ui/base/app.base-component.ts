import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@example-nx-xplat-ng-ns/xplat/core';
import { AppService } from '@example-nx-xplat-ng-ns/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
