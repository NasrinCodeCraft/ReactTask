import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css"
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";


function CreateArticle() {

    // let a = {name:"ali" , age: 24};
    // let b = {...a};
    // console.log(b);

    const [article, setArticle] = useState({
        id: "",
        title: "",
        date: "",
        readingTime: "",
        athor: "",
        imageurl: "",
        message: "",
    })

    const handleChangeArticle = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangeArticleMessage = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value,
        }));
    };
    const handleCreateNewArticle = () =>{
        axios.post("http://localhost:5000/articles" , {
           id: '',
           imageurl: article.imageurl,
           title:article.title,
           readingtime: article.readingTime,
           date: article.date,
           athor: article.athor,
           content: article.message,
        })
        console.log(article);
    }
    // switch (e.target.name) {
    //     case "title":
    //         setArticle( (prevState) => ({
    //             ...prevState,
    //             title: e.target.value,
    //         }));
    //         break;

    //         case "date":
    //             setArticle( (prevState) => ({
    //                 ...prevState,
    //                 date: e.target.value,
    //             }));
    //             break;
    // }
    // alert(article);
    return (
        <>
            <Navbar title="نسرین بلاک" />
            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>ساخت مقاله</h1>

                    <Input label="عنوان" name="title" handleChange={handleChangeArticle} />
                    <Input label="تاریخ" name="date" handleChange={handleChangeArticle} />
                    <Input label="مدت زمان خواندن" name="readingTime" handleChange={handleChangeArticle} />
                    <Input label="آدرس عکس" name="imageurl" handleChange={handleChangeArticle} />
                    <Input label="نویسنده" name="athor" handleChange={handleChangeArticle} />
                    <Textarea label="متن" handleChange={handleChangeArticleMessage} />
                    <div className={styled.buttWrapper}>
                        <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
                    </div>
                </div>
            </div>
            <Footer title="Footer" />
        </>
    )
}

export default CreateArticle;