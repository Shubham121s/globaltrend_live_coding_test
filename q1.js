// longest common subsequence


function longestcommonsubsequence(str1,str2){
    const m = str1.length;
    const n = str2.length;


    const dp = Array(m+1).fill().map(()=>Array(n+1).fill(0));

    for (let i =1; i<=m;i++){
        for(let j=1;j<=n;j++){
            if(str1[i-1]===str2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }else{
                dp[i][j] =Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }

    let lcs ='';
    let i=m,j=n;
    while(i>0 && j>0){
        if(str1[i-1]===str2[j-1]){
            lcs =str1[i-1]+ lcs;
            i--;
            j--;
        }else if(dp[i-1][j]>dp[i][j-1]){
            i--;
        }else{
            j--;
        }
    }
    return lcs;
}


const str1="abcde";
const str2="ace"
console.log(longestcommonsubsequence(str1,str2))