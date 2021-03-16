import React, { useEffect } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';

const TodoList = (props) => {

  useEffect(() => {      
    props.getTodos();
    },[]);

    const { todos } = props.todo;
    return (
      <div>
        <ListGroup>
            {todos.map(({ id, title, content }) => (
                <ListGroupItem key={id}>
                  {title}{content}
                </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    )
  }

const mapStateToProps = (state) => ({
  todo: state.todo
})

export default connect(mapStateToProps, { getTodos })(TodoList);
