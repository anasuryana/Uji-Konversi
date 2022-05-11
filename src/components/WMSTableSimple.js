import { Component } from 'react'
import { Table } from 'react-bootstrap'
class WMSTableSimple extends Component {   
    renderTableHeader() {
        return this.props.HeaderColumns.map((data, index) =>
            <th key={data.id} className={data.class}>{data.text} {index}</th>
        )
    }
    renderTableBody() {

    }
    render() {
        return (
            <Table size='sm' responsive style={{fontSize: '75%'}}>
                <thead className='table-light'>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </Table>
        )
    }
}

export default WMSTableSimple;