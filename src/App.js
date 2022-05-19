import './App.css';
import {Button, Container, Row, Col, InputGroup, FormControl,ButtonGroup,DropdownButton,Dropdown, Table } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard,faFileExport,faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { useRef,useState } from 'react'
import axios from 'axios'
import numeral from 'numeral'
import WMSTableSimple from './components/WMSTableSimple'

function App() {
  const endpoint = process.env.REACT_APP_API_ENDPOINT+'/wms/SER/conversion_test'
  const btnSearch = useRef()
  const ajuDate = useRef()
  const ajuDate2 = useRef()
  const model = useRef()
  const nomorAju = useRef()
  const tblMain = useRef() 
  const [childata, setChildata] = useState([ 
    {id : 'NOMORAJU', class : '', text : 'Nomor Aju'},
    {id : 'MODELCODE', class : '', text : 'Model Code'}, 
    {id : 'MODELQTY', class : 'text-end', text : 'Model Qty'},
    {id : 'PARTCODE', class : '', text : 'Part Code'}, 
    {id : 'PER', class : 'text-end', text : 'PER'},    
    {id : 'PARTNAME', class : '', text : 'Part Description'}, 
  ])
  const [bodydata, setBodydata] = useState([
    { 
      MODELCODE : '12333828',
      NOMORAJU : 'AJU123',
      PARTCODE : '22238839',
      MODELQTY : 50,
      PARTNAME : 'RESISTOR',
      PER : 1,
    },
    { 
      NOMORAJU : 'AJU124',
      MODELCODE : '12333829',
      MODELQTY : 45,
      PARTNAME : 'HEATSINK',
      PARTCODE : '22238837',
      PER : 2,
    },
  ])
  function getData() {
    setChildata(() => {
      return  [
        {id : 'NOMORAJU', class : '', text : 'Nomor Aju'},
        {id : 'MODELCODE', class : '', text : 'Model Code'}, 
        {id : 'MODELQTY', class : 'text-end', text : 'Model Qty'},
        {id : 'PARTCODE', class : '', text : 'Part Code'}, 
        {id : 'PER', class : 'text-end', text : 'PER'},    
        {id : 'PARTNAME', class : '', text : 'Part Description'}, 
      ]
    })    
    setBodydata(() => {
      return  [
        { 
          NOMORAJU : 'AJU125',
          MODELCODE : '12333829',
          MODELQTY : 45,
          PARTNAME : 'HEATSINK',
          PARTCODE : '22238837',
          PER : 2,
        },
      ]
    })    
    
    // btnSearch.current.disabled = true
    // btnSearch.current.innerHTML = 'Please wait'
    // const tblMainBody = tblMain.current.getElementsByTagName('tbody')[0]
    // let newrow, newcell
    // tblMainBody.innerHTML = ''
    // axios.get(endpoint, {params: {
    //   ajuDate: ajuDate.current.value
    //   , model: model.current.value
    //   , nomoraju: nomorAju.current.value
    //   , ajuDate2: ajuDate2.current.value}}
    // ).then(res => {
    //   btnSearch.current.disabled = false
    //   btnSearch.current.innerHTML = 'Search'
    //   for(let i=0;i<res.data.data.length; i++){        
    //     newrow = tblMainBody.insertRow(-1)
    //     newcell = newrow.insertCell(0)       
    //     newcell.innerHTML = res.data.data[i].DLV_ZNOMOR_AJU
    //     newcell = newrow.insertCell(1)
    //     newcell.innerHTML = res.data.data[i].SER_ITMID
    //     newcell = newrow.insertCell(2)
    //     newcell.innerHTML = numeral(res.data.data[i].DLVQT).format(',')
    //     newcell = newrow.insertCell(3)
    //     newcell.innerHTML = res.data.data[i].SERD2_ITMCD
    //     newcell = newrow.insertCell(4)
    //     newcell.innerHTML = res.data.data[i].PARTDESCRIPTION
    //     newcell = newrow.insertCell(5)
    //     newcell.innerHTML = res.data.data[i].PER*1
    //     newcell = newrow.insertCell(6)
    //     newcell.innerHTML = numeral(res.data.data[i].RMQT).format(',')
    //     newcell = newrow.insertCell(7)
    //     newcell.innerHTML = res.data.data[i].PPSN1_BOMRV  
    //   }
    // }).catch(function(error) {
    //   btnSearch.current.disabled = false
    //   btnSearch.current.innerHTML = 'Search'
    //   console.log(error)
    // })   
  }
  return (
    <div style={{padding : 10}}>
      <Container fluid>
        <Helmet>
          <title>Uji Konversi</title>
        </Helmet>
        <Row>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Date [from]</InputGroup.Text>
              <FormControl ref={ajuDate}/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Date [to]</InputGroup.Text>
              <FormControl ref={ajuDate2}/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Nomor Aju</InputGroup.Text>
              <FormControl ref={nomorAju}/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Model Code</InputGroup.Text>
              <FormControl ref={model}/>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-12 mb-1'>
            <ButtonGroup size="sm">
              <Button variant="primary" onClick={getData} ref={btnSearch}>Search</Button>
              <DropdownButton variant="secondary" size="sm" as={ButtonGroup} title={<FontAwesomeIcon icon={faFileExport} />} id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1"><span style={{color: 'MediumSeaGreen'}}><FontAwesomeIcon icon={faFileExcel} /></span> Spreadsheet</Dropdown.Item>
                <Dropdown.Item eventKey="2"><FontAwesomeIcon icon={faClipboard} /> Clipboard</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-12 mb-1'>
            <WMSTableSimple HeaderColumns={childata} BodyColumns={bodydata}/>            
            {/* <Table size='sm' responsive style={{fontSize: '75%'}} ref={tblMain}>
              <thead className='table-light'>
                <tr>
                  <th  className="align-middle ">Nomor Aju</th>
                  <th  className="align-middle ">Model Code</th>
                  <th  className="align-middle text-end">Model Qty</th>
                  <th  className="align-middle ">Part Code</th>
                  <th  className="align-middle ">Part Description</th>
                  <th  className="align-middle text-center">PER</th>
                  <th  className="align-middle text-end">Part Qty</th>
                  <th  className="align-middle text-center">Bom Revision</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </Table> */}
          </Col>
        </Row>
      </Container>
    </div>    
  );
  
}
export default App;