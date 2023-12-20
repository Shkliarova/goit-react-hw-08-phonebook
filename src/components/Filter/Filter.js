import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";
import { TextField } from "@mui/material";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return(
        <div>
            <TextField id="standard-basic" label="Enter the name of the contact" variant="standard" type="text" value={filter} 
            onChange={e => dispatch(updateFilter(e.target.value))} style={{width: "600px"}}/>
        </div>
    )
}