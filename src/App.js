import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey="348d9f5311b75a63cf7904e9f3392aa12e956eca572e1d8b807a3e2338fdd0dc/stage";

const App=() => {
    const [newsArticles,setNewsArticles]=useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command,articles}) => {
                if(command==='newHeadLines') {
                    setNewsArticles(articles);
                }
            }
        })
    },[]);

    return (
        <div>
            <h1>App</h1>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;