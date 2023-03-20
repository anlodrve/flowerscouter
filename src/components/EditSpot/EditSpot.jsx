import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


function EditSpot(){
    //gives us the id from the url 
    const { id } = useParams(); 

    const dispatch = useDispatch(); 
    const history = useHistory(); 

    useEffect(() => {
        //get individual spot based on ID from url params
        dispatch({ type: "SELECT_SPOT", payload: id});
        //get all the categories 
        dispatch({ type: "GET_CATEGORIES" });
    }, [])

    //even though it's one spot, it comes back in an array
    const selectedSpot = useSelector((store) => store.spots); 

    const [spotToUpdate, setSpotToUpdate] = useState(selectedSpot[0]);
    console.log('spotToUpdate description', spotToUpdate.description);
    
    const handleChange = (event, key) => {
        //key is a string value from the input
        setSpotToUpdate({...spotToUpdate, [key]: event.target.value})
        console.log(spotToUpdate);
    }

    const handleSubmit = () => {
        dispatch({
            type: 'UPDATE_SPOT',
            payload: spotToUpdate
        })
    }

    return(
        <div>
            <h2>Edit Post</h2>
            <form id="editSpotForm" onSubmit={handleSubmit}>
            <textarea
                label='Description' 
                // placeholder={selectedSpot.description}
                type="textarea" 
                value={spotToUpdate.description}
                onChange={(event) => handleChange(event, 'description')}>
                </textarea>
            </form>
        </div>

    )

}

export default EditSpot