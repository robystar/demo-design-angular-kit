import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DesignAngularKitModule, ItComponentsModule, ItIconComponent, ItInputComponent, ItLanguageSwitcherComponent, ItRadioButtonComponent, ItUploadDragDropComponent, ItUploadFileListComponent} from "design-angular-kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpBackend, HttpClient} from "@angular/common/http";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormlyModule } from '@ngx-formly/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignAngularKitModule,
    ItUploadFileListComponent,
    ItLanguageSwitcherComponent,
    ItInputComponent,
    ItRadioButtonComponent,
    ItComponentsModule,
    ItIconComponent,
    ItUploadDragDropComponent,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) => new MultiTranslateHttpLoader(http, [
          './bootstrap-italia/i18n/', // Load library translations first, so you can edit the keys in your localization file
          './assets/i18n/', // Your i18n location
        ]),
        deps: [HttpBackend],
      },
      defaultLanguage: 'it'
    }),
    TranslateModule.forChild({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
