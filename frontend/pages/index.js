import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title >VUTTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="47.707" height="47.707" viewBox="0 0 47.707 47.707" style={{fill:"none", stroke: "#170c3a", strokeMiterlimit: 10, strokeWidth: "2px", width: "20px", height: "20px"}}><defs></defs><g transform="translate(-1272 -1799)"><path class="a" d="M39.049,39.049,56,56" transform="translate(1263 1790)"/><circle class="a" cx="17" cy="17" r="17" transform="translate(1273 1800)"/></g></svg>
            <input className={styles.searchInput} type="text" placeholder="search"></input>
            <input type="checkbox" />
            <label className={styles.searchLabel}>search in tags only</label>
          </div>
          
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="61.414" height="61.42" viewBox="0 0 61.414 61.42" style={{fill:"none", stroke: "#170c3a", strokeMiterlimit: 10, strokeWidth: "2px", transform: "rotate(45deg)", width: "20px", height: "20px"}}><defs></defs><g transform="translate(-568.793 -714.793)"><path class="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/></g></svg>
            Add</button>
          
        </div>
        
        <Card content={"Hello"}/>
        <Card content={"Oi"}/>
        <Card content={"Tchau"}/>

      </main>
    </div>
  )
}
