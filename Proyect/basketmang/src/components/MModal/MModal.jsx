import "./MModal.css"
import {setShowLogin} from "../../store/actions/ui";
import {connect} from "react-redux";

function MModal(props){
    return(
        <div className="modal">
            {props.children}
        </div>
    );
        
    
}

const mapActionsToProps = {
    setShowLogin
};

export default connect(null, mapActionsToProps) (MModal);