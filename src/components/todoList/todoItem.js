import React from "react";

export default function TodoItem(props) {
  let { data, openCheckModal, openEditModal } = props;
  let handleChange = () => {};
  return (
    <li className="todo-item" style={{ display: "flex" }}>
      <div className="check-box">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />
        <span
          className="content"
          style={{ textDecoration: data.completed ? "line-through" : "none" }}
        >
          {data.content}
        </span>
      </div>

      <div className="btn-group">
        <button onClick={() => openCheckModal(data.id)}>查看</button>
        <button onClick={() => openEditModal(data.id)}>编辑</button>
        <button>删除</button>
      </div>
    </li>
  );
}
