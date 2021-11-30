import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Service */
import { SharedService } from './shared.service';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
/* Parent component */
import { AppComponent } from './app.component';
/* Panel */
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './panel/header/header.component';
import { SidebarComponent } from './panel/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PanelComponent,
    HeaderComponent,
    SidebarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  // The application is going to start running from this component
  bootstrap: [AppComponent]
})

export class AppModule { }
