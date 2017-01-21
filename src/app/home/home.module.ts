import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ServiceComponent } from './service/service.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureComponent } from './feature-list/feature/feature.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent,
        SlideShowComponent,
        ServiceComponent,
        CallToActionComponent,
        FeatureListComponent,
        FeatureComponent,
    ]
})
export class HomeModule { }
