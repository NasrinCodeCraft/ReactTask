import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import styled from './home.module.css';
import Article from "../../components/article/article";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";
import p from './../../assets/images/iran.jpg'
function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoding] = useState(false)
    useEffect(() => {
        setIsLoding(true)
        axios
            .get(`http://localhost:5000/articles`)
            .then((result) => {
                setArticles(result.data)
                setIsLoding(false)
            })
            .catch((error) => {
                console.log(error);
            })
            .catch((error) => {
                console.log(error);
                setIsLoding(false)
            });

    }, []);



    return (
        <div className={styled.homeWrapper}>
            <Navbar title="نسرین بلاک" />
            <div className="container">
                <h2>مقالات جدید</h2>
                {
                    isLoading ? (<Spinner />) :
                        (
                            <div className={styled.articles}>
                                {
                                    articles.map(result => (
                                        <Link to={`/article/${result.id}`}>
                                            <Article key={result.id} article={result} />
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Home;
