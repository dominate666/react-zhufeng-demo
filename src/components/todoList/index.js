import React, { useCallback, useEffect, useState } from "react";
import MyHeader from "./header";
import AddInput from "./addInput";
import TodoItem from "./todoItem";
import CheckModal from "@/components/Modal/CheckModal";
import EditModal from "@/components/Modal/EditModal";

export default function TodoList() {
  let [title, setTitle] = useState("待办事项");
  let [todoList, setTodoList] = useState([]);
  let [isInputShow, setInputShow] = useState(true);
  let [isShowCheckModal, setShowCheckModal] = useState(false);
  let [isShowEditModal, setShowEditModal] = useState(false);
  let [currentData, setCurrentData] = useState({});
  useEffect(() => {
    let todoData = JSON.parse(localStorage.getItem("todoData") || "[]");
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);
  let addItem = useCallback((value) => {
    let dataItem = {
      id: Date.now(),
      content: value,
      completed: false,
    };
    // @ts-ignore
    setTodoList((todoList) => [...todoList, dataItem]);

    setInputShow(false);
  }, []);

  let openCheckModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id);
      setShowCheckModal(true);
    },
    [todoList]
  );

  let openEditModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id);
      setShowEditModal(true);
    },
    [todoList]
  );

  let submitEdit = useCallback((newData, id) => {
    console.log("todoList", Array.isArray(todoList));
    setTodoList((todoList) => {
      todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      });
    });

    setShowEditModal(false);
  }, []);

  function _setCurrentData(todoList, id) {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
  }

  return (
    <div>
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        data={currentData}
        closeModal={() => setShowCheckModal(false)}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <MyHeader title={title} openInput={() => setInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul className="todo-list">
        {Array.isArray(todoList) &&
          todoList.map((item, index) => {
            return (
              <TodoItem
                data={item}
                key={index}
                openCheckModal={openCheckModal}
                openEditModal={openEditModal}
              />
            );
          })}
      </ul>
    </div>
  );
}
