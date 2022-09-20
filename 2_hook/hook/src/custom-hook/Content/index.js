import useToggle from "../hook/useToggle";

function Content() {
    const [isShow, handleToggle] = useToggle(true);

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            {isShow && <p className='light' style={{ padding: 20 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam aperiam expedita deserunt maiores mollitia natus accusantium earum iure cumque iste eveniet omnis culpa, nobis eligendi? Vitae dolor enim soluta.</p>}
        </div>
    )
}

export default Content