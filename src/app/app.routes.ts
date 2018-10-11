import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders }  from '@angular/core';

import { HomeComponent } from './home.component';


export const appRoutes=[
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:"home",
		component:HomeComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);