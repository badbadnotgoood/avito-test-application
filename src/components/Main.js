import React, {useEffect, useState} from "react";
import axios from "axios";
import ItemComponent from "./ItemComponent";
import Pagination from "./Pagination";
import '../css/Main.css';

const Main = (props) => {
    const [data, setData] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const setClick = props.clickFunc;
    const setItem = props.itemFunc;
    useEffect(() => {
        axios.get("https://avito-trainee-re-euiom.ondigitalocean.app/items?page=" + page + "&limit=10")
            .then((r) => {
                setData(r.data.result);
                setPageCount(Math.ceil(r.data.result.totalCount / 10))
                console.log(r.data.result)
            });
    }, [page])
    return (
        <>
            <div className="list">
                {data !== null && data.items.map((el, i) => (
                    <ItemComponent el={el} key={i} clickFunc={setClick}
                                   itemFunc={setItem}/>
                ))}
            </div>
            <Pagination setPage={setPage} pageCount={pageCount}/>
        </>
    );
}

export default Main;