export default function DonationsList() {
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
                    return <Donation element={element}></Donation>;
                })}
            </div>
            <button>Custom Donation</button>
        </div>
    );
}

function Donation({ element }) {
    return (
        <div style={{ width: 150, border: "2px solid black" }}>
            <img src={element.image} style={{ width: 100 }} alt="" />
            <br />
            {element.description}
            <br />
            To Serve: {element.toServe}
            <br />
            Date: {element.date}
            <br />
            {element.addressTo}
            <br />
            <button>Donate</button>
        </div>
    );
}

let list = [
    {
        _id: 111,
        toServe: 5,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressTo: "Sonari, Jamshedpur",
        // date: ,
        status: "Completed",
    },
    {
        _id: 112,
        toServe: 2,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressTo: "Mango, Jamshedpur",
        // date: ,
        status: "Not Completed",
    },
    {
        _id: 113,
        toServe: 3,
        description: "Food for orphans",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png",
        addressTo: "Sonari, Jamshedpur",
        // date: ,
        status: "Not Completed",
    },
    // {
    //     toServe: Number,
    //     description: String,
    //     addressFrom: String,
    //     addressTo: String,
    //     date: Date,
    //     status: String,
    //     user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // },
];
