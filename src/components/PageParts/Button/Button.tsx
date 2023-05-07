import "./Button.css";

export default function Button({buttonText,...props}){
    return(
        <button {...props} className="btn" >{buttonText}</button>
    )
}