import "./MModal.css"

function MModal(props){
    return(
        <div className="modal">
            {props.children}
        </div>
    );
        
    
}

export default MModal;