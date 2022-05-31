import "./MModal.css"
import {setShowLogin} from "../../store/actions/ui";
import {connect} from "react-redux";

function MModal(props){

    function CloseModal(){
        props.setShowLogin(false);
    }
    return(
        <div className="modalPrueba" onClick={()=>CloseModal()}>
            {props.children}
        </div>
    );
        
    
}

const mapActionsToProps = {
    setShowLogin
};

export default connect(null,mapActionsToProps)(MModal);
/*export default MModal;*/