import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { enableProdMode } from '@angular/core';
import { environment } from '@example-nx-xplat-ng-ns/xplat/core';
import { AppModule } from './app.module';

if (environment.production) {
  enableProdMode();
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
