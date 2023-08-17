import { Component } from '@angular/core';

import { TestfeatureBaseComponent } from '@example-nx-xplat-ng-ns/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'example-xplat-testfeature',
  templateUrl: './testfeature.component.html',
})
export class TestfeatureComponent extends TestfeatureBaseComponent {
  constructor() {
    super();
  }
}
