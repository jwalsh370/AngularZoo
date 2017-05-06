import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'zoo-edit',
  template: `
    <div *ngIf="childSelectedZoo">
      <div class="well" id="editZooForm">
        <h3>Edit {{childSelectedZoo.name}} </h3>
        <div class="form-group">
          <label>Zoo Name:</label>
          <input [(ngModel)]="childSelectedZoo.name" class="form-control">
        </div>
        <div class="form-group">
        <label for="selectSpecies">Species</label>
        <select ng-model="data.childSelectedZoo.species" [(ngModel)]="childSelectedZoo.species"  class="form-control">
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
          <input [(ngModel)]="childSelectedZoo.age" class="form-control">
        </div>
        <div class="form-group">
          <label>Diet:</label>
          <input [(ngModel)]="childSelectedZoo.diet" class="form-control">
        </div>
        <div class="form-group">
          <label>Location:</label>
          <input [(ngModel)]="childSelectedZoo.location" class="form-control">
        </div>
        <div class="form-group">
          <label>Caretakers:</label>
          <input [(ngModel)]="childSelectedZoo.caretakers" class="form-control">
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <input [(ngModel)]="childSelectedZoo.sex" class="form-control">
        </div>
        <div class="form-group">
          <label>Likes:</label>
          <input [(ngModel)]="childSelectedZoo.likes" class="form-control">
        </div>
        <div class="form-group">
          <label>Dislikes:</label>
          <input [(ngModel)]="childSelectedZoo.dislikes" class="form-control">
        </div>
        <div class="form-group">
          <label>Image Url:</label>
          <input [(ngModel)]="childSelectedZoo.image" class="form-control">
        </div>
        <button (click)="doneButtonClicked()" class="btn btn-default">Submit Changes</button>
      </div>
    </div>
    `
  })

  export class ZooEditComponent {
    @Input() childSelectedZoo: Zoo;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }
  }
