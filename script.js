//  /  //  TASK1

// var eded="4628";
// cem=0;

// for (let index = 0; index < eded.length; index++) {
//    cem+=parseInt(eded[index]) 
// }
// console.log(cem);


// /////////////////////////////////////////////////////////////////////////////////


//   /  //  TASK2

// var eded = "x";
// if (eded % 2 === 0) {
//     console.log(eded + " ədədi cütdür.");
// } else {
//     console.log(eded + " ədədi təkdir.");
// }


// /////////////////////////////////////////////////////////////////////////////////


//      TASK3:SWitch case

// var operator = "7"
// if (operator>=1 && operator<=12) {

//     switch (operator)
//      {
//         case "1":
//             console.log("Yanvar");
//             break;
//         case "2":
//             console.log("Fevral");
//             break;
//         case "3":
//             console.log("Mart");
//             break;
//         case "4":
//             console.log("Aprel");
//             break;
//         case "5":
//             console.log("May");
//             break;
//         case "6":
//             console.log("Iyun");
//             break;
//         case "7":
//             console.log("Iyul");
//             break;
//         case "8":
//             console.log("Avqust");
//             break;
//         case "9":
//             console.log("Sentyabr");
//             break;
//         case "10":
//             console.log("Oktyabr");
//             break;
//         case "11":
//             console.log("Noyabr");
//             break;
//         case "12":
//             console.log("Dekabr");
//             break;
//         default:
//             console.log("Duzgun reqem daxil edin!");
//             break;
//     }
// }
// else{
//     console.log("1-12 araliginda eded daxil edin");
// }


// //////////////////////////////////////////////////////////////////////////////////


//  /  //   TASK4

// var eded="594";
// for (let index = 0; index < eded.length; index++) {
//     if (parseInt(eded[0])+parseInt(eded[2])===parseInt(eded[1])) {
//         console.log("beli,beraberdir");
//     }
//     else{
//         console.log("beraber deyil");
//     }

// }


// /////////////////////////////////////////////////////////////////////////////////////////


// /  //   TASK5

// var eded="1222"
// var cem=0;
// var hasil=1;


// for (let index = 0; index < eded.length; index++) {

//     cem+=parseInt(eded[index])
//     hasil*=parseInt(eded[index])

//     if (eded[index]==="5") {
//         console.log(cem);
//     }
//     else
//     {

//         console.log(hasil);    }
// }


// ///////////////////////////////////////////////////////////////////////////////////////////


//   /   //   TASK6

// var a
// var cem=0;
// var hasil=1;


// for (let a = 20; a < 24; a++) {
//     if (a%2===0) {
//         cem+=a

//     }
//     else{
//         hasil*=a
//     }
// }
// console.log("cem "   + cem);
// console.log("hasil " + hasil);


// ////////////////////////////////////////////////////////////////////////////////////


//  /  //    TASK7

// var a=[]
// for (let eded =1; eded < 1000; eded++) {
//     if (eded % 7 === 0 && eded % 8 === 0) {
//         a.push(eded);
//     }

// }
// console.log(a);


////////////////////////////////////////////////////////////////////////////////////////


//  /  //     TASK8

// var eded="705037";
// var Polindrom= true;

// for (let i = 0,j=eded.length-1; i < j; j--,i++) {
//     if (eded[i]===eded[j]) {
//         Polindrom=true
//     }
//     else{
//         Polindrom=false
//     }
// }
// if (Polindrom) {
//     console.log("Polindromdur");
// }
// else{
//     console.log("Polindrom deyil");
// }


// //////////////////////////////////////////////////////////////////////////////////////////


//  /  //   TASK9
// var arr=[200000,300000,400000]
// cem=0;
// num=0;
// for (let i = 0; i < arr.length; i++) {
//     cem+=arr[i]/10

//     num=cem/10
// }
// console.log(num);


// /////////////////////////////////////////////////////////////////////////////////////////////


//  /  //   TASK10
// var a = "457"
// cem = 0;
// kvdrt = 0;
// var beraberdir=true
// for (let i = 0; i < a.length; i++) {
//     cem += parseInt(a[i])
//     if (a[0]*a[0]===cem) {
//         beraberdir=true
//     }
//     else{
//         beraberdir=false
//     }
// }
// if (beraberdir) {
//    console.log("beraberdir"); 
// }
// else{
//     console.log("beraber deyil");
// }
