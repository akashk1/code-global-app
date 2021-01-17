import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { DataGrid } from "@material-ui/data-grid";
import classes from "./User.module.css";
import MoneyIcon from "../../Images/4475671331582800511.svg";
import BetIcon from "../../Images/roulette.svg";
import TrophyIcon from "../../Images/Trophy.svg";
function getImage(params) {
  return `${params.getValue("Profile Image")} `;
}

const columns = [
  { field: "Name", headerName: "Player Name", width: 300 },
  {
    field: "level",
    headerName: "Level",
    type: "number",
    width: 120,
  },
  {
    field: "Profile Image",
    headerName: "Avatar",
    sortable: false,
    width: 120,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return <Avatar src={getImage(params)} />;
    },
  },
  {
    field: "Bet",
    headerName: (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Avatar
          src={BetIcon}
          style={{
            marginTop: "37px",
            width: "23px",
            height: "23px",
            marginRight: "8px",
          }}
        />
        <h5>Bet</h5>
      </div>
    ),
    type: "number",
    width: 120,
  },
  {
    field: "wins",
    headerName: (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Avatar
          src={TrophyIcon}
          style={{
            marginTop: "37px",
            width: "23px",
            height: "23px",
            marginRight: "8px",
          }}
        />
        <h5>Wins</h5>
      </div>
    ),
    type: "number",
    width: 120,
  },
  {
    field: "lost",
    headerName: "Lost",
    type: "number",
    width: 120,
  },
  {
    field: "Price",
    headerName: (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Avatar
          src={MoneyIcon}
          style={{
            marginTop: "37px",
            width: "23px",
            height: "23px",
            marginRight: "8px",
          }}
        />
        <h5>Price</h5>
      </div>
    ),
    type: "number",
    width: 120,
  },
];

export default function DataTable(props) {
  const rows = [];
  const [lost, setLost] = useState(0);
  const [wins, setWins] = useState(0);
  const [level, setLevel] = useState(0);
  const [selected, setSelected] = useState([]);
  props.users.map((user, index) => {
    rows.push({ ...user, id: index, wins: wins, lost: lost, level: level });
  });
  const handleSelection = (e) => {
    const copy = [...selected];
    copy.push(rows[e.rowIds[e.rowIds.length - 1]]);
    setSelected(copy);
    props.getSelected(selected);
    console.log(selected);
  };
  return (
    <div className={classes.container}>
      <div style={{ height: 830, width: "100%" }}>
        <DataGrid
          onSelectionChange={handleSelection}
          rows={rows}
          showMenuIconButton={false}
          columns={columns}
          pageSize={rows.length}
          checkboxSelection
        />
      </div>
    </div>
  );
}
