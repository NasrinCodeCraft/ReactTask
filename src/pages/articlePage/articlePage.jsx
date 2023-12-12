import styled from "./articlePage.module.css";
import pic from './../../assets/images/article.jpg';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {

    const [article, setArticle] = useState([]);
    const params = useParams();
    const [isLoading, setIsLoding] = useState(false);
    useEffect(() => {
        setIsLoding(true);
        axios
            .get(`http://localhost:5000/articles/${params.id}`)
            .then((result) => {
                setArticle(result.data);
                setIsLoding(false)
            });
    }, [])

    return (
        <>
            <Navbar title="نسرین بلاک" />
            <div className={styled.articleWrapper}>
                <div className="container">
                    {
                        isLoading ? (
                            <p>چند لحظه صبر کنید ...</p>
                        ) : (
                            <>
                                <h1>{article.title}</h1>
                                <div className={styled.articleInfo}>
                                    <span>تاریخ :{article.date}</span>
                                    <span>نویسنده :{article.athor}</span>
                                    <span>مدت زمان خواندن :{article.readingTime}</span>
                                </div>
                                <img src={pic} />
                                <p>
                                    {article.content}
                                </p>
                            </>
                        )
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ArticlePage;