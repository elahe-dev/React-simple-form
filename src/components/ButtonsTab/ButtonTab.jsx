import  './ButtonsTab.css'
const ButtonTab = ({btnName, isSelected , onselected}) => {
  return (
    <li>
        <button 
        className = {isSelected ? 'active' : undefined}
        onClick={onselected}
        >
            {btnName}
        </button>
    </li>
  )
}
export default ButtonTab