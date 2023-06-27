import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../useFetch';
import deletePost from '../deletePost';


const BlogDetail = () => {
    const { id } = useParams();
    const { data: post, isLoading, error } = useFetch(' http://localhost:8000/posts/' + id)
    const navigate = useNavigate();

    const afterDelete = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">

            {error && <div>{error}</div>}

            {isLoading && <div>Loading...</div>}

            {post && (
                <>
                    <article>
                        <h2>{post.title}</h2>
                        <p className="author">{post.author}</p>
                        <p className="blog-body">{post.body}</p>
                    </article>
                    <button onClick={() => { deletePost(post.id, afterDelete) }}>delete post</button>
                </>
            )}
        </div>
    );
}

export default BlogDetail;