const App = () => {
    let hobbyList = [
        { id: 1, name: "Play game" },
        { id: 2, name: "Swimming" },
        { id: 3, name: "Study English" },
    ];

    let name = "Bùi Hiên";

    let user = {
        name: "Thu Hằng",
        email: "hang@gmail.com",
    };

    const showInfo = (hobby) => {
        alert(hobby);
    };
    return (
        <>
            <Hobby hobbyList={hobbyList} />
            <Greeting name={name} />
            <User user={user} />
        </>
    );
};

App.displayName = "Ung dung";

// Hobby
const Hobby = (props) => {
    const { hobbyList, showInfo } = props;
    return (
        <ul>
            {hobbyList.map((e) => (
                <li key={e.id} onClick={() => showInfo(e.name)}>
                    {e.name}
                </li>
            ))}
        </ul>
    );
};
Hobby.propTypes = {
    hobbyList: PropTypes.array.isRequired,
    showInfo: PropTypes.func.isRequired,
};

Hobby.defaultProps = {
    hobbyList: [],
    showInfo: () => {
        alert("clicked");
    },
};

Hobby.displayName = "So thich";

// Greeting
const Greeting = (props) => {
    const { name } = props;
    return <h2>{name}</h2>;
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};

Greeting.defaultProps = {
    name: "Anonymous",
};

Greeting.displayName = "Xin chao";

// User
const User = (props) => {
    const { name, email } = props.user;
    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
};

User.displayName = "Nguoi dung";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
