import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Zoo} from './zoo.model';

@Component({
  selector: 'zoo-list',
  template: `
  <select (change)="onChange($event.target.value)" class="form-control selectSpecies">
    <optgroup class="black">
      <option value="AllAnimals" selected="selected">All Animals</option>
      <option value="Mammal">Mammal</option>
      <option value="Reptile" >Reptile</option>
      <option value="Amphibian" >Amphibian</option>
      <option value="Marsupial" >Marsupial</option>
      <option value="Bird" >Bird</option>
      <option value="Other" >Other</option>
    </optgroup>
  </select>



  <div class="row" >
  <br>
    <div class="col-md-4 cards" *ngFor="let currentZoo of childZooList | species:filterBySpecies">
      <div class="hover-fold">
      <br>
        <h4>{{currentZoo.name}} ({{currentZoo.species}})</h4>
        <br>
        <div class="cardButtonRow">
          <button class="btn btn-default"  (click)="editButtonHasBeenClicked(currentZoo)">Edit Animal Details</button>
       </div>
        <div class="top">
          <div class="front face"><img src={{currentZoo.image}} width="100%"></div>
          <div class="back face">
            <h5>Age: {{currentZoo.age}}</h5>
            <p>Diet: {{currentZoo.diet}}</p>
            <p>Location: {{currentZoo.location}}</p>
            <p>Number of Caretakers: {{currentZoo.caretakers}}</p>
            <p>Sex: {{currentZoo.sex}}</p>
            <p>Likes: {{currentZoo.likes}}</p>
            <p>Dislikes: {{currentZoo.dislikes}}</p>
           </div>
          </div>
         </div>
        </div>
       </div>
  `

})

export class ZooListComponent{
  @Input()childZooList: Zoo[];
  @Output()clickSender= new EventEmitter();



  editButtonHasBeenClicked(zooToEdit: Zoo) {
    this.clickSender.emit(zooToEdit);
  }

  ageColor(currentZoo){
    if(currentZoo.age < 5){
      return "bg-info";
    } else if(currentZoo.age < 10){
      return "bg-success";
    }else if(currentZoo.age < 25){
      return "bg-warning";
    } else {
      return "bg-danger"
    }
  }
  filterBySpecies: string = "AllZoos";
  onChange(optionFormMenu) {
    this.filterBySpecies = optionFormMenu;
  }

}
