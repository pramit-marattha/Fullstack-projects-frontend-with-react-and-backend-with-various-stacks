const sidebarStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "10",
    right: "5px",
  },
  sidebarContainer: {
    marginTop: "20px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  newNoteInput: {
    width: "50%",
    margin: "30px",
    height: "35px",
    outline: "none",
    borderRadius: "9px",
    backgroundColor: "rgba(126, 235, 218, 0.483)",
    border: "none",
    fontFamily: '"Finger Paint", cursive;',
    color: "black",
    paddingLeft: "1px",
    "&:focus": {
      outline: "2px solid rgba(81, 203, 238, 1)",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#28787c",
    borderRadius: "10px",
    color: "white",
  },
});

export default sidebarStyles;
