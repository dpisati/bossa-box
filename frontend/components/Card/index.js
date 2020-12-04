import styles from './Card.module.css'

export default function Card({ content }) {
    return(
        <fieldset className={styles.card}>
            <div className={styles.cardHeader}>
                <h3>{content}</h3>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="61.414" height="61.42" viewBox="0 0 61.414 61.42" style={{fill:"none", stroke: "#170c3a", strokeMiterlimit: 10, strokeWidth: "2px", width: "20px", height: "20px"}}><defs></defs><g transform="translate(-568.793 -714.793)"><path class="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/></g></svg>
                    Remove
                </button>
            </div>
            <p className={styles.cardContent}>All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.</p>
            <ul className={styles.tags}>
                <li>organization</li>
                <li>planning</li>
                <li>collaboration</li>
                <li>writing</li>
                <li>calendar</li>            
            </ul>
        </fieldset>
    )
}