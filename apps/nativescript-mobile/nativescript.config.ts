import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.mobile',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    suppressCallJSMethodExceptions: false
  },
  ios: {
    discardUncaughtJsExceptions: false
  },
	appPath: 'src',
  cli: {
    packageManager: 'npm'
  }
} as NativeScriptConfig;
