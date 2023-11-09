import React from "react";
import useContainer from "./useContainer";

const Presentational = () => {
    const { data } = useContainer();
    return (
        <div className="App">
            <h1>Mock Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.first_name} {item.last_name} - {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Presentational;
