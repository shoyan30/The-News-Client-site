// import React from 'react';

import { useLoaderData } from "react-router-dom";
import NewsCard from "../Home/NewsCard/NewsCard";

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
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