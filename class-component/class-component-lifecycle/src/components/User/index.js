import React from 'react';

// MOUNTING
//     constructor()
//     getDerivedStateFromProps() - static
//     render()
//     componentDidMount()

// UPDATING
//     getDerivedStateFromProps()
//     shouldComponentUpdate()
//     render()
//     getSnapshotBeforeUpdate()
//     componentDidUpdate()

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Bui Hien",
            email: "buihien@gmail.com",
            count: 0,
            isShow: true
        }
    }

    // Được gọi trong mounting và updating
    static getDerivedStateFromProps(props, state) {
        console.log("props : " + JSON.stringify(props))
        console.log("state : " + JSON.stringify(state))

        let newState = { email: props.email, count: state.count + 1 }
        return newState;
    }

    // Method cuối cùng trong quá trình mounting
    componentDidMount() {
        console.log("Mount")
    }

    componentDidUpdate() {
        console.log("Update")
        console.log(this.state.count)
    }

    // Trả về boolean, chỉ định xem component có được render nữa hay là không
    // Mặc định là true
    // shouldComponentUpdate() {
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("prevProps : " + JSON.stringify(prevProps))
        console.log("prevState : " + JSON.stringify(prevState))

        return { count: 100 }
    }

    componentWillUnmount() {
        console.log("Unmount")
    }

    addCount = () => {
        // Điều gì xảy ra nếu có nhiều setState
        // ReactJS sẽ nhóm các batch gọi setState() (gộp các lần gọi setState() gần nhau) thành một lần cập nhật.
        // this.setState({ count : this.state.count + 1})
        // this.setState({ count : this.state.count + 1})
        // this.setState({ count : this.state.count + 1})

        // Giải pháp --> Sử dụng callback function
        this.setState(prevState => ({ count: prevState.count + 1 }))
        // this.setState(prevState => ({ count: prevState.count + 1 }))
        // this.setState(prevState => ({ count: prevState.count + 1 }))
    }



    render() {
        return (
            <>
                <h1>User Component</h1>
                <h2>Name : {this.state.name}</h2>
                <h2>Name : {this.state.email}</h2>

                <h2>Count : {this.state.count}</h2>
                <button onClick={this.addCount}>Add</button>

                {console.log("Render")}
            </>
        )
    }
}

export default React.memo(User);