import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSetupComponent } from '../components/setup/game-setup/game-setup.component';
import { SuspectViewComponent } from '../components/suspect-view/suspect-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'setup', component: GameSetupComponent },
  { path: 'suspect/:code', component: SuspectViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
