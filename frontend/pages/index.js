import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

import Card from "../components/Card";

export default function Home() {
  const tagInput = useRef(null);
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchForTags, setSearchForTags] = useState(false);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const [addModal, setAddModal] = useState(false);

  function handleFocus() {
    tagInput.current.focus();
  }

  async function fetchPosts() {
    const res = await fetch("http://localhost:3000/tools");
    const data = await res.json();
    setPosts(data);
  }

  function handlePostRemoved() {
    fetchPosts();
  }

  async function fetchFilteredPosts() {
    if (!searchForTags) {
      const res = await fetch(`http://localhost:3000/tools?q=${searchInput}`);
      const data = await res.json();
      setPosts(data);
    } else {
      const res = await fetch(
        `http://localhost:3000/tools?tags_like=${searchInput}`
      );
      const data = await res.json();
      setPosts(data);
    }
  }

  function handleAddTag() {
    const trimTag = tag.trim();
    if (trimTag) {
      handleFocus();
      setTags([...tags, trimTag]);
      setTag("");
    }
    return handleFocus();
  }

  const handleOnChange = (event) => {
    setSearchInput(event);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const addTool = await fetch("http://localhost:3000/tools", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        link,
        description,
        tags,
      }),
    });
    console.log(addTool);
    fetchPosts();
    handleCloseModal();
  }
  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   if (
  //     title.length === 0 ||
  //     link.length === 0 ||
  //     description.length === 0 ||
  //     tags.length === 0
  //   ) {
  //     return console.log("not true", title, link, description, tags);
  //   } else {
  //     const addTool = await fetch("http://localhost:3000/tools", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         title,
  //         link,
  //         description,
  //         tags,
  //       }),
  //     });
  //     console.log(addTool);
  //     fetchPosts();
  //     handleCloseModal();
  //   }
  // }

  function handleCloseModal() {
    setAddModal(false);
    setTitle("");
    setDescription("");
    setLink("");
    setTag("");
    setTags([]);
  }

  function handleRemoveTag(e) {
    console.log(e);
    const result = tags.filter((word) => word != e);
    setTags(result);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchFilteredPosts(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchInput, searchForTags]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>VUTTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${addModal && styles.modalIsOpen}`}>
        <h1 className={styles.title}>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="47.707"
              height="47.707"
              viewBox="0 0 47.707 47.707"
              style={{
                fill: "none",
                stroke: "#170c3a",
                strokeMiterlimit: 10,
                strokeWidth: "2px",
                width: "20px",
                height: "20px",
              }}
            >
              <defs></defs>
              <g transform="translate(-1272 -1799)">
                <path
                  className="a"
                  d="M39.049,39.049,56,56"
                  transform="translate(1263 1790)"
                />
                <circle
                  className="a"
                  cx="17"
                  cy="17"
                  r="17"
                  transform="translate(1273 1800)"
                />
              </g>
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="search"
              value={searchInput}
              onChange={(e) => handleOnChange(e.target.value)}
            ></input>
            <input
              type="checkbox"
              value={searchForTags}
              onChange={() => setSearchForTags(!searchForTags)}
            />
            <label className={styles.searchLabel}>search in tags only</label>
          </div>

          <button
            className={styles.addButton}
            onClick={() => setAddModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61.414"
              height="61.42"
              viewBox="0 0 61.414 61.42"
              style={{
                fill: "none",
                stroke: "#FFFFFF",
                strokeMiterlimit: 10,
                strokeWidth: "10px",
                transform: "rotate(45deg)",
                width: "15px",
                height: "15px",
              }}
            >
              <defs></defs>
              <g transform="translate(-568.793 -714.793)">
                <path
                  className="a"
                  d="M80,20.005l-60,60m60,0L20,20"
                  transform="translate(549.501 695.5)"
                />
              </g>
            </svg>
            <label className={styles.addLabel}>Add</label>
          </button>
        </div>

        {!posts.length == 0 ? (
          posts.map((post) => {
            return (
              <Card key={post.id} content={post} onDelete={handlePostRemoved} />
            );
          })
        ) : (
          <div className={styles.noPosts}>
            <div className={styles.noPostsImg}>
              <Image
                src="/caveman.gif"
                alt="Not Found"
                width={500}
                height={400}
              />
              <h2 className={styles.notFound}>Ooops, no posts found...</h2>
            </div>
          </div>
        )}

        {addModal && (
          <div className={styles.modal}>
            <form
              onSubmit={handleSubmit}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            >
              <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                  <div className={styles.modalHeaderAdd}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="61.414"
                      height="61.42"
                      viewBox="0 0 61.414 61.42"
                      style={{
                        fill: "none",
                        stroke: "#170C3A",
                        strokeMiterlimit: 10,
                        strokeWidth: "10px",
                        transform: "rotate(45deg)",
                        width: "15px",
                        height: "15px",
                      }}
                    >
                      <defs></defs>
                      <g transform="translate(-568.793 -714.793)">
                        <path
                          className="a"
                          d="M80,20.005l-60,60m60,0L20,20"
                          transform="translate(549.501 695.5)"
                        />
                      </g>
                    </svg>
                    <h3 className={styles.modalTitle}>Add a new tool</h3>
                  </div>
                  <svg
                    className={styles.closeModal}
                    onClick={handleCloseModal}
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.414"
                    height="13.415"
                    viewBox="0 0 13.414 13.415"
                    style={{
                      fill: "none",
                      stroke: "#8f8a9b",
                      strokeMiterlimit: 10,
                      strokeWidth: "2px",
                    }}
                  >
                    <defs></defs>
                    <path
                      className="a"
                      d="M32,20,20,32m12,0L20,20"
                      transform="translate(-19.292 -19.293)"
                    />
                  </svg>
                </div>
                <div className={styles.modalContent}>
                  <label className={styles.modalLabel}>Tool Title</label>
                  <input
                    className={styles.modalInput}
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label className={styles.modalLabel}>Link</label>
                  <input
                    className={styles.modalInput}
                    type="text"
                    value={link}
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                  />
                  <label className={styles.modalLabel}>Description</label>
                  <textarea
                    className={styles.modalInputTextArea}
                    type="text"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <label className={styles.modalLabel}>Tags</label>
                  <div className={styles.addTags}>
                    <input
                      ref={tagInput}
                      className={styles.modalInput}
                      type="text"
                      value={tag}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          (e.preventDefault(), handleAddTag());
                      }}
                      onChange={(e) => {
                        setTag(e.target.value);
                      }}
                    />
                    <div
                      onClick={() => handleAddTag()}
                      className={styles.addTagField}
                    >
                      <svg
                        className={styles.addTag}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 61.414 61.42"
                      >
                        <g transform="translate(-568.793 -714.793)">
                          <path
                            className="addTag"
                            d="M80,20.005l-60,60m60,0L20,20"
                            transform="translate(549.501 695.5)"
                          />
                        </g>
                      </svg>
                    </div>
                    <p>
                      <div className={styles.tagsContainer}>
                        {tags &&
                          tags.map((tag) => {
                            return (
                              <div
                                className={styles.tag}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                              >
                                <p>{tag}</p>
                                <svg
                                  className={styles.removeTag}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 13.414 13.415"
                                  style={{
                                    fill: "none",
                                    stroke: "#8f8a9b",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "2px",
                                  }}
                                >
                                  <defs></defs>
                                  <path
                                    className="a"
                                    d="M32,20,20,32m12,0L20,20"
                                    transform="translate(-19.292 -19.293)"
                                  />
                                </svg>
                              </div>
                            );
                          })}
                      </div>
                    </p>
                  </div>
                </div>

                <footer className={styles.modalFooter}>
                  <button
                    className={styles.cancelButton}
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.saveButton}
                    type="submit"
                    value="Submit"
                  >
                    Save
                  </button>
                </footer>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
