import React from 'react'

function Card({data}:any) {

    // console.log(data);
    const targetAccount = 123;

    return (
        <>
            {
                data &&
                (
                    <div className='card'>
                        <span>{"userId: "+data.userId +  "   Id: " +  data.id}</span>
                        Tags: {
                            data.tags.map((tag: string,index: React.Key | null | undefined)=>
                                    <span key={index}>{tag + " "}</span>
                            )
                        }
                        {
                            data.userId === targetAccount && 
                            (
                                <div>
                                    <button> Edit</button>
                                    <button> Delete</button>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default Card;

// {
//     "id": 1,
//     "title": "His mother had always taught him",
//     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//     "tags": ["history", "american", "crime"],
//     "reactions": {
//       "likes": 192,
//       "dislikes": 25
//     },
//     "views": 305,
//     "userId": 121
// }