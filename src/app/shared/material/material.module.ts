import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';

const material = [MatTableModule]

@NgModule({
    imports :[...material],
    exports :[...material]
})

export class MaterialModule{

}