import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

/* Import Material Component */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGeneratorComponent } from './form-generator/form-generator.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './form-generator/input-text/input-text.component';
import { SelectComponent } from './form-generator/select/select.component';
import { InputCheckboxComponent } from './form-generator/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './form-generator/input-radio/input-radio.component';
import { InputPasswordComponent } from './form-generator/input-password/input-password.component';
import { InputDateComponent } from './form-generator/input-date/input-date.component';
import { InputTimeComponent } from './form-generator/input-time/input-time.component';
import { TextAreaComponent } from './form-generator/text-area/text-area.component';
import { JoditComponent } from './form-generator/jodit/jodit.component';
import { CaptchaComponent } from './form-generator/captcha/captcha.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingBlockComponent,
    FormGeneratorComponent,
    InputTextComponent,
    SelectComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    InputPasswordComponent,
    InputDateComponent,
    InputTimeComponent,
    TextAreaComponent,
    JoditComponent,
    CaptchaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
