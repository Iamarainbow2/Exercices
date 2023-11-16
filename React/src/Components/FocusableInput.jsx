
import { Form, FormControl, Button } from 'react-bootstrap';

const FocusableInput = () => {
  return (
    <div className="container mt-4">
      <h2>Styled Focusable Input</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter text:</Form.Label>
          <FormControl type="text" placeholder="Type something" />
          <Form.Text className="text-muted">
            We'll never share your text with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FocusableInput;
