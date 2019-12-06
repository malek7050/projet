import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TitlePipePipe } from './title-pipe.pipe';
import { LoginInfoService } from './login-info.service';
import { RechercheComponent } from './recherche/recherche.component';
import { SamsungComponent } from './label/samsung/samsung.component';
import { AppleComponent } from './label/apple/apple.component';
import { HuaweiComponent } from './label/huawei/huawei.component';
import { ContactComponent } from './contact/contact.component';
import { XiaomiComponent } from './label/xiaomi/xiaomi.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ErrorComponent } from './error/error.component';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TitlePipePipe,
    RechercheComponent,
    SamsungComponent,
    AppleComponent,
    HuaweiComponent,
    ContactComponent,
    XiaomiComponent,
    ModifierComponent,
    ErrorComponent,
    Pipe1Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
