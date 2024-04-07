import './styles.css'

const FAQ = ({ id, title, body, defaultChecked }) => {

    const openCloseCard = () => {
        document.getElementById('cardTitle').classList.toggle("active")
    }

    return ( 
        <div className='FAQContainer'>
            <div className="FAQCard">
                <input type="radio" name="first" id={id} defaultChecked={defaultChecked}/>
                <label htmlFor={id}>{title}</label>
                <div className="FAQCardBody">{body}</div>
            </div>
        </div>
     );
}
 
export default FAQ;