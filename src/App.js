import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ margin: "20px" }}>
      <TextField
        label="Add a task"
        variant="outlined"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>

      <List style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
                sx={{
                  ":hover": {
                    color: "red",
                  },
                }}
                data-testid="delete_btn"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
