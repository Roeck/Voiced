import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey=
	'348d9f5311b75a63cf7904e9f3392aa12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=() => {
	const [newsArticles,setNewsArticles]=useState([]);
	const [activeArticle,setActiveArticle]=useState(-1);
	const classes=useStyles();

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({command,articles}) => {
				if(command==='newHeadLines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} else if(command==='highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
				}
			}
		});
	},[]);

	return (
		<div>
			<div className={classes.logoContainer}>
				<img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
		</div>
	);
};

export default App;
