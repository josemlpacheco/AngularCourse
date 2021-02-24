import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {PlatformModule} from '@angular/cdk/platform';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PaginatorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    PlatformModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, PaginatorComponent]
})
export class SharedModule {}
