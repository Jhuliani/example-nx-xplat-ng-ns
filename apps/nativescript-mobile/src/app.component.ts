import { Component } from '@angular/core';
import { AppService } from '@example-nx-xplat-ng-ns/xplat/nativescript/core';
import { AppBaseComponent } from '@example-nx-xplat-ng-ns/xplat/nativescript/features';

@Component({
  selector: 'example-xplat-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
