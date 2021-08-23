import React,  {useState} from 'react'
import { Link } from 'react-router-dom';
import { useTodoLayerValue } from '../Context/TodoContext';

const AddItem = () => {

    const [linkName, setLinkName] = useState('') 
    const [linkURL, setLinkURL] = useState('') 
    const [isShow, setIsShow] = useState('') 
    const [disabled, setDisabled] = useState(false) 

    

    const [{data},dispatch] = useTodoLayerValue()

    const handleAddItem = (e) => {

        setDisabled(true);

        const newItem = {
            id: Math.floor(Math.random() * 44324),
            score: 0,
            name: linkName,
            url: linkURL
        }

        dispatch({
            type:"ADD_ITEM",
            payload:newItem
        })

        setIsShow("show")

        setTimeout(function(){  
            setIsShow("") 
            setDisabled(false);
        }, 2000);

       
        
        

    }

    return (
        <section className="comp-section-01">
            <div className="content-wrapper">
                <div className="c-subwrapper">
                    <div className="comp-micro-01">

                        <Link to="/" className="c-item-01">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#F7F7FC" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5001 22.3107L15.5608 21.25L11.0608 16.75H22.0001V15.25H11.0608L15.5608 10.75L14.5001 9.68935L8.18945 16L14.5001 22.3107Z" fill="#221F44" />
                            </svg>
                            <span>Return to List</span>
                        </Link>
                        <h5 className="c-item-02">
                            Add New Link
                        </h5>
                        <div className="c-item-03">
                            <div className="form-group-01">
                                <label htmlFor="linkName">Link Name</label>
                                <input type="text" name="linkName" id="linkName" onChange={(event) => setLinkName(event.target.value)} value={linkName} placeholder="e.g Alphabet" />
                            </div>
                            <div className="form-group-01">
                                <label htmlFor="linkName">Link URL</label>
                                <input type="text" name="linkURL" id="linkURL" onChange={(event) => setLinkURL(event.target.value)} value={linkURL}  placeholder="e.g http://abc.xyz" />
                            </div>
                            <button href="#" onClick={handleAddItem} className="btn-02" disabled={disabled}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={`snackbar ${isShow}`} id="itemAdded">{linkName} added</div>
        </section>
    )
}

export default AddItem
