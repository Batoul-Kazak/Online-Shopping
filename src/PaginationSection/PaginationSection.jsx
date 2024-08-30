// the number of pages differs according to the clothes type 

export default function PaginationSection() {
    return (
        <section className="pagination-section">
            <PaginationButton>Previous</PaginationButton>
            <div>
                {Array.from({ length: 4 }, (_, i) => i + 1).map((el) => <button>{el}</button>)}
            </div>
            <PaginationButton>Next</PaginationButton>
        </section>
    )
}

function PaginationButton({ children }) {
    return (
        <button>{children}</button>
    )
}