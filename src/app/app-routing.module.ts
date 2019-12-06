import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AjoutComponent } from './ajout/ajout.component';
import { DetailComponent } from './detail/detail.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SamsungComponent } from './label/samsung/samsung.component';
import { AppleComponent } from './label/apple/apple.component';
import { HuaweiComponent } from './label/huawei/huawei.component';
import { ContactComponent } from './contact/contact.component';
import { XiaomiComponent } from './label/xiaomi/xiaomi.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path:"authentification",component:AuthentificationComponent},
  {path:"affichage",component:AffichageComponent},
  {path:"ajout",component:AjoutComponent},
  {path:"detail",component:DetailComponent},
  {path:"recherche",component:RechercheComponent},
  {path:"samsung",component: SamsungComponent },
  {path:"apple",component:AppleComponent},
  {path:"huawei",component:HuaweiComponent},
  {path:"contact",component:ContactComponent},
  {path:"xiaomi",component:XiaomiComponent},
  {path:"modifier",component:ModifierComponent},
  {path:'', redirectTo:'affichage', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AuthentificationComponent,AffichageComponent,AjoutComponent,DetailComponent]