import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

export default function TableHeader({headers, onSorting}) {
    const [sortingField, setSortingField] = useState("")
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    }

    return (
        <thead>
        <tr>
            {headers.map(({name, field, sortable}) => (
                <th key={name}
                onClick={() => sortable? onSortingChange(field): null}
                scope="col">
                    
                    {name}
                    {
                        sortingField && sortingField === field && (
                            <FontAwesomeIcon icon={ sortingOrder === "asc" ? "sort-down" : "sort-up"}/>
                        )
                    }
                </th>
            ))}

        </tr>
      </thead>
    )
}
