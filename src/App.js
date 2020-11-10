import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey="348d9f5311b75a63cf7904e9f3392aa12e956eca572e1d8b807a3e2338fdd0dc/stage";

const App=() => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command}) => {
                if(command==='testCommand') {
                    alert("This works");
                }
            }
        })
    },[]);

    return (
        <div>
            <h1>App</h1>
        </div>
    );
}

export default App;