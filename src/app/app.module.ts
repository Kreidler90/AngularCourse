import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeModel } from './recipes/recipes.module';
import { ShoppingListModel } from './shopping-list/shopping-list.model';
import { SharedModule } from './shared/shared.module';
import { CoreModul } from './core.modul';
import { AuthModul } from './auth/auth.Model';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModel,
    ShoppingListModel,
    SharedModule,
    CoreModul,
    AuthModul,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
