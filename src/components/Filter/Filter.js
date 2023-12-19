import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return(
        <div>
            <input type="text" value={filter} 
            onChange={e => dispatch(updateFilter(e.target.value))}/>
        </div>
    )
}