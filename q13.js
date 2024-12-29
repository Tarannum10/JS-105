let count=0
let arr = [36,40,85,91,76,23,99,88,50,46]
for(i=0; i<arr.length; i++){
    if(arr[i]<40){
        arr[i]=arr[i]+20
    }else if(arr[i]>90){
        arr[i]=90
    }
    if(arr[i]>50){
        count++
    }console.log(arr[i])
}console.log(count)
    