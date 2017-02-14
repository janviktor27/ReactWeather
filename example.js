// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });

// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     },2000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success',temp);
// }, function (err){
//   console.log('promise.error',err);
// });
// 
// function addPromise(a,b){
//   return new Promise(function (resolve, reject){
//     if(typeof a === 'number' && typeof b === 'number'){
//       resolve(a * b);
//     }else{
//       reject('Its not a number');
//     }
//   });
// }
// var num1 = 2;
// var num2 = 1231324234;
// addPromise(num1,num2).then(function(sum){
//     console.log('Promise success',sum);
//   },
//   function (err){
//     console.log('Promise errno',err);
// });
