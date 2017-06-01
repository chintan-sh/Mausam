/**
 * Created by chintan on 6/1/17.
 */
function addPromise(a,b){
    return new Promise(function (resolve, reject) {
        if( typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        reject("Invalid numbers provided");
    })
}

addPromise(5,6).then(function(output){
    console.log("Success", output);
}, function(err){
    console.log("Failed", err);
});