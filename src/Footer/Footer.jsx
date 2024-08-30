const icons = [
    // facebook,
    // twitter,
    // linkedin,
    "",
    "",
    "",
]

export default function Footer() {
    return (
        <footer>
            <main>
                <section>
                    <h2>OnlineShopping</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ipsam dolorem molestias perspiciatis fugiat blanditiis in ratione,
                        quos quidem autem labore recusandae reiciendis eligendi repellat impedit!
                        Voluptatum similique ratione facere explicabo?</p>
                    <div className="icons-container">
                        {icons.map((icon, i) => <Icon key={i} img={icon} />)}
                    </div>
                </section>
                <section>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Delivery</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </section>
                <section>
                    <h3>Get in Touch</h3>
                    <li>+4885 33 56 342</li>
                    <li>dsjknfdksjfnsdkjnfk</li>
                </section>
            </main>
            <section>
                <div className="line"></div>
                <p>Copyright 2024 @ onlineshopping.com - All Right Reserved</p>
            </section>
        </footer>
    )
}

function Icon({ img }) {
    return (
        <div className="icon"></div>
        // <img src={img} />
    )
}