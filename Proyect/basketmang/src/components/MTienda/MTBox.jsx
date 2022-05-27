import "./MTBox.css"
import MFButton from "../MButton/MFButton";

function MTBox(props){
  return(
    <nav className="ttbox">
      <div className="tttitle">
        Técnicas
      </div>
      <div className="ttitems">
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.24.58.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.24.05.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.19.02.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.21.30.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.18.02.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-17.08.45.png"></MFButton>
      </div>
    </nav>
  );
}

export default MTBox;