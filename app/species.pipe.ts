import {Pipe, PipeTransform} from '@angular/core';
import {Zoo} from './zoo.model';

@Pipe({
  name: "species",
  pure: false
})

export class SpeciesPipe implements PipeTransform {
  transform(input: Zoo[], desiredSpecies){
    var output: Zoo[] = [];
    if(desiredSpecies === "AllZoos") {
     for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }

    return output;
  } else if (desiredSpecies === "Mammal") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].species === "Mammal") {
        output.push(input[i]);
      }
    }
    return output;
  }  else if (desiredSpecies === "Reptile") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].species === "Reptile") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredSpecies === "Amphibian") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].species === "Amphibian") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredSpecies === "Marsupial") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].species === "Marsupial") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredSpecies === "Bird") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].species === "Bird") {
         output.push(input[i]);
       }
     }

     return output;
   }  else if (desiredSpecies === "Other") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].species === "Other") {
         output.push(input[i]);
       }
     }
     return output;

   }
 }
}
