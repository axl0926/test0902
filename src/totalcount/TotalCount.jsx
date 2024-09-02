import "./totalCount.css";
// eslint-disable-next-line react/prop-types
export default function TotalCount({ list }) {
    return (
        <div className="count mw">
            <strong>count</strong>
            <span>{list.length}</span>
        </div>
    );
}
