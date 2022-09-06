const List = () => {
    let [list, setList] = React.useState(["Item 1", "Item 2", "Item 3"]);
    let [value, setValue] = React.useState("");
    let [isShow, setIsShow] = React.useState(true);

    // Thêm item
    const addItem = () => {
        if (value.length == 0) {
            alert("Nội dung không được để trống");
            return;
        }
        setList([...list, value]);
    };

    // Xóa item
    const deleteItem = () => {
        if (list.length == 0) {
            return;
        }

        let newList = [...list];
        newList.pop();
        setList(newList);
    };

    // Ẩn hiện danh sách
    const toggleList = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            <button onClick={toggleList}>Hide</button>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <button onClick={deleteItem}>Delete</button>
            {isShow && (
                <ul id="list">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<List />);
