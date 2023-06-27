const deletePost = (id, callback) => {
    fetch(' http://localhost:8000/posts/' + id, {
        method: "DELETE"
    }).then(() => {
        if (typeof callback === 'function') {
            callback();
        }
    })
}

export default deletePost