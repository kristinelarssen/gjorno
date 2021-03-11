import React, { useEffect, useState } from "react";




function ActivityFilter() {
    const [acfilter, setAcfilter] = useState("");

    return (
        <select onChange={(event) => setAcfilter(event.target.value)}>
            <option value=""></option>
            <option value="Annet">Annet</option>
            <option value="Spasertur">Spasertur</option>
            <option value="Løping">Løping</option>
        </select>
    );
}

export default ActivityFilter;