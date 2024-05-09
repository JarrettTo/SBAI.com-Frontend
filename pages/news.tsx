import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { News } from '../types/News';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './news.module.css'
import Article from '@components/Article';
import Pagination from '@components/Pagination';
import NavBar from '@components/Navbar';

const NewsPage: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const sourceMap = {
        "nba": "NBA", 
        "nba_canada": "NBA Canada",
        "espn": "ESPN",
        "bleacher_report": "Bleacher Report",
        "slam": "Slam",
        "yahoo": "Yahoo",
    }
    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/get_news',{
                params: {
                    },
                });
            setNews(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
        console.log(news);
    }, []);

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    const displayedArticles = news.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    

    return (

        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <NavBar/>
            <div style={{width: '80%', marginBottom: '20px'}}>
                <Paper component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', }}>
                <InputBase value={searchInput} onChange={handleSearch} sx={{ ml: 1, flex: 1 }} placeholder="Search for an Article" inputProps={{style: {fontFamily: 'Inter, sans-serif', fontSize: '14px', }, 'aria-label': 'search for a team' }}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                </Paper>
            </div>
            <div className={styles.game_display}>
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
            <Pagination
                totalCount={news.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </div>
    )
};
export default NewsPage;