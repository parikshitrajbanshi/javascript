/**
 * Switch Condition
 * 
 * switch(Data type){  ///compair each case using ===
 *    case(1)
 *     //process
 *    break;
 * 
 *    case(2)
 *     //process
 *    break;
 * 
 *    case(3)
 *     //process
 *    break;
 * 
 *    case(4)
 *    //process
 *    break;
 * 
 * }
 */

switch(8){
    case'eight':
    console.log('case one');
    break;
    case'8':
    console.log('case two');
    break;
    case 8:
    console.log('case three');
    break;
}

switch(8){
    case'eight':
    console.log('case one');
    break;
    case'8':
    console.log('case two');
    break;
    case 10:
    console.log('case three');
    break;

    default:
        console.log('Deafualt case');
}