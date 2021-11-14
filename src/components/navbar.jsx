
import styles from "../style/style.module.css"
export const Navbar = () => {



    return <>
        <div className={styles.navbar}>
            <div className={styles.list}>

                <ul>
                    <li>JobHunt</li>
                    <li>Find Jobs</li>
                    <li>Upskill Yourself</li>
                </ul>
                <ul>
                    <li>Post a job</li>
                    <li>Sign in</li>

                </ul>
            </div>
            <div className={styles.punchLine}>
                <h1>Find Your Dream Job</h1>
                <p>Browse through thousands of a full-time or part-time jobs near you</p>
            </div>

        </div>

    </>
}