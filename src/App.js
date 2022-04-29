import './App.css';
import {Button, Container, Row, Col, InputGroup, FormControl,ButtonGroup,DropdownButton,Dropdown, Table } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard,faFileExport,faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function App() {
  const [dateFrom, setdateFrom] = useState('')
  function simpan(){
    console.log('coba')
    console.log(dateFrom)
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
              <FormControl id='rconv_test_txt_dt' defaultValue={dateFrom} onChange={setdateFrom}/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Date [to]</InputGroup.Text>
              <FormControl id='rconv_test_txt_dt2'/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Nomor Aju</InputGroup.Text>
              <FormControl id='rconv_test_txt_aju'/>
            </InputGroup>
          </Col>
          <Col className='col-md-3 mb-1'>
            <InputGroup size="sm">
              <InputGroup.Text>Model Code</InputGroup.Text>
              <FormControl id='rconv_test_txt_model'/>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-12 mb-1'>
            <ButtonGroup size="sm">
              <Button variant="primary" id="rconv_test_btn_gen" onClick={simpan}>Search</Button>
              <DropdownButton variant="secondary" size="sm" as={ButtonGroup} title={<FontAwesomeIcon icon={faFileExport} />} id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1"><span style={{color: 'MediumSeaGreen'}}><FontAwesomeIcon icon={faFileExcel} /></span> Spreadsheet</Dropdown.Item>
                <Dropdown.Item eventKey="2"><FontAwesomeIcon icon={faClipboard} /> Clipboard</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-12 mb-1'>
            <Table size='sm' responsive style={{fontSize: '75%'}} id="rconv_test_tbl">
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
            </Table>
          </Col>
        </Row>
      </Container>
    </div>    
  );
  
}





export default App;
