export default function DonationsList() {
    return (
        <>
            Hello
            <div style={{ display: "grid" }}>
                {list.map((element) => {
                    return <Donation el={element}></Donation>;
                })}
            </div>
        </>
    );
}

function Donation({ el }) {
    return <>{el.image}</>;
}

let list = [
    {
        _id: 111,
        toServe: 2,
        image: "imgLink",
    },
    {
        _id: 112,
        toServe: 2,
        image: "imgLink",
    },
    {
        _id: 113,
        toServe: 2,
        image: "imgLink",
    },
];
