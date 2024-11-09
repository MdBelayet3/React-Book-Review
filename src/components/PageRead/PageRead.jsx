import { useLoaderData } from "react-router-dom";
import { getBookFromStoredCard } from "../../utilities/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useEffect, useState } from "react";

const PageRead = () => {

    const books = useLoaderData();
    const [allReadBook, setAllReadBook] = useState([])

    useEffect(() => {
        const storedReadBookId = getBookFromStoredCard('read-book');
        const readBooks = books.filter(book => storedReadBookId.includes(book.bookId));
        console.log(readBooks);
        const storedReadBook = readBooks.map(book => {
            const data = {
                name: book.bookName,
                page: book.totalPages,
            }
            return data;
        });
        setAllReadBook(storedReadBook);
    }, [books])
    console.log(allReadBook);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <BarChart
                width={1000}
                height={600}
                data={allReadBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {allReadBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageRead;