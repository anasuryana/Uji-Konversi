import { Component } from 'react'
import { Table } from 'react-bootstrap'
class WMSTableSimple extends Component {   
    renderTableHeader() {
        return this.props.HeaderColumns.map((data, index) =>
            <th key={data.id} className={data.class}>{data.text}</th>
        )
    }
    renderTableBody() {
        const nObj = {}
        for(let data in this.props.HeaderColumns){
            nObj[this.props.HeaderColumns[data].id] = ''
        }
        let newBody = []
        this.props.BodyColumns.map((datab) => {
            const oKey = Object.keys(datab)
            const xObj = JSON.parse(JSON.stringify(nObj))
            for (let vv in oKey) {
                for (let i in xObj) {
                    if(i===oKey[vv]){
                        xObj[i] = datab[i]
                        break
                    }
                }
            }
            newBody.push(xObj)
            return 1
        })        
        return newBody.map((data, index) =>
            <tr key={index}>
                {                    
                    Object.keys(data).map((ik,index2) => {
                        for(let k in this.props.HeaderColumns) {
                            console.log(this.props.HeaderColumns[k])
                        }
                        return <td key={index2}>{data[ik]}</td>
                    })
                }
            </tr>
        )
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