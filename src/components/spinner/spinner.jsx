import styled from './spinner.module.css';

function Spinner() {
    return (
        <div className={styled.loadingPage}>
            <div className={styled.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner;