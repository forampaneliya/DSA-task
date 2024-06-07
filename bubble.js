let arr=[10,8,15,9,56];

for(let i=0; i<arr.length;i++)
    {
        for(let j=0; j<arr.length;j++)
            {
                // console.log(arr);
                if(arr[j]>arr[j+1])
                    {
                        let flag=true;

                        if(flag=true)
                            {
                                let temp=arr[j];
                                arr[j]=arr[j+1];
                                arr[j+1]=temp;
                            }
                            // else{
                            //     flag=false;
                            //     break;
                            // }
                            
                       
                    }
                    
                   
                    // console.log(arr);
                   
                
            }
            // console.log(arr);
    }
    console.log(arr);