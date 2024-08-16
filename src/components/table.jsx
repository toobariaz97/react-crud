import propTypes from 'prop-types'
import {serialNumber} from '../utils/helper';
import NoRecord from './noRecord';
import Pagination from './pagination';

const Table = ({children,data,fields,hasPagination,extraHeads,extraCells,pageChanged})=> {
    const colspanFields = ()=>{
        return Object.keys(fields).length + 1;
    }
  return (
    <>
    <div className="main-tabble table-responsive">
        {children}
        <table className="table table-borderless dataTable" id='cut-table'>
            <thead>
                <tr>
                    <th className="sorting">S No.</th>
                {
                    fields?.map((field,fieldIndex)=>(

                        <th className="table-site-headings" key={fieldIndex}>{field.label}</th>
                    ))
                }
                {extraHeads()}
                </tr>
            </thead>
            <tbody>
                {
                    !hasPagination?
                        <>
                        {
                            data?.map((item,itemIndex)=>(
                                <tr key={itemIndex} className="tableRow">
                                    <td>{itemIndex + 1}</td>
                                    {
                                    fields?.map((field,fieldIndex)=>(
                                        <td key={fieldIndex}>{field.format?field.format(data[itemIndex][field.key]):data[itemIndex][field.key]}</td>
                                    ))
                                    }
                                    {extraCells(item)}
                                </tr>
                            ))
                        }
                        </>
                    :
                    <>
                    {
                        
                        data?.data?.map((item,itemIndex)=>(
                            <tr key={itemIndex}>
                                <td>{serialNumber(data,itemIndex)}</td>
                                {
                                    fields?.map((field,fieldIndex)=>(
                                        <td key={fieldIndex}>{field.format?field.format(data?.data[itemIndex][field.key]):data?.data[itemIndex][field?.key]}</td>
                                    ))
                                }
                                {extraCells(item)}
                            </tr>
                    
                    ))
                    }
                    <NoRecord tag="tr" data={data?.data} colspan={colspanFields()} />
                    </>
                }
            </tbody>
        </table>
        {
            hasPagination?
            <>                    
            <Pagination  data={data} onPageChange={(value)=> pageChanged(value)} totalKey="last_page"  entrieShow={true} />
            </>
            :
        ''
    }
    </div>
    </>
  )
}

Table.propTypes = {
    fields : propTypes.array,
    hasPagination : propTypes.bool,
    extraCells : propTypes.func,
    pageChanged : propTypes.func,
    extraHeads : propTypes.func,
};

Table.defaultProps = {
    data : {},
    fields : [],
    hasPagination : true,
    extraCells : (item)=> {},
    extraHeads : (item)=> {},
    pageChanged : (item)=> {},
}

export default Table;