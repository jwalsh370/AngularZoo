import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  template: `<div class="container-fluid banner">
    <div class = "row">
      <div class="aboutDiv col-md-4"><h1>Super <br>Zoo</h1>
      <br>
      <img src="https://www.friendsofanimals.org/sites/default/files/menuimage/become%20a%20member.png" width="100px">
      <br>
      <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</em>
      </div>
    </div>
  </div>
  <div id="menuDiv">
    <nav id="menu">
       <ul>
        <li class="rocket"><a href=""></a></li>
        <li class="wine"><a href="">On Tap</a></li>
        <li class="burger"><a href="">Good Eats</a></li>
        <li class="comment"><a href="">Contact</a></li>
        <li class="sport" ><a href="">Activities</a></li>
        <li class="earth"><a href="">Locations</a></li>
        <div class="current">
          <div class="top-arrow"></div>
          <div class="current-back"></div>
          <div class="bottom-arrow"></div>
        </div>
      </ul>
    </nav>
  </div>
  <div class="container">
    <br><zoo-list [childZooList] = "masterZooList" (clickSender)="editZoo($event)"></zoo-list>
    <div class="row">
      <div class="col-md-6">
        <zoo-new (newZooSender)="addZoo($event)"></zoo-new>
      </div>
      <div class="col-md-6">
        <zoo-edit [childSelectedZoo]="selectedZoo" (doneButtonClickedSender)="finishedEditing()" ></zoo-edit>
      </div>
    </div>
  </div>`
})

export class AppComponent{
  masterZooList:Zoo[]=[
    new Zoo("Boo", "Mammal", 7,"Icy Seals", "Artic Sea", 6, "Male", "Ice showers", "Saunas", "http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Eisbär_1996-07-23.jpg/512px-Eisbär_1996-07-23.jpg"),
    new Zoo("Tata", "Mammal", 3,"Steak", "India", 2, "Female", "Climbing Trees", "Monkeys", "http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg"),
    new Zoo("Balto", "Mammal", 19,"Sheep", "Alaska", 9, "Male", "Alone Time", "Packs", "http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/gray-wolf-closeup.jpg"),
    new Zoo("Rico", "Reptile", 7,"Water Buffalo", "Komodo", 2, "Male", "Sun Bathing", "People", "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8wOTUvb3JpZ2luYWwva29tb2RvLWRyYWdvbi5qcGc="),
    new Zoo("Sasha", "Reptile", 4,"capyabaras", "South America", 5, "Female", "Sun Shine", "Florida", "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpiuXsl7pJFUA_afdrSxZN9COza5Od1_RwTq89EHGSWlW/"),
    new Zoo("California", "Mammal", 14,"Zebra", "Tanzania", 1, "Female", "Sleeping", "Loud Noise", "http://cdn.c.photoshelter.com/img-get/I0000kZAjh5mwpAk/s/870/870/This-is-Namibia-No-11-Just-Stare.jpg"),

  ];

  selectedZoo = null;

  finishedEditing() {
    this.selectedZoo = null;
  }

  editZoo(clickedZoo: Zoo) {
   this.selectedZoo = clickedZoo;
 }
 addZoo(newZooFromChild: Zoo){
   this.masterZooList.push(newZooFromChild);
 }
}
