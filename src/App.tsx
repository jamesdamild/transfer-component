import { Button, Col, Divider, Modal, Row } from "antd";
import { PersonsList } from "./components/PersonsList";
import { persons_can_be_added, persons_can_be_removed } from "./DataSet2";
//import { persons_can_be_added, persons_can_be_removed } from "./DataSet";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personsToBeAdded, addPerson] =
    useState<unknown[]>(persons_can_be_added);
  const [personsToBeRemoved, removePerson] = useState<unknown[]>(
    persons_can_be_removed
  );
  const [filterPersonsToBeAdded, setFilterAddPerson] = useState<any[]>([]);
  const [filterPersonsToBeRemoved, setFilterRemovePerson] = useState<any[]>([]);

  /*  to allow dynamic keys in component */
  const displayKeys = ["displayName", "informations"];
  const uniqueKey="person_id";

  const showModal = () => {
    setIsModalOpen(true);
  };
  const addOrRemovePerson = (person: any, actionType: string) => {
    /* Here we do a deepCopy of the object to prevent it changing original object  */
    const deepCopyPerson = JSON.parse(JSON.stringify(person));
    if (actionType === "add") {
      let filterPersonToBeAdded = personsToBeAdded.filter(
        (data: any) => data[uniqueKey] !== person[uniqueKey]
      );
      deepCopyPerson.color = "#e9efeb";
      removePerson([...personsToBeRemoved, deepCopyPerson]);
      addPerson([...filterPersonToBeAdded]);
    } else {
      let filterPersonToBeRemoved = personsToBeRemoved.filter(
        (data: any) => data[uniqueKey] !== person[uniqueKey]
      );
      deepCopyPerson.color = "#fee3e2";
      addPerson([...personsToBeAdded, deepCopyPerson]);
      removePerson([...filterPersonToBeRemoved]);
    }
  };

  const handleSetFilteredData = (actionType: string, value: string) => {
    if (actionType === "add") {
      const filterAddPerson = value
        ? personsToBeAdded.filter((person: any) =>
            person[displayKeys[0]].toLowerCase().includes(value.toLowerCase())
          )
        : [];
      setFilterAddPerson(filterAddPerson);
    } else {
      const filterRemovePerson = value
        ? personsToBeRemoved.filter((person: any) =>
            person[displayKeys[0]].toLowerCase().includes(value.toLowerCase())
          )
        : [];
      setFilterRemovePerson(filterRemovePerson);
    }
  };

  const handleReset = () => {
    addPerson(persons_can_be_added);
    removePerson(persons_can_be_removed);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showAddRemovedPersons = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredAddPeople = personsToBeAdded.filter((person) => {
        return (
          typeof person === "object" && person !== null && "color" in person
        );
      });

      const filteredRemovePeople = personsToBeRemoved.filter((person) => {
        return (
          typeof person === "object" && person !== null && "color" in person
        );
      });
      console.log(
        `Items Added:${JSON.stringify(
          filteredAddPeople
        )} and Items removed: ${JSON.stringify(filteredRemovePeople)}`
      );
      setLoading(false);
    }, 3000); // 3 seconds delay
  };

  return (
    <StyledContainer>
      <Row gutter={16}>
        <Col span={12}>
          <PersonsList
            title="Can be Added"
            persons={
              filterPersonsToBeAdded.length > 0
                ? filterPersonsToBeAdded
                : personsToBeAdded
            }
            actionType="add"
            transferPerson={addOrRemovePerson}
            setFilteredData={handleSetFilteredData}
            displayKeys={displayKeys}
            uniqueKey={uniqueKey}
          />
        </Col>
        <Col span={12}>
          <PersonsList
            title="Can be Removed"
            persons={
              filterPersonsToBeRemoved.length > 0
                ? filterPersonsToBeRemoved
                : personsToBeRemoved
            }
            actionType="remove"
            transferPerson={addOrRemovePerson}
            setFilteredData={handleSetFilteredData}
            displayKeys={displayKeys}
            uniqueKey={uniqueKey}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify="end" gutter={8}>
        <Button size="large" type="link" onClick={showModal}>
          Reset
        </Button>
        <Button
          loading={loading}
          size="large"
          type="primary"
          onClick={showAddRemovedPersons}
        >
          Save
        </Button>
      </Row>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleReset}
        okText="Reset"
        onCancel={handleCancel}
        cancelText="Cancel"
      >
        <p>Do you want to reset the data?</p>
      </Modal>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 1em 2em;
`;

export default App;
