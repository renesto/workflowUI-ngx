import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomInterceptor} from './custom-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Injector, NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {CoalescingComponentFactoryResolver} from '@shared/services/coalescing-component-factory-resolver.service';
import {ServiceInjector} from '@core/service.injector';


import {SharedModule} from '@shared/modules/shared.module';
import {VendorModule} from '@shared/modules/vendor.module';

@NgModule({
    imports: [
        AppRouting,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        VendorModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(injector: Injector, coalescingResolver: CoalescingComponentFactoryResolver) {
        ServiceInjector.injector = injector;
        coalescingResolver.init();
    }
}
