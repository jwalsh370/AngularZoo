import {Component, Output, EventEmitter} from '@angular/core';
import {Zoo} from './zoo.model';

@Component({
  selector: 'zoo-new',
  template:
  ` <div class="zooStand pull-left" (click)="newButtonClicked()">
      <img src="resources/images/zooStand.png" width="70px">
      <h3>Add Animals</h3>
    </div>
  <div *ngIf="addNewZoo">
    <form class="well" id="addNewForm">
      <div class="form-group">
        <label>Animal Name:</label>
        <input #newName class="form-control">
      </div>
      <div class="form-group">
      <label for="selectSpecies">Species:</label>
      <select #newSpecies  class="form-control">
        <option value="Mammal">Mammal</option>
        <option value="Reptile" >Reptile</option>
        <option value="Amphibian" >Amphibian</option>
        <option value="Marsupial" >Marsupial</option>
        <option value="Bird" >Bird</option>
        <option value="Other" >Other</option>
      </select>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input #newBrand class="form-control">
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <input #newDiet class="form-control">
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input #newLocation class="form-control">
      </div>
      <div class="form-group">
        <label>caretakers:</label>
        <input #newCaretakers class="form-control">
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <input #newSex class="form-control">
      </div>
      <div class="form-group">
        <label>Likes:</label>
        <input #newLikes class="form-control">
      </div>
      <div class="form-group">
        <label>Dislikes:</label>
        <input #newDislikes class="form-control">
      </div>
      <div class="form-group">
        <label>Image URl:</label>
        <input #newImage class="form-control">
      </div>
      <button class="btn btn-default" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newImage.value); newSpecies.value=''; addNewZoo=false;">Add</button>
  </form>
</div>
`
})

export class ZooNewComponent {
  @Output() newZooSender = new EventEmitter();

  submitForm( name: string,  species: string,  age: string,  diet: string,  location: string,  caretakers: string,  sex: string,  likes: string,  dislikes: string,  image: string){
    if (image === "") {
      image = "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1482203076.0883_u8yQU9_n.jpg";
    }
    var newZooToAdd: Zoo = new Zoo (name, species, parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes, image);
    this.newZooSender.emit(newZooToAdd);
  }

  addNewZoo: boolean = false;

  newButtonClicked() {

    this.addNewZoo = true;
  }
}
