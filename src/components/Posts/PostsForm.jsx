import React, { useState } from 'react';

const PostsForm = () => {
    const [value, setValue] = useState(0);

    const submitHandler = event => {
        event.preventDefault();
    };

    const changeValueHandler = event => {
        setValue(prev => {
            return {
                value: event.target.value
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label
                    htmlFor="Title"
                    className="form-label"
                >
                    Заголовок поста
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                />
            </div>
            <button
                className={'btn btn-success'}
            >
                Добавить
            </button>
        </form>
    )
};

export default PostsForm;