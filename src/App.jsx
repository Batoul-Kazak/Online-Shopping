import Header from "./Header/Header"
import SearchSection from "./SearchSection/SearchSection"
import Items from "./Items/Items"
import PaginationSection from "./PaginationSection/PaginationSection"
import Footer from "./Footer/Footer"
import { useState } from "react"

export default function App() {
    const [clothesType, useClothesType] = useState("All")
    return (
        <main className="app">
            <Header />
            <SearchSection />
            <Items />
            <PaginationSection />
            <Footer />
        </main>
    )
}