import './Form.css'
const FormInput = ({inputType , placeholder}) => {
  return (
    <div className='inp-block'>
      <input className="inpStyle" required 
    type={inputType}  
    placeholder={placeholder} />
    <span className="focus-bg"></span>
    </div>
  )
}
export default FormInput