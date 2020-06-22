import React from "react";

const AdminListItem = (props) => {
  return (
    <tr>
      <td>{props.reflection.feeling}</td>
      <td>{props.reflection.understanding}</td>
      <td>{props.reflection.support}</td>
      <td>{props.reflection.comments}</td>
      <td>Button here</td>
    </tr>
  )
}

export default AdminListItem