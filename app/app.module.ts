import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { ZooListComponent } from './zoo-list.component';
import { ZooEditComponent } from './zoo-edit.component';
import { ZooNewComponent } from './zoo-new.component';
import { SpeciesPipe } from './species.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ZooListComponent, ZooEditComponent, ZooNewComponent, SpeciesPipe],
  bootstrap: [ AppComponent]
})

export class AppModule {

}
