import styles from "../style/style.module.css"
import { useState } from "react"


export const Search = ({ handleSearch }) => {
    const [search, setsearch] = useState("")
    const [select, setSelect] = useState(null)

    const handleClick = () => {
        let payload = {
            search,
            select
        }
        if (search || select) {

            handleSearch(payload)
            setSelect("")
            setsearch("")
        }

    }

    return <>
        <div className={styles.search}>
            <div>

                <input type="search" name="input" id="input" placeholder="Job title or keyword" onChange={(e) => setsearch(e.target.value)} value={search} />
                <select name="select" id="select" onChange={(e) => setSelect(e.target.value)}  >
                    <option value=""> Select loction</option>
                    <option value="Berlin, Germany"> Berlin, Germany</option>
                    <option value="Bangalore, India"> Bangalore, India</option>
                    <option value="Delhi, India"> Delhi, India</option>

                </select>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>

    </>
}