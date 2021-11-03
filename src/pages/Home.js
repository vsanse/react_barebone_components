import { useState } from "react"
import Preview from "./Preview/Preview"
import Sidebar from "./Sidebar/Sidebar"

const Home = () => {

    const [ selectedComponentIndex, setSelectedComponentIndex ] = useState(0);

    return (
        <>
            <Sidebar {...{setSelectedComponentIndex}} />
            <Preview {...{selectedComponentIndex}} />
        </>
    )
}

export default Home
