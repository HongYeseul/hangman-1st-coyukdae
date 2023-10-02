import React, { useState } from "react";


export default function Hangman(){

    const hangmanImgs = {
        maxWrong: 6,
        imgs: [0, 1, 2, 3, 4, 5, 6]
    }
    let [정답, 정답변경] = useState('hello');
    let 추측알파벳 = new Set();

    let [행맨상태, 행맨상태변경] = useState(0);
    let [틀린횟수, 틀린횟수변경] = useState(0)
    
    // resetGame(){
    //     this.setState({
    //         nWrong: 0
    //     })
    // }
    function ABCbuttonClick(abc, props){
        btnDisabled(abc)
        let 알파벳배열 = 정답.split("")
        guessWord(알파벳배열, abc)
        props.행맨상태변경(abc)
        console.log("click", abc)
    }

    function guessedWord() {
        return 정답
        .split("")
        .map(ltr => (추측알파벳.has(ltr) ? ltr : " _ "));
    }

    function generateButtons(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map((abc, index) => (
            <button
            key={index}
            value={abc}
            id={"btn_"+abc}
            onClick={(e)=>ABCbuttonClick(abc, 행맨상태변경={행맨상태변경})}
            >
            {abc}
            </button>
        ))
    }

    return(
        <div className="hangman">
            <h1>Hangman</h1>
            <h1>{행맨상태}</h1>

            { 정답 === guessedWord().join("") ? <p>You WIN!</p> :

            (틀린횟수 === 8 ?
            <div>
            <p>YOU LOSE </p>
            <p>Correct Word is: {정답}</p>
            </div>
            :
                <div>
                    <p className="hangman-word">{guessedWord()}</p>
                    <p className="hangman-btns">{generateButtons()}</p>
                </div>
                
            
            
            )
            }

        </div>
    );
}
function btnDisabled(abc)  {
    const target = document.getElementById('btn_'+abc);
    target.disabled = true;
}


function guessWord(알파벳배열, abc){
    if(알파벳배열.includes(abc)){

    }
}

function handleGuess(evt) {
    let ltr = evt.target.value;

        this.setState(st => ({
        guessed: st.guessed.add(ltr),
        nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
}