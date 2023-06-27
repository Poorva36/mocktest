// question-1 ------Move Zeroes

const moveZero = function(num){
    let index = 0
    for(let i =0; i<num.length; i++){
        if(num[i]!=0){
            num[index] = num[i]
            index++
        }
    }
    for(let i = index; i<num.length; i++){
        num[i] = 0
    }
    console.log(num);
}
let arr = [0,1,0,3,12]
moveZero(arr)


// question-2 

const unique = function(string){
    let arr = string.split('')
    for(let i =0; i<arr.length; i++){
        let character = arr[i]
        arr.splice(i,1)

        if(arr.includes(character)){
            arr.splice(i,0,character)
        }
        else{
            return i;
        }
    }
    return -1;

    
}
console.log(unique('leetcode'))
console.log(unique( "loveleetcode"))
console.log(unique( "aabb"))
