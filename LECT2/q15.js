let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let a=""
for(i=matrix.length-1; i>0; i--){
    for(j=0; j<matrix.length-2; j++){
      a+=matrix[i][j]+" "
  }
}

let b=""
for(i=0; i<matrix.length-2; i++){
  for(j=0; j<=matrix.length-2; j++){
    b+=matrix[i][j]+" "
  }
}

let c=""
for(i=0; i<=matrix.length-2; i++){
  for(j=matrix.length-1; j<=matrix.length-1; j++){
    c+=matrix[i][j]+" "
  }
}

let d=""
for(i=matrix.length-1; i<=matrix.length-1; i++){
  for(j=matrix.length-1; j>0; j--){
    d+=matrix[i][j]+" "
  }
}

console.log(a+b+c+d)
