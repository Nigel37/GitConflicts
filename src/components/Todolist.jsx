import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Check } from "lucide-react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <Card className="w-full max-w-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Lägg till en todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={addTodo}>Lägg till</Button>
        </div>

        <CardContent className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-white p-3 rounded-xl shadow"
            >
              {editingId === todo.id ? (
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span
                  className={`text-lg ${
                    todo.done ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}

              <div className="flex gap-2">
                {editingId === todo.id ? (
                  <Button size="icon" onClick={() => saveEdit(todo.id)}>
                    <Check />
                  </Button>
                ) : (
                  <Button size="icon" onClick={() => startEditing(todo)}>
                    <Pencil />
                  </Button>
                )}

                <Button size="icon" onClick={() => toggleDone(todo.id)}>
                  <Check />
                </Button>

                <Button size="icon" variant="destructive" onClick={() => deleteTodo(todo.id)}>
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
