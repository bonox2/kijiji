import "./Input.css"

export default function Input({labelText,placeHolderText,...props}){
    return(
        <label className="input_label" >
            <span>{labelText}</span>
            <input className="input" placeholder={placeHolderText} {...props}/>
        </label>
    )
}