import React from "react";

// Component imports:
import AdminListItem from "../AdminListItem/AdminListItem";

const AdminList = (props) => {
  return (
    <tbody>
      {props.feedback.map((reflection) => (
        <AdminListItem reflection={reflection} />
      ))}
    </tbody>
  )
}

export default AdminList;