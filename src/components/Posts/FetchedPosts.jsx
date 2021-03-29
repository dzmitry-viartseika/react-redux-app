import React from 'react';
import Post from "./Post";

const FetchedPost = ({posts}) => {
    return (
        <div>
            {
                posts.length ?
                    <div className="card">
                        <div className="card-body">
                            {
                                posts.map(post => (
                                    <Post
                                        key={post}
                                        post={post}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    : <button className={'btn btn-primary'}>
                        Загрузить
                    </button>
            }
        </div>
    )
};

export default FetchedPost;