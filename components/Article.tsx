import React, { useEffect, useState} from 'react';
import { News } from '../types/News';
import { Button } from '@mui/material';
import styles from './GameDisplay.module.css'
import { motion, AnimatePresence } from "framer-motion"

interface ArticleProps extends News {
}

const Article: React.FC<ArticleProps> = (props) => {
   const {title, url, source} = props;
    
   return(
    <div className={styles.main} style={{marginBottom: '7px', borderRadius: '10px', }}>
        <div className={styles.row_container} style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '20px', paddingLeft: '30px', width: '100%'}}>
            <div className={styles.game_display}style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between',}}>
                <a href={url} style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{title}</a>
                <div style={{fontSize:'14px', fontWeight:'400'}}>
                   {source} 
                </div>
            </div>
        </div>
        
    </div>
    ); 
};

export default Article;

