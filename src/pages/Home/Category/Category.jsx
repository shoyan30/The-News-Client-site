// import React from 'react';

import { useLoaderData } from "react-router-dom";
import NewsCard from "../Home/NewsCard/NewsCard";


const Category = () => {
    // const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            {/* <h2>The Category News:{categoryNews.length}</h2> */}
            {
                categoryNews.map(news => <NewsCard
                key={news.key}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;