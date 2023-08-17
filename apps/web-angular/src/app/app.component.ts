import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@example-nx-xplat-ng-ns/xplat/web/features';

@Component({
  selector: 'example-xplat-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
