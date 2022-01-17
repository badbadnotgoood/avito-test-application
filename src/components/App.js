import React, {useState} from "react";
import Main from "./Main";
import Description from "./Description";
import '../css/App.css';

const App = () => {
    const [click, setClick] = useState(false);
    const [item, setItem] = useState(null);
    return (
        <>
            <div className="block">
                <div className="block__list">
                    <Main clickFunc={setClick} itemFunc={setItem}/>
                </div>
                {click &&
                <Description item={item}/>
                }
            </div>
        </>
    );
}

export default App;
