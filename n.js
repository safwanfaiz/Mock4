function runProgram(input) {
    let ip=input.trim().split("\n");
    let size=+ip[0];
    let l=1;
    for(let i=0;i<size;i++){
        let N=+ip[l++].trim()
        
        let c=[1,2,5,10,20,50,100,500,1000]
        let length=c.length
        coins(N,c,length)
    }
}

function coins(N,c,l){
    
    c=c.reverse()
    
    let cnt=0;
    for(let n=0;n<l;n++){
        let div=Math.floor(N/c[n]);
        cnt+=div
        N=N%c[n]
    }
   
    console.log(cnt)
}