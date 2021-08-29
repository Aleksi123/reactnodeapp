import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getTodos } from "../actions/todoActions";

const TodoList = (props) => {
  useEffect(() => {
    props.getTodos();
  }, []);

  const { todos } = props.todo;
  return (
    <div>
      <ListGroup>
        {todos.map(({ id, title, content }) => (
          <ListGroupItem key={id}>
            <h4>{title}</h4>
            {content}
            <Button variant="primary">Edit Todo</Button>
            <Button variant="danger">Delete Todo</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos })(TodoList);
