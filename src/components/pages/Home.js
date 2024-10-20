import { useEffect, useState } from "react"
import styles from "./Home.module.css"

function Home() {
    const [text, setText] = useState("teste")

    function getWord(){

        fetch("https://api.api-ninjas.com/v1/randomword", {
            method: "GET",
            headers: {
                'X-Api-Key': '9RbaL5Ton+JVija+kr+8Hg==cHLTEVmRbPthKlWN',
                "Content-type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then((data) => {
                setText(data.word[0])
            })
            .catch((err) => console.log(err))

    }


    return (
        <div className={styles.page}>
            <div className={styles.calculator}>

                <p onClick={getWord}>{text}</p>

            </div>
        </div>
    )
}

export default Home