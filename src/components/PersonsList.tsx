import { Button, Col, Divider, Input, Row, Typography } from "antd";

// Types and components can be adjusted at will
export const PersonsList = ({
  persons,
  title,
}: {
  persons: any;
  title: any;
}) => {
  return (
    <div>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Divider />
      <Input.Search placeholder="Search by name" size="large" />
      {persons.map((person: any) => (
        <Row justify="space-between" align="middle">
          <Col flex="1">
            <h3>{person.name}</h3>
            <p>{person.description}</p>
          </Col>
          <Col flex="120px">
            {/* Add or Remove Action */}
            <Button>Action</Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};
