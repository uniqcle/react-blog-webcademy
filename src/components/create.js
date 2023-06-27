import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const clearForm = () => {
        setTitle('');
        setBody('');
        setAuthor('')
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title, body, author
        }

        setIsPending(true)

        setTimeout(() => {

            fetch('http://localhost:8000/posts', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newPost)
            }).then(() => {
                console.log('new post was added')
                setIsPending(false)

                clearForm();

                navigate('/')
            })

        }, 3000)
    }

    return (
        <div className="create">
            <h2>Add new post</h2>

            <form onSubmit={handleSubmit}>
                {author}
                <label > Post Title </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label > Content </label>
                <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>

                <label > author </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="">Выбрать</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer" > Tom Soyer</option>
                </select>

                {isPending && <button disabled>adding post...</button>}
                {!isPending && <button>create post</button>}

            </form>
        </div>
    );
}

export default Create;