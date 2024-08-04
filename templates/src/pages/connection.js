// Using Axios
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/mymodel/')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data from Django API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.field1} - {item.field2}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
