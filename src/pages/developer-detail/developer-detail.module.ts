import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeveloperDetailPage } from './developer-detail';

@NgModule({
  declarations: [
    DeveloperDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DeveloperDetailPage),
  ],
})
export class DeveloperDetailPageModule {}
