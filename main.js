// let firstFunc = (array, data) => {
//     if (array.includes(data)) {
    
//         array.splice(array.indexOf(data), 1);
       
//         console.log(data + ' silindi.');
//     } else {
      
//         console.log(data + ' mövcud deyil.');
//     }
   
//     console.log('arrayimiz olacaq:', array);
// };


// let arrayy = ["Ali", "Qabil", "Qalib", "Behlul", "Malik", "Kamil"];
// firstFunc(arrayy, "Ali");   
// firstFunc(arrayy, "Ali");  
// firstFunc(arrayy, "Qabil"); 





let secondFunc = (array, data) => {
 
    if (array.includes(data)) {
      
        console.log(data + ' artiq mövcuddur.');
    } else {
  
        array.push(data);
        console.log(data + ' əlavə olundu.');
    }
    
    console.log('indiki array:', array);
};


let arrayy = ["Ali", "Qabil", "Qalib", "Behlul", "Malik", "Kamil"];
secondFunc(arrayy, "Kamil"); 
secondFunc(arrayy, "10");    
secondFunc(arrayy, "Behlul");
