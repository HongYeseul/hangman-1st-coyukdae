import React, { useEffect, useState } from "react";
import { randomWord } from "./RandomWord";
import ConfettiExplosion,  { ConfettiProps } from 'react-confetti-explosion';
import "./Hangman.css"

import img0 from "./imgs/hangman-1.jpg";
import img1 from "./imgs/hangman-2.jpg";
import img2 from "./imgs/hangman-3.jpg";
import img3 from "./imgs/hangman-4.jpg";
import img4 from "./imgs/hangman-5.jpg";
import img5 from "./imgs/hangman-6.jpg";
import img6 from "./imgs/hangman-7.jpg";
import img7 from "./imgs/hangman-8.jpg";
import img8 from "./imgs/hangman-9.jpg";

const largeProps= {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 3000,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};

export default function Hangman(){

    const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8]
    let [정답, 정답변경] = useState();
    let [추측알파벳, 추측알파벳추가] = useState(new Set());
    let [알파벳맞췄을때reload, 알파벳맞췄을때reload변경] = useState(0);

    let [틀린횟수, 틀린횟수변경] = useState(0)
    let [단어선택번호, 단어선택번호변경] = useState(-1);

    const [isExploding, setIsExploding] = useState(false);
    
    // resetGame(){
    //     this.setState({
    //         nWrong: 0
    //     })
    // }
    function ABCbuttonClick(abc){
        let 알파벳배열 = 정답.split("")
        추측알파벳추가(추측알파벳.add(abc));
        if(!알파벳배열.includes(abc)){
            틀린횟수변경(틀린횟수+1);
        }
        알파벳맞췄을때reload변경(알파벳맞췄을때reload+1)
        btnDisabled(abc)
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
            onClick={(e)=>ABCbuttonClick(abc)}
            className="button btnPush btnBlueGreen"
            >
            {abc}
            </button>
        ))
    }

    function selectWordBtnClick(index){
        단어선택번호변경(index)
        let arr = [randomWord(), randomWord(), randomWord()]
        정답변경(arr[index])
    }

    function selectWord(){
        return "abc".split("").map((abc, index) => (
            <button
            key={index}
            value={index}
            id={"btn_"+index}
            onClick={(e)=>selectWordBtnClick(index)}
            className="button btnPush btnBlueGreen"
            >
            {index+1}
            </button>
        ))
    }

    function setConfetti(){
        
    }

    return(
        <div className="hangman">
            <h1>Hangman</h1> 
            <img src={images[틀린횟수]} style={{width:"30%"}}></img>
            {
                단어선택번호 < 0 ?
                    <div className="select-word">
                        <p>단어를 선택하세요!</p>
                        <p>{selectWord()}</p>
                    </div>
                    :
                정답 === guessedWord().join("") ? 
                    <div>
                        <p> <h1>성공! </h1> </p>
                        <p> <h3>정답: {정답}</h3> </p>
                            { <div className="confetti">
                                <ConfettiExplosion {...largeProps} />
                            </div> 
                            }
                    </div>
                :

                (틀린횟수 === 8 ?
                    <div>
                    <p> <h1>실패!</h1> </p>
                    <p> <h3>정답: {정답}</h3> </p>
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