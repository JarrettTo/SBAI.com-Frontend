import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { News } from '../types/News';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './news.module.css'
import Article from '@components/Article';
import Pagination from '@components/Pagination';

const NewsPage = ({news, currentPage, pageSize}) => {

    const sourceMap = {
        "nba": "NBA", 
        "nba_canada": "NBA Canada",
        "espn": "ESPN",
        "bleacher_report": "Bleacher Report",
        "slam": "Slam",
        "yahoo": "Yahoo",
    }
    
    const displayedArticles = news.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    

    return (           
        <div >
            {
                displayedArticles?.map((article) => (
                
                <Article 
                    title={article.title} 
                    url={article.url}
                    source={sourceMap[article.source] || article.source}
                />
            ))
            }
        </div>
    )
};
export default NewsPage;