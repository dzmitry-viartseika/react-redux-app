import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    return (
        <div>
            { posts.length ?
                posts.map(post => (
                    <Post
                        key={post}
                        post={post}
                    />
                ))
                : <p className={'text-center'}>
                    Постов пока нету
                </p>
            }
        </div>
    )
};

export default Posts;