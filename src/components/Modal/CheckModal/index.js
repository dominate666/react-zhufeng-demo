import React from "react";
import Modal from "../";
export default function CheckModal(props) {
  let { isShowCheckModal, data, closeModal } = props;
  console.log(data);
  return (
    <Modal isShowModal={isShowCheckModal} modalTitle="查看事件">
      <p>事件:{data.id}</p>
      <p>内容:{data.content}</p>
      <p>状态:{data.completed ? "已完成" : "未完成"}</p>
      <button onClick={closeModal}>确定</button>
    </Modal>
  );
}
