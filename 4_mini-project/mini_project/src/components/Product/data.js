// Random topic cho khóa học
const randomTopic = arr => {
    // Tạo mảng rỗng
    let list = [];

    // Số lượng topic có trong mảng 1 -> 3
    let countTopic = Math.floor(Math.random() * (3) + 1)

    // Random topic và push vào mảng
    while (list.length != countTopic) {
        let index = Math.floor(Math.random() * arr.length);
        let topicValue = arr[index].value;
        if (!list.includes(topicValue)) {
            list.push(topicValue);
        }
    }

    return list;
}

// Danh sách topic
export const topics = [
    {
        name: "Lập trình Backend",
        value: "backend"
    },
    {
        name: "Lập trình Frontend",
        value: "frontend"
    },
    {
        name: "Cơ sở dữ liệu",
        value: "database"
    },
    {
        name: "Di động",
        value: "mobile"
    },
    {
        name: "Devops",
        value: "devops"
    },
    {
        name: "Khóa học cơ bản",
        value: "basic"
    },
]


// Danh sách khóa học
export const courses = [
    {
        id: 1,
        title: "Spring Boot - Web Back End",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/36/bu7v9ks51co41h2qcttg",
        rating: 5.0,
        topics: randomTopic(topics),
        price: 9000000
    },
    {
        id: 2,
        title: "Lập trình iOS Swift căn bản cập nhật 2022",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/bjxnxQi0",
        rating: 4.7,
        topics: randomTopic(topics),
        price: 3900000
    },
    {
        id: 3,
        title: "Khoá học Lập trình Arduino Scratch cho trẻ em",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/brbgh4451coepbqoch60/bt3miv451co41h2qcnr0",
        rating: 4.5,
        topics: randomTopic(topics),
        price: 3850000
    },
    {
        id: 4,
        title: "Learn AWS the Hard Way",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/brbgh4451coepbqoch60/R6t2Z_Op",
        rating: 4.5,
        topics: randomTopic(topics),
        price: 7000000
    },
    {
        id: 5,
        title: "DevOps 2022",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/93NQ8U6F",
        rating: 4.9,
        topics: randomTopic(topics),
        price: 4000000
    },
    {
        id: 6,
        title: "Web Frontend nâng cao với React",
        type: "onlab",
        image: "https://media.techmaster.vn/api/static/c2m5ou451cob24f6skeg/xQSZ4zy3",
        rating: 4.5,
        topics: randomTopic(topics),
        price: 5500000
    },
    {
        id: 7,
        title: "Java căn bản",
        type: "online",
        image: "https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/ZuedW7J1",
        rating: 4.4,
        topics: randomTopic(topics),
        price: 4500000
    },
    {
        id: 8,
        title: "Lập trình Nodejs (cập nhật 2022)",
        type: "online",
        image: "https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/6PyUoB-T",
        rating: 4.7,
        topics: randomTopic(topics),
        price: 300000
    },
    {
        id: 9,
        title: "Javascript căn bản - Tổng hợp 12 game huyền thoại",
        type: "online",
        image: "https://media.techmaster.vn/api/static/10194/bv7f8ms51coduae6ij60",
        rating: 4.5,
        topics: randomTopic(topics),
        price: 500000
    },
    {
        id: 10,
        title: "Xây dựng và quản trị website bằng wordpress",
        type: "online",
        image: "https://media.techmaster.vn/api/static/c2m5ou451cob24f6skeg/c6jfe1451cof74mrqo4g",
        rating: 4.8,
        price: 500000,
        topics: randomTopic(topics)
    },
    {
        id: 11,
        title: "Khoá học SQL nâng cao",
        type: "online",
        image: "https://media.techmaster.vn/api/static/6734/bo5caps51coco9d0vu80",
        rating: 5,
        price: 500000,
        topics: randomTopic(topics)
    },
    {
        id: 12,
        title: "Nhập môn lập trình - giải thuật cơ bản",
        type: "online",
        image: "https://media.techmaster.vn/api/fileman/Uploads/users/5463/giaithuat-thumnail.png",
        rating: 4.5,
        price: 500000,
        topics: randomTopic(topics)
    }
]