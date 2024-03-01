export default function AcceptorsList() {
    return (
        <div>
            <div>Nearby Oppurtunities</div>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {list.map((element) => {
                    return <Acceptor element={element}></Acceptor>;
                })}
            </div>
            <button>Request+</button>
        </div>
    );
}

function Acceptor({ element }) {
    return (
        <div style={{ width: 150, border: "2px solid black" }}>
            <img src={element.image} style={{ width: 100 }} alt="" />
            <br />
            {element.description}
            <br />
            Serves: {element.toServe}
            <br />
            Date: {element.date}
            <br />
            {element.addressTo}
            <br />
            <button>Accept</button>
        </div>
    );
}

let list = [
    {
        _id: 111,
        Serves: 5,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressFrom: "Sonari, Jamshedpur",
        // date: ,
        status: "Completed",
    },
    {
        _id: 112,
        Serves: 2,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressFrom: "Mango, Jamshedpur",
        // date: ,
        status: "Not Completed",
    },
    {
        _id: 113,
        Serves: 3,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressFrom: "Sonari, Jamshedpur",
        // date: ,
        status: "Not Completed",
    },
    // {
    //   serves: Number,
    //   type: String,
    //   description: String,
    //   addressFrom: String,
    //   addressTo: String,
    //   date: Date,
    //   status: String,
    //   user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    // },
];
