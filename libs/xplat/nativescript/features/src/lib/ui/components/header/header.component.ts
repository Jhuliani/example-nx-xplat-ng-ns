import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@example-nx-xplat-ng-ns/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'example-xplat-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
