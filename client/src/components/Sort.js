import React from 'react';
import {Row ,Form} from 'react-bootstrap';
function Sort (props) {

    return (
        <div>
        <Row style={{ marginTop :15}}>

<Form.Select aria-label="Default select example" defaultValue={" Sort By :"} onChange={props.handleSort}>
  <option disabled value={" Sort By :"}>Sort By : Price</option>
  <option value="toHeight">Price : Low to High</option>
  <option value="toLow"> Price : High to low</option>
</Form.Select>
        </Row>
        </div>
      );
    
}
export default  Sort;




            