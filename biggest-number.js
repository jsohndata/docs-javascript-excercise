const array = [1,5,3,7,0,456,456,45,2345,234,34,342,12321,1,523346,4573425,34,123235,53422453,3524,425,452,2345,42311234,523523431,142,4125,2343462,5234,341,23412,463,643,4578564523,324,754,75648,463,1243214,241,235,634,5634,574,86,679,,574,5634,523,3421,421,642,3754,7456,53,2421,3523,463,7564,543,44,4324,32,5234,6345745,,523,423,342,346,6345,6345,235453,253,2,463,67345,568,856,643,4523,235,745,856,534242,15,32,5634,453,346,63457,7456,6,7564,2354,4523,124,412,53624,64573,7546,7456,6453,523,241,1234,234,523,2345,634,6453,7456,8,678,976,96,6754,532,2341,234234,3524,1,754,4567,7456,7456,,754,6345,56234,235,235,235];
// 7

let currentNumber = 0;
let checkStatus;
let isShowProcess = true;

const biggestNum = () => {
  for( let i = 0; i < array.length; i ++ ) {

    let arrayNumber = array[i];

    let process = `current ${currentNumber} :  array: ${arrayNumber}`
    
    if (arrayNumber > currentNumber) {
      currentNumber = arrayNumber;
      checkStatus = '✅';
    } else {
      checkStatus = "❌";
    }

    process += ` : ${checkStatus}`;

      if (isShowProcess) {
        console.log(process) 
      } else {
        null;
      }  
    }

    const result = `The biggest number in this array is ${currentNumber} out of ${array.length}`;
    console.log(result);
}


console.clear();
biggestNum();

