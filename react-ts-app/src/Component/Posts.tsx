import { lazy, Suspense, useEffect, useState } from 'react';
import data from '../data/post.json';
// import Card from './Card';
import ErrorBoundary from '../Concepts/ErrorBoundary';

const Card = lazy(() => import('./Card'));

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
                            <h1>Total Posts : {posts.length}</h1>
                            <div className='flex flex-row'>
                            {
                                posts.length > 0 && (

                                    <div className='flex flex-wrap justify-center' >
                                        {
                                            posts.map((post:any,index:number)=>
                                                <Suspense key={index}>
                                                    <ErrorBoundary>
                                                        <Card key={index} data={post} error={false}></Card>
                                                    </ErrorBoundary>
                                                </Suspense>
                                                
                                                
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
