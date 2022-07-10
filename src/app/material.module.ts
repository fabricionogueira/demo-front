import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatHint } from "@angular/material/form-field";




@NgModule({
    imports: [
        MatIconModule,
        MatTableModule, 
        MatPaginatorModule, 
        BrowserModule, 
        BrowserAnimationsModule, 
        MatInputModule,
        MatExpansionModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatTableModule, 
        MatPaginatorModule, 
        BrowserModule, 
        BrowserAnimationsModule, 
        MatInputModule,
        MatExpansionModule,
        MatButtonModule,
        MatHint
    ]
})
export class MaterialModule {}