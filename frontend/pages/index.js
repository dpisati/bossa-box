import Head from 'next/head';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

import Card from '../components/Card';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchForTags, setSearchForTags] = useState(false);

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  
  
  const [addModal, setAddModal] = useState(false);

  async function fetchPosts() {
    const res = await fetch("http://localhost:3000/tools");
    const data = await res.json();
    setPosts(data);
  }

  async function fetchFilteredPosts() {
    if(!searchForTags) {
      const res = await fetch(`http://localhost:3000/tools?q=${searchInput}`);
      const data = await res.json();
      setPosts(data);
    } else {
      const res = await fetch(`http://localhost:3000/tools?tags_like=${searchInput}`);
      const data = await res.json();
      setPosts(data);
    }
  }

  function handleAddTag() {
    const trimTag = tag.trim()
      if(trimTag) {
      setTags([...tags, trimTag])
      setTag('');
    }
    return;
  }

  const handleOnChange = (event) => {
    setSearchInput(event);
  };

  function handleSubmit(event) {
    console.log(`
      name ${name},
      link ${link},
      desc ${description},
      tags ${tags}
    `)
    event.preventDefault();
    console.log('A name was submitted: ' + {event});
  }

  function handleCloseModal() {
    setAddModal(false);
    setName('');
    setDescription('');
    setLink('');
    setTags([]);
  }

  function handleRemoveTag(e) {
    console.log(e);
    const result = tags.filter(word => word != e);
    setTags(result);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => 
      fetchFilteredPosts()
      , 500);
    return () => clearTimeout(timeoutId);
  }, [searchInput, searchForTags]);

  useEffect(() => {
    fetchPosts();
  }, [])

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
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="47.707" height="47.707" viewBox="0 0 47.707 47.707" style={{fill:"none", stroke: "#170c3a", strokeMiterlimit: 10, strokeWidth: "2px", width: "20px", height: "20px"}}><defs></defs><g transform="translate(-1272 -1799)"><path className="a" d="M39.049,39.049,56,56" transform="translate(1263 1790)"/><circle className="a" cx="17" cy="17" r="17" transform="translate(1273 1800)"/></g></svg>
            <input className={styles.searchInput} type="text" placeholder="search" value={searchInput} onChange={(e) => handleOnChange(e.target.value)}></input>
            <input type="checkbox" value={searchForTags} onChange={() => setSearchForTags(!searchForTags)}/>
            <label className={styles.searchLabel}>search in tags only</label>
          </div>
          
          <button className={styles.addButton} onClick={() => setAddModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="61.414" height="61.42" viewBox="0 0 61.414 61.42" style={{fill:"none", stroke: "#FFFFFF", strokeMiterlimit: 10, strokeWidth: "10px", transform: "rotate(45deg)", width: "15px", height: "15px"}}><defs></defs><g transform="translate(-568.793 -714.793)"><path className="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/></g></svg>
            <label className={styles.addLabel}>Add</label>
          </button>
          
        </div>

        { !posts.length == 0 
        
          ? (
            posts.map(post => {
              return (
                <Card key={post.id} content={post}/>
              )
            })) 
          : (
            <div className={styles.noPosts}>
              <Image src="/notFound.png" alt="Not Found" width="370" height="300" />
              <h2 className={styles.notFound}>Ooops, no posts found...</h2>            
            </div>
          ) 
        }


        { addModal && ( 
          <div className={styles.modal}>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalTitle}>Add a new tool</h3>
                  <svg className={styles.closeModal} onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" width="13.414" height="13.415" viewBox="0 0 13.414 13.415" style={{fill: "none", stroke: "#8f8a9b", strokeMiterlimit: 10, strokeWidth: "2px"}}><defs></defs><path className="a" d="M32,20,20,32m12,0L20,20" transform="translate(-19.292 -19.293)"/></svg>
                </div>
                <div className={styles.modalContent}>
                  <label className={styles.modalLabel}>Tool Name</label>
                  <input className={styles.modalInput} type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                  <label className={styles.modalLabel}>Link</label>
                  <input className={styles.modalInput} type="text" value={link} onChange={(e) => {setLink(e.target.value)}}/>
                  <label className={styles.modalLabel}>Description</label>
                  <textarea className={styles.modalInputTextArea} type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                  <label className={styles.modalLabel}>Tags</label>
                  <div className={styles.addTags}>
                    <input className={styles.modalInput} type="text" value={tag} onChange={(e) => {setTag(e.target.value)}}/>
                    <div onClick={() => handleAddTag()} className={styles.addTagField}>
                      <svg className={styles.addTag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.414 61.42"><g transform="translate(-568.793 -714.793)"><path className="addTag" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/></g></svg>
                    </div>
                    <p>
                    <div className={styles.tagsContainer}>
                      {tags && tags.map(tag => {
                        return (                          
                            <div className={styles.tag} value={tag} onClick={() => handleRemoveTag(tag)}>
                              <p>{tag}</p>
                              <svg className={styles.removeTag} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13.414 13.415" style={{fill: "none", stroke: "#8f8a9b", strokeMiterlimit: 10, strokeWidth: "2px"}}><defs></defs><path className="a" d="M32,20,20,32m12,0L20,20" transform="translate(-19.292 -19.293)"/></svg>
                            </div>                            
                          )  
                        })}
                      </div>
                    </p>
                  </div>
                </div>

                <footer className={styles.modalFooter}>
                  <button className={styles.cancelButton} onClick={handleCloseModal}>Cancel</button>  
                  <button className={styles.saveButton} type="submit" value="Submit">Save</button>  
                </footer>     
              </div>
            </form>
          </div>
        )}


        
      </main>
    </div>
  )
}
