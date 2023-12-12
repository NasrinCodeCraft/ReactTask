import styled from "./input.module.css";

function Input(props) {

    return (
        <div className={styled.inputWrapper}>
            <label htmlFor="">{props.label}</label>
            <input name={props.name} onChange={props.handleChange}  type="text" />
        </div>
    )
}

export default Input;