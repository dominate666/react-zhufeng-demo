import React, { useRef } from "react";
import Modal from "..";

export default function EditModal(props) {
  let { isShowEditModal, data, submitEdit } = props;
  let inputRef = useRef();
  let checkRef = useRef();

  let formatNewData = () => {
    let val = inputRef.current.value,
      valLen = val.length;
    if (valLen === 0) {
      inputRef.current.value = data.content;
      return;
    }

    let newData = {
      id: Date.now(),
      content: val,
      completed: checkRef.current.checked,
    };
    submitEdit(newData, data.id);
  };

  return (
    <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
      <p>时间:{data.id}</p>
      <p>
        <textarea ref={inputRef} defaultValue={data.content}></textarea>
      </p>
      <p>
        状态：
        <input
          type="checkbox"
          ref={checkRef}
          defaultValue={data.completed ? true : false}
        />
      </p>

      <button onClick={formatNewData}>提交</button>
    </Modal>
  );
}
