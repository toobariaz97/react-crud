import React, {  useState } from 'react'
import propTypes from 'prop-types';


const Pagination = ({ data, totalKey, onPageChange, entrieShow }) => {
    
    const [page, setPage] = useState(1);
    const updatePage = (newValue) => {
        onPageChange(newValue);
        setPage(newValue);
    };

    return (
        <div className="row">
            {
                entrieShow == undefined ? ""
                    : <div className="col-sm-12 col-md-5 align-self-center">
                        <h6 className="dataTables_info"> Showing  {data?.limit || 0} of {data?.total || 0} entries </h6>
                    </div>

            }
            <div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate">
                    <ul className="pagination justify-content-end mb-0">
                        {
                            (data[totalKey] > 1 && page === data[totalKey]) ?
                                <li className="paginate_button page-item previous">
                                    <button onClick={() => (data[totalKey] > 0 ? updatePage(page - 1) : updatePage(1))} className="page-link">
                                        previous
                                    </button>
                                </li>
                                :
                                ''
                        }

                        {
                            data[totalKey] > 1 ?
                                [...Array(data[totalKey]).keys()].map((value, index) => (
                                    <li key={index} className={`paginate_button ${page === (value + 1) ? 'page-item active' : 'page-item'}`}>
                                        <button className="page-link" onClick={(e) => page != (value + 1) ? updatePage(value + 1) : ''}>
                                            {value + 1}
                                        </button>
                                    </li>
                                ))
                                : ''
                        }

                        {
                            (data[totalKey] > 1 && page !== data[totalKey]) ?
                                <li className="paginate_button page-item next">
                                    <button onClick={() => (data[totalKey] > 0 ? updatePage(page + 1) : updatePage(1))} className="page-link">
                                        Next
                                    </button>
                                </li>
                                :
                                ''
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
Pagination.propTypes = {
    totalKey: propTypes.string,
    data: propTypes.object,
    onPageChange: propTypes.func,
    // getData:propTypes.bool
};

Pagination.defaultProps = {
    totalKey: 'total',
    data: {},
    onPageChange: (value) => { },
    // getData:true
};
export default Pagination;