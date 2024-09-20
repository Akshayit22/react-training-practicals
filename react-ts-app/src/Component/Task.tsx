import { useEffect, useState } from "react";

function Task() {

    const [data,setData] = useState<any>();
    const [search,setSearch] = useState<any>();

    const fetchData = async() =>{
        console.log("fetchData");
        const url:string = "https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user";

        try{
            const response = await fetch(url);
            const dataArray = await response.json();
            
            // console.log("All Data --> ", dataArray);
            setData(dataArray);

            dataArray.forEach((element: any) => {
                if(element.id === "8"){
                    setSearch(element);
                    return;
                }
            });

        }
        catch(error){
            console.log("error: ", error);
        }

    }

    useEffect(()=>{
        fetchData();
    },[]);


  return (
    <div>
        <h2>Task</h2>

        <div>
                
                <div>
                    
                    {
                        search?(
                            <div >
                                <span>{search.id}</span>
                                <span>{search.name}</span>
                                <span>{search.avatar}</span>
                            </div>
                        ):
                        (
                            <div>Data Not Found</div>
                        )
                    }
                </div>
                <div>
                    <h3>Data From API</h3>
                    {
                        data?.length > 0 && (

                            <div>
                                {
                                    data.map((obj:any,index:number)=>
                                        <div key={index} >
                                            <span>{obj.id}</span>
                                            <span>{obj.name}</span>
                                            <span>{obj.avatar}</span>
                                        </div>
                                    )
                                }
                            </div>

                        )
                    }
                </div>
        </div>

    </div>
  )
}

export default Task;