import { Button, Col, Divider, Row } from "antd";
import { PersonsList } from "./components/PersonsList";
import { persons_can_be_added, persons_can_be_removed } from "./DataSet2";
import styled from "styled-components";

function App() {
  return (
    <StyledContainer>
      <Row gutter={16}>
        <Col span={12}>
          <PersonsList title="Can be Added" persons={persons_can_be_added} />
        </Col>
        <Col span={12}>
          <PersonsList
            title="Can be Removed"
            persons={persons_can_be_removed}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify="end" gutter={8}>
        {/* Action buttons */}
        <Button size="large" type="link">
          Reset
        </Button>
        <Button size="large" type="primary">
          Save
        </Button>
      </Row>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 1em 2em;
`;

export default App;
