import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociRoutingModule } from './soci-routing.module';
import { IndexComponent } from './index/index.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateComponent } from './create/create.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SociRoutingModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    IconModule,
    ModalModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule
  ]
})
export class SociModule { }
