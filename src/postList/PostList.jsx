/* eslint-disable react/prop-types */
import "./list.css";
import List from "./List";

export default function PostList({ lists, setList }) {
    console.log("PostList--", lists);

    return (
        <ul className="postList mw">
            {lists.map((list, i) => (
                <List key={i} list={list} setList={setList} />
            ))}
        </ul>
    );
}
