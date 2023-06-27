import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import useFetch from '../useFetch';

const Main = () => {


    const [updateFlag, setUpdateFlag] = useState(false);
    const { data, isLoading, error } = useFetch(' http://localhost:8000/posts', updateFlag)

    return (



        <div className="blogList">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}

            {console.log(data)}

            {data && <BlogList
                posts={data}
                updateFlag={updateFlag}
                setUpdateFlag={setUpdateFlag}
            />}



        </div >


    );
}

export default Main;