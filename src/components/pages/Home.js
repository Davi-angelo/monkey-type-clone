import { useState } from "react"
import styles from "./Home.module.css"

function Home() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const [text, setText] = useState("teste")


    function getWord(){

        fetch("https://api.api-ninjas.com/v1/randomword", {
            method: "GET",
            headers: {
                'X-Api-Key': API_KEY,
                "Content-type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then((data) => {
                setText(data.word[0])
            })
            .catch((err) => console.log(err))

    }

    function changeText(){
        const changedText = document.getElementById("textArea").value
        let newText = text
        
        setText(newText[0]) 
    }

    function geraDiv(text){
        let i = 0
        let letterList = []
        for(i; i < text.length; i++){
            letterList.push(<letter key={i}>{text[i]}</letter>)
        }
        return letterList
    }


    return (
        <div className={styles.page}>
            <div className={styles.calculator}>

                <textarea id="textArea" autoFocus onInput={changeText}>
                    
                </textarea>

                <p onClick={getWord}>{text}</p>

                <div>
                    {
                        geraDiv(text)
                    }
                </div>
                

            </div>
        </div>
    )
}

export default Home