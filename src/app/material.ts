import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatDialogModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatDialogModule,MatCardModule]
})
export class MaterialModule {}
