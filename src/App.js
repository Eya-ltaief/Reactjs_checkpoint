import './App.css';
// right side image
import user from './user.jpg';
// react bootstrap
import { Button, Navbar , Form ,Nav , Col} from 'react-bootstrap';
//css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar bg="light fixed-top" variant="primary">
        <Navbar.Brand  style={{color:"black", fontWeight:"600"}}>Welcome</Navbar.Brand>
          <Nav  style={{fontSize:"20px",marginLeft:"80%"}}>
            <Navbar.Brand href="#home"style={{color:"gray", fontWeight:"600"}}>Home</Navbar.Brand>
            <Navbar.Brand href="#features" style={{color:"blue", fontWeight:"600"}}>Sign In</Navbar.Brand>  
          </Nav>
      </Navbar>
      <div className="form">
        <Form  style={{width:"40%", marginLeft:"50%", marginTop:"8%", fontSize:"20px"}} >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{position:"relative", bottom:"-20%"}} >Email</Form.Label>
              <hr/>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{position:"relative", bottom:"-20%"}} >Password</Form.Label>
              <hr/>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridAddress1" style={{width:"100%"}}>
              <Form.Label style={{position:"relative", bottom:"-20%"}} >Address</Form.Label>
              <hr/>
              <Form.Control placeholder="Kairouan, Tunisia" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridNumber" style={{width:"100%"}}>
              <Form.Label style={{position:"relative", bottom:"-20%"}} >Phone number</Form.Label>
              <hr/>
              <Form.Control placeholder="Enter your phone number" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={{position:"relative", bottom:"-20%"}} >City</Form.Label>
              <hr/>
              <Form.Control placeholder="City name"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label style={{position:"relative", bottom:"-20%"}} >State</Form.Label>
              <hr/>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Tunis</option>
                <option>Kairouan</option>
                <option>Sousse</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label style={{position:"relative", bottom:"-20%"}} >Zip</Form.Label>
              <hr/>
              <Form.Control placeholder="Enter your code postal" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit" id="button" style={{ marginLeft:"25%", width:"50%",marginTop:"2%"}}>
            Submit
          </Button>
          <div class="text-center w-100" style={{ fontWeight:"400",paddingTop:"2%"}}>
              <p class="text-muted">Already Registered? <h3 href="#" class="text-primary ml-2">Login</h3></p>
          </div>
        </Form>
      </div>
      <div><img src={user} style={{width:"32%",height:"550px", marginLeft:"10%", marginTop:"-55%"}} alt="user"/> </div>
    </div>
  );
}
export default App;
