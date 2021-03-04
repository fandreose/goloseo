(function(f,c,d){var b="Rho.System";var a=d.apiReqFor(b);function e(){var g=null;this.getId=function(){return g};if(1==arguments.length&&arguments[0][d.rhoIdParam()]){if(b!=arguments[0][d.rhoClassParam()]){throw"Wrong class instantiation!"}g=arguments[0][d.rhoIdParam()]}else{g=d.nextId()}}d.createPropsProxy(e.prototype,[],a,function(){return this.getId()});d.createMethodsProxy(e.prototype,[],a,function(){return this.getId()});d.createRawPropsProxy(e.prototype,[]);e.KEYBOARD_AUTOMATIC="automatic";e.KEYBOARD_HIDDEN="hidden";e.KEYBOARD_SHOWN="shown";e.PLATFORM_ANDROID="ANDROID";e.PLATFORM_IOS="APPLE";e.PLATFORM_WINDOWS_DESKTOP="WINDOWS_DESKTOP";e.PLATFORM_WM_CE="WINDOWS";e.PLATFORM_WP8="WP8";e.REGKEY_CLASSES_ROOT="HKCR";e.REGKEY_CURRENT_USER="HKCU";e.REGKEY_LOCAL_MACHINE="HKLM";e.REGKEY_USERS="HKU";e.REGTYPE_BINARY="Binary";e.REGTYPE_DWORD="DWORD";e.REGTYPE_MULTI_SZ="MultiSZ";e.REGTYPE_SZ="String";e.SCREEN_LANDSCAPE="landscape";e.SCREEN_PORTRAIT="portrait";d.createPropsProxy(e,[{propName:"main_window_closed",propAccess:"r"},{propName:"platform",propAccess:"r"},{propName:"hasCamera",propAccess:"r"},{propName:"screenWidth",propAccess:"r"},{propName:"screenHeight",propAccess:"r"},{propName:"realScreenWidth",propAccess:"r"},{propName:"realScreenHeight",propAccess:"r"},{propName:"screenOrientation",propAccess:"r"},{propName:"ppiX",propAccess:"r"},{propName:"ppiY",propAccess:"r"},{propName:"deviceOwnerEmail",propAccess:"r"},{propName:"deviceOwnerName",propAccess:"r"},{propName:"devicePushId",propAccess:"r"},{propName:"phoneId",propAccess:"r"},{propName:"deviceName",propAccess:"r"},{propName:"osVersion",propAccess:"r"},{propName:"locale",propAccess:"r"},{propName:"country",propAccess:"r"},{propName:"isEmulator",propAccess:"r"},{propName:"isRhoSimulator",propAccess:"r"},{propName:"hasCalendar",propAccess:"r"},{propName:"isSymbolDevice",propAccess:"r"},{propName:"isMotorolaDevice",propAccess:"r"},{propName:"oemInfo",propAccess:"r"},{propName:"uuid",propAccess:"r"},{propName:"applicationIconBadge",propAccess:"rw"},{propName:"httpProxyURI",propAccess:"rw"},{propName:"lockWindowSize",propAccess:"rw"},{propName:"keyboardState",propAccess:"rw"},{propName:"localServerPort",propAccess:"r"},{propName:"freeServerPort",propAccess:"r"},{propName:"screenAutoRotate",propAccess:"rw"},{propName:"hasTouchscreen",propAccess:"r"},{propName:"webviewFramework",propAccess:"r"},{propName:"screenSleeping",propAccess:"rw"},{propName:"hasNetwork",propAccess:"r"},{propName:"hasWifiNetwork",propAccess:"r"},{propName:"hasCellNetwork",propAccess:"r"},{propName:"hasSqlite",propAccess:"r"}],a);d.createMethodsProxy(e,[{methodName:"applicationInstall",nativeName:"applicationInstall",valueCallbackIndex:1},{methodName:"isApplicationInstalled",nativeName:"isApplicationInstalled",valueCallbackIndex:1},{methodName:"applicationUninstall",nativeName:"applicationUninstall",valueCallbackIndex:1},{methodName:"getStartParams",nativeName:"getStartParams",valueCallbackIndex:0},{methodName:"openUrl",nativeName:"openUrl",valueCallbackIndex:1},{methodName:"unzipFile",nativeName:"unzipFile",valueCallbackIndex:3},{methodName:"zipFile",nativeName:"zipFile",valueCallbackIndex:3},{methodName:"zipFiles",nativeName:"zipFiles",valueCallbackIndex:4},{methodName:"setRegistrySetting",nativeName:"setRegistrySetting",valueCallbackIndex:1},{methodName:"getRegistrySetting",nativeName:"getRegistrySetting",valueCallbackIndex:1},{methodName:"deleteRegistrySetting",nativeName:"deleteRegistrySetting",valueCallbackIndex:1},{methodName:"setWindowFrame",nativeName:"setWindowFrame",valueCallbackIndex:4},{methodName:"setWindowPosition",nativeName:"setWindowPosition",valueCallbackIndex:2},{methodName:"setWindowSize",nativeName:"setWindowSize",valueCallbackIndex:2},{methodName:"setDoNotBackupAttribute",nativeName:"setDoNotBackupAttribute",valueCallbackIndex:2},{methodName:"runApplication",nativeName:"runApplication",valueCallbackIndex:3},{methodName:"hideSplashScreen",nativeName:"hideSplashScreen",valueCallbackIndex:0},{methodName:"getProperty",nativeName:"getProperty",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getProperties",nativeName:"getProperties",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getAllProperties",nativeName:"getAllProperties",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"setProperty",nativeName:"setProperty",valueCallbackIndex:2},{methodName:"setProperties",nativeName:"setProperties",valueCallbackIndex:1}],a);d.namespace(b,e)})(Rho.jQuery,Rho,Rho.util);