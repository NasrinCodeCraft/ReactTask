import styled from './article.module.css'
import article from './../../assets/images/article.jpg'


function Article(props){
    
    return(
        <div className={styled.articleWrapper}>
            <img src={article}/>
            <h3>{props.article.title}</h3>
            <p>خواندن {props.article.readingTime} دقیقه ای</p>
        </div>
    );
}

export default Article;