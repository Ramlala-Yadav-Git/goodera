
import styles from "../style/style.module.css"
export const Jobs = ({ img, title, description, id }) => {


    return <>
        <div className={styles.jobs}>
            <div className={styles.image}>
                <img src={img} alt="jobimage" />
            </div>
            <div className={styles.disc}>
                <h3>{title} </h3>
                <p>{description} </p>
                <button>View Details</button>
            </div>


        </div>
    </>
}