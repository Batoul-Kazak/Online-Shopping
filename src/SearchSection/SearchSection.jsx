const clothesTypes = [
    { type: "All", image: "" },
    { type: "Jackets", image: "" },
    { type: "Jeans", image: "" },
    { type: "Skirts", image: "" },
    { type: "Socks", image: "" },
    { type: "T-Shirts", image: "" },
    { type: "Hair Accessories", image: "" },
    { type: "Bijamas", image: "" },
    { type: "Dresses", image: "" },
    { type: "Shoes", image: "" },
]

export default function SearchSection() {
    return (
        <section className="search-section">
            <Button>⬅</Button>
            {clothesTypes.map((item, i) => <ClothesType key={i} item={item} />)}
            <Button>➡</Button>
        </section>
    )
}

function ClothesType({ item }) {
    return (
        <div>
            <img src={item.image} alt={item.type} />
            <h3>{item.type}</h3>
        </div>
    )
}

function Button({ children }) {
    return (
        <button>{children}</button>
    )
}