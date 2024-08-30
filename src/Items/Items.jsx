import jeans1 from "./../../public/jeans-1.jpg";
import jeans2 from "./../../public/jeans-2.jpg";
import jeans3 from "./../../public/jeans-3.jpg";
import jeans4 from "./../../public/jeans-4.jpg";
import jeans5 from "./../../public/jeans-5.jpg";
import jeans6 from "./../../public/jeans-6.jpg";
import jeans7 from "./../../public/jeans-7.jpg";
import jeans8 from "./../../public/jeans-8.jpg";
import dress1 from "./../../public/dress-1.jpeg";
import dress2 from "./../../public/dress-2.jpeg";
import dress3 from "./../../public/dress-3.jpeg";
import dress4 from "./../../public/dress-4.jpeg";
import dress5 from "./../../public/dress-5.jpeg";
import jacket1 from "./../../public/jacket-1.jpg";
import jacket2 from "./../../public/jacket-2.jpg";
import jacket3 from "./../../public/jacket-3.jpg";
import jacket4 from "./../../public/jacket-4.jpg";
import jacket5 from "./../../public/jacket-5.jpg";
import T_shirt1 from "./../../public/T-shirt-1.jpg";
import T_shirt2 from "./../../public/T-shirt-2.jpg";
import T_shirt3 from "./../../public/T-shirt-3.jpg";
import skirt1 from "./../../public/skirt-1.jpg";
import skirt2 from "./../../public/skirt-2.jpg";
import skirt3 from "./../../public/skirt-3.jpg";

const items = [
    { id: 1, image: jacket1, clothesType: "Jacket", rating: 3, description: "good jacket made in germany, for so cold weather", price: 32.44 },
    { id: 2, image: skirt1, clothesType: "Skirt", rating: 2, description: "good jacket made in germany, for so cold weather", price: 32.8 },
    { id: 3, image: T_shirt1, clothesType: "T-shirt", rating: 5, description: "good jacket made in germany, for so cold weather", price: 31.33 },
    { id: 4, image: jeans1, clothesType: "Jeans", rating: 4, description: "good jacket made in germany, for so cold weather", price: 89.23 },
    { id: 5, image: jacket2, clothesType: "Jacket", rating: 1, description: "good jacket made in germany, for so cold weather", price: 120.99 },
    { id: 6, image: dress1, clothesType: "Dress", rating: 1, description: "good jacket made in germany, for so cold weather", price: 10.90 },
    { id: 7, image: jeans2, clothesType: "Jeans", rating: 3, description: "good jacket made in germany, for so cold weather", price: 18.43 },
    { id: 8, image: jeans3, clothesType: "Jeans", rating: 1, description: "good jacket made in germany, for so cold weather", price: 90.5 },
    { id: 9, image: T_shirt2, clothesType: "T-shirt", rating: 3, description: "good jacket made in germany, for so cold weather", price: 40.99 },
    { id: 10, image: dress2, clothesType: "Dress", rating: 1, description: "good jacket made in germany, for so cold weather", price: 45.99 },
    { id: 11, image: dress3, clothesType: "Dress", rating: 4, description: "good jacket made in germany, for so cold weather", price: 32.89 },
    { id: 12, image: skirt2, clothesType: "Skirt", rating: 2, description: "good jacket made in germany, for so cold weather", price: 32.77 },
    { id: 13, image: skirt3, clothesType: "Skirt", rating: 3, description: "good jacket made in germany, for so cold weather", price: 32.54 },
    { id: 14, image: jeans4, clothesType: "Jeans", rating: 3, description: "good jacket made in germany, for so cold weather", price: 34.99 },
    { id: 15, image: T_shirt3, clothesType: "T-shirt", rating: 4, description: "good jacket made in germany, for so cold weather", price: 40 },
    { id: 16, image: jacket5, clothesType: "Jacket", rating: 1, description: "good jacket made in germany, for so cold weather", price: 32 },
    { id: 17, image: jacket3, clothesType: "Jacket", rating: 2, description: "good jacket made in germany, for so cold weather", price: 220 },
    { id: 18, image: dress4, clothesType: "Dress", rating: 3, description: "good jacket made in germany, for so cold weather", price: 180 },
    { id: 19, image: dress5, clothesType: "Dress", rating: 2, description: "good jacket made in germany, for so cold weather", price: 520.99 },
    { id: 20, image: jeans5, clothesType: "Jeans", rating: 3, description: "good jacket made in germany, for so cold weather", price: 34.99 },
    { id: 21, image: jeans6, clothesType: "Jeans", rating: 3, description: "good jacket made in germany, for so cold weather", price: 34.99 },
    { id: 22, image: jeans7, clothesType: "Jeans", rating: 2, description: "good jacket made in germany, for so cold weather", price: 34.99 },
    { id: 23, image: jeans8, clothesType: "Jeans", rating: 3, description: "good jacket made in germany, for so cold weather", price: 34.99 },
    { id: 24, image: jacket4, clothesType: "Jacket", rating: 3, description: "good jacket made in germany, for so cold weather", price: 34.99 },

]

export default function Items() {
    return (
        <main className="items-container">
            {items.map((item) => <Item key={item.id} item={item} />)}
        </main>
    );
}

function Item({ item }) {
    const rating = [
        "⭐",
        "⭐⭐",
        "⭐⭐⭐",
        "⭐⭐⭐⭐",
        "⭐⭐⭐⭐⭐"
    ];
    return (
        <section className="item">
            <button>
                <img src={item.image} alt={item.clothesType} />
            </button>
            <div>
                <div className="info">
                    <h3>{item.clothesType}</h3>
                    <p>{rating[item.rating - 1]}</p>
                </div>
                <p className="description">{item.description}</p>
                <p className="price">{item.price}€</p>
            </div>
        </section>
    )
}