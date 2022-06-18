var arr1 = [1, "good", 4.8, true]

//  for (let index = 0; index < arr1.length; index++) {
//      if(index<2){
//          console.log("hi");
//          break
//      }
//     console.log(index+" "+arr1[index]);
     
//  }

 for (let index = 0; index < arr1.length; index++) {
    if(index<2){
        console.log("hi");
        continue
    }
   console.log(index+" "+arr1[index]);
    
}