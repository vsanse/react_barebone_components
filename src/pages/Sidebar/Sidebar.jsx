import "./Sidebar.scss";
import componentsMeta from "../../helpers/componentsmeta.json";

const Sidebar = ({ setSelectedComponentIndex }) => {
    return (
        <div className="Sidebar">
            <div className="Sidebar--title">Components Overview</div>
            <div className="Sidebar--componentIndex">
                {
                    componentsMeta.map((each,i) =>
                        <div key={i} className="Sidebar--eachComponentSelector" onClick={ () => setSelectedComponentIndex(i) }>
                            {each.componentname}
                        </div>
                    )
                }
            </div>
            <div className="Sidebar--invitationMessage">
                <div>
                    Feeling half empty or half full?
                </div>
                <div>
                    Contribute and improve <br />
                    <b>React Barebones</b>
                    <br /> <a href="https://github.com/vsanse/react_barebone_components">here</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
