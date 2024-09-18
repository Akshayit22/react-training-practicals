import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike,BiDislike } from "react-icons/bi";

function Card({data,error}:any) {

    // console.log(data);
    const targetAccount = 123;

    if(error){
        throw new Error("Some Error !!!");
    }
    return (
        <>
            {
                data &&
                (
                    <div className='flex flex-col p-2 m-2 border-white border-2 rounded-md w-[80vw] md:w-[30vw] space-y-4'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className="text-sm font-semibold text-richblack-10">{data.body.substring(0, 90)}<span>{data.body.length > 90 ? ". . ." : ""}</span></p>

                        <div className='flex flex-wrap'>
                            <p>Tages:</p>
                            {
                                data.tags.map((tag: string,index: React.Key | null | undefined)=>
                                    <span key={index} className='bg-gray-600 px-1 m-2 text-xs rounded-md'>{tag + " "}</span>
                                )
                            }
                        </div>
                        
                        <div className='flex justify-between m-2 space-x-2'>
                            <div className='flex flex-row space-x-2'>
                                <BiLike className='text-2xl'/>
                                <span>{data.reactions.likes}</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <BiDislike className='text-2xl'/>
                                <span>{data.reactions.dislikes}</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <MdOutlineRemoveRedEye className='text-2xl'/>
                                <span>{data.views}</span>
                            </div>
                        </div>

                        {
                            data.userId === targetAccount && 
                            (
                                <div className="space-x-4 p-2 justify-end">
                                    <button className='p-2 bg-gray-500 rounded-md'> Edit</button>
                                    <button className='p-2 bg-gray-500 rounded-md'> Delete</button>
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

