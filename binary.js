let arr=[10,20,25,28,35,65,74,85,90,91,99];
let ele=28;

function binary(arr,first,last,ele)

{

  if(last>=first)
    {
        let mid=Math.floor((first+last)/2)

        if(arr[mid]==ele)
            {
                return true;
            }
            if(arr[mid]>ele)
                {
                    return binary(arr,mid-1,first,ele)
                }
                else{

                    return binary(arr,mid+1,last,ele)

                }
            


    }
    return false;
}
let ans=binary(arr[0],arr.length,ele);
console.log(ans);