// BOOTSTRAP

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function SetRegion(){
  return (
    <div className="set-region">
      <select className="form-select" name="Country" id="">
        <option value="UK">UK</option>
      </select>
      <input className="form-control" type="text" placeholder="search city..." />
    </div>
    // <Container>
    //   <Row>
    //     <Col md={{ span: 4, offset: 4 }} className="set-region my-5">
    //       <select className="form-select" name="Country" id="">
    //         <option value="UK">UK</option>
    //       </select>
    //       <input className="form-control" type="text" placeholder="search city..." />
    //     </Col>
    //   </Row>
    // </Container>
    
  )
}