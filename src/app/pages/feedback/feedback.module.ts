import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeedbackPageRoutingModule
  ],
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
