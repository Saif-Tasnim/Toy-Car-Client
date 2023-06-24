import React from 'react';

const TableFormat = ({ d , handleDetails}) => {



    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3"> <div> {d.seller_name}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3"> <div> {d.name}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3"> <div> {d.category}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3 "> <div> {d.price}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3 ml-8"> <div> {d.quantity}</div>
                </div>
            </td>
            <th>
                <button className="btn btn-primary" onClick={()=>handleDetails(d._id)} > View Details </button>
            </th>
        </tr>
    );
};

export default TableFormat;