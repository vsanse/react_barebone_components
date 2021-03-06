import "./Paper.scss";

function getBoxShadow( elevation, mode ){
    return {
        boxShadow:
        `${ elevation ? elevation*2 : "6"}px ${ elevation ? elevation*2 : "6"}px ${ elevation ? elevation*4 : "6"}px 1px rgba(0,0,0,0.${mode === "dark" ? 3 : 1}),
        -${ elevation ? elevation : "1"}px ${ elevation ? elevation : "1"}px ${ elevation ? elevation*2 : "6"}px 1px rgba(0,0,0,0.${mode === "dark" ? 3 : 1})
        `
    }
}

const Paper = ({ mode, elevation, children }) => {
    return (
        <div 
            className={`paper__wrapper ${mode === "dark" && "paper__dark"}`}
            style={ getBoxShadow( elevation, mode ) }
        >
            { children }
        </div>
    )
}

export default Paper
