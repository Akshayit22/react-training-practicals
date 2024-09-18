import { useEffect, useState } from 'react';
import data from '../data/post.json';
import Card from './Card';


function Posts() {

    const [posts, setPost] = useState([]);

    // console.log(posts);

    useEffect(()=>{
        setPost(data.posts);
    },[])

    return (
            <div>
                {
                    posts?
                    (
                        <div>
                            <h2>Total Posts : {posts.length}</h2>
                            <div >
                            {
                                posts.length > 0 && (

                                    <div className=''>
                                        {
                                            posts.map((post:any,index:number)=>
                                                <Card key={index} data={post}></Card>
                                            )
                                        }
                                    </div>

                                )
                            }
                            </div>
                        </div>
                    )
                    :(
                        <div>
                            <h1>data not found</h1>
                        </div>
                    )
                }

            </div>
    )
}

export default Posts;
