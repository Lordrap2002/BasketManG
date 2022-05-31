import "./MModal.css"
import {setShowLogin} from "../../store/actions/ui";
import {connect} from "react-redux";

function MModal(props){
    function closeModal(event){
        event.stopPropagation();
        props.setShowLogin(false);
    }
    return(
        <div className="modalPrueba" onDoubleClick={(event)=>closeModal(event)}>
            {props.children}
        </div>
    );
        
    
}

const mapActionsToProps = {
    setShowLogin
};

export default connect(null,mapActionsToProps)(MModal);
/*export default MModal;*/