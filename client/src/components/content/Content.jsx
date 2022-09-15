import "../../style/Content.css"
import Card from "../utility/Card"
import { useState, useEffect } from "react"
import axios from "axios"
import Figures from "./Figures"

export default function Content() {
    const [productData, setProductData] = useState([])
    const [btnSelected, setBtnSelected] = useState("res")

    useEffect(() => {
        reset()
    }, [])
    
    const ascending = async () => {
        await axios.get("http://localhost:5000/products/quicksort").then((res) => {
            setProductData(res.data)
        })
    }

    const reset = async () => {
        await axios.get("http://localhost:5000/products/").then((res) => {
            setProductData(res.data)
        })
    }

    const descending = async () => {
        await axios.get("http://localhost:5000/products/quicksortdes").then((res) => {
            setProductData(res.data)
        })
    }

    const selectedBtn = (e) => {
        setBtnSelected(e.target.value)
    } 

    const styles = {
        border: `2px solid black`,
        padding: `1em 2em`,
        display: `flex`,
        margin: `0em 2em`,
        width: `80em`,
        height: `40em`,
        marginInline: `auto`,
        fontSize: `24px`,
        radius: `25px`,
    }

    return (
        <>
            <Card {...styles}>
                <div className="content-main">
                    <div>
                        {productData.map((item, idx) => (
                            <Figures key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </Card>
            <div className="content-btns">
            <button value="asc" className={btnSelected === "asc" ? "btn-selected" : ""} onClick={ascending} onClickCapture={selectedBtn}>Ascending</button>
            <button value="res" className={btnSelected === "res" ? "btn-selected" : ""} onClick={reset} onClickCapture={selectedBtn}>Reset</button>
            <button value="dsc" className={btnSelected === "dsc" ? "btn-selected" : ""} onClick={descending} onClickCapture={selectedBtn}>Descending</button>
            </div>
        </>
    )
}
