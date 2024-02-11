"use client";

import { useState } from "react";
import { HandleDelete } from "@helpers/actions";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularProgres from "./CircularProgress";

export default function CardMenu({ topic_id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleDelete() {
    handleClose();
    setIsLoading(true);
    const id = topic_id;
    await HandleDelete(id);
    setIsLoading(false);
  }

  return (
    <div className="absolute top-2 right-0">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {isLoading ? <CircularProgres /> : <MoreVertIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom", // Align the top of the menu with the bottom of the anchor element
          horizontal: "right", // Align the menu to the right of the anchor element
        }}
        transformOrigin={{
          vertical: "top", // Transform the menu from the top
          horizontal: "right", // Transform the menu from the right
        }}
      >
        <MenuItem onClick={handleClose}>Assign</MenuItem>
        <MenuItem onClick={handleClose}>Update</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
