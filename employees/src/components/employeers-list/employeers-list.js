import EmployeersListItem from "../employeers-list-item/employeers-list-item"
import './employeers-list.css'


const EmployeersList = ({data,onDelete,onToggleIncreas,onTogglePromotion/*onToggleProp вместо двух*/}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeersListItem 
            {...itemProps}
            key = {id}
            onDelete={() => onDelete(id)}
            onToggleIncreas = {() => onToggleIncreas(id)}
            onTogglePromotion = {() => onTogglePromotion(id)}
            /*здесь тоже один проп onToggleProp= {(e) => onToggleProp(id,e.currentTarget.getAttribute('data-toggle'))} */
            />
        )
    })
    return (
        <ul className="app-list list-group" >
            {elements}
        </ul>
    )
}

export default EmployeersList;