import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { StartupFrameworkSharedLibsModule, StartupFrameworkSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [StartupFrameworkSharedLibsModule, StartupFrameworkSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [StartupFrameworkSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartupFrameworkSharedModule {
    static forRoot() {
        return {
            ngModule: StartupFrameworkSharedModule
        };
    }
}
