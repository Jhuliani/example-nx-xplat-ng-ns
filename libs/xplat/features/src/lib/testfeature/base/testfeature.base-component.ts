import { Directive } from '@angular/core';
import { BaseComponent } from '@example-nx-xplat-ng-ns/xplat/core';

@Directive()
export abstract class TestfeatureBaseComponent extends BaseComponent {
  public text = 'Testfeature';

  constructor() {
    super();
  }
}
