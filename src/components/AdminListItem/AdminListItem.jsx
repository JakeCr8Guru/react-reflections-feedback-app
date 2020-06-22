import React from "react";

const AdminListItem = (props) => {
  return (
    <tr>
      <td>{props.feedback.feeling}</td>
      <td>{props.feedback.understanding}</td>
      <td>{props.feedback.support}</td>
      <td>{props.feedback.comments}</td>
      <td>Button here</td>
    </tr>
  )
}

export default AdminListItem