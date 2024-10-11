import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { debounce } from 'lodash'; 

/* Types and components can be adjusted at will
 Generic type T for dynamic types*/

 interface PersonsListProps<T> {
  persons: T[];
  title: string;
  transferPerson: (person: T, type: string) => void;
  setFilteredData: (type: string, value: string) => void;
  actionType: string;
  displayKeys: (keyof T)[]; // Array of keys to display
  uniqueKey: keyof T; // Unique identifier key for person_id or id or else '
}

export const PersonsList = <T extends object>({
  persons,
  title,
  transferPerson,
  setFilteredData,
  actionType,
  displayKeys,
  uniqueKey
}: PersonsListProps<T>) => {
  
   /*Here we pass the person  that has to be add or remove 
     to the parent component
   */ 
  const handlePersonClick=(person:T)=>{
    transferPerson(person,actionType)
  }

  /*Here we use a debounce function from lodash package so we can delay the filtering 
    while the user types in the search bar
  */ 
  const handleSearchPerson = debounce((value:string) => {
     setFilteredData(actionType,value);
   }, 600);
  
  return (
    <div>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Divider />
      <Input.Search placeholder="Search by name" size="large"  onChange={(e)=>handleSearchPerson(e.target.value)}/>
      {persons.map((person: any) => (
        <Row justify="space-between" align="middle" key={person[uniqueKey]} style={{backgroundColor:person.color}}>
          <Col flex="1">      
          {displayKeys.map((key,index:number) => (
            /*Here we set  dynamic keys so this component can accepts any proprties name */
            index===0?<h3 key={key.toString()}>{person[key]}</h3>:<p key={key.toString()}>{person[key]}</p>
            
          ))}      
          </Col>
          <Col flex="120px">
            {/* Add or Remove Action */}
            <Button onClick={()=>handlePersonClick(person)}>Action</Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};
