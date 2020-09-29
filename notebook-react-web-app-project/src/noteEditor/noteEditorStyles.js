const noteEditorStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "calc(100% - 300px)",
    backgroundColor: "rgb(106, 163, 137)",
    borderRadius: "20px",
    color: "white",
    paddingLeft: "50px",
    fontFamily: '"Finger Paint", cursive;',
  },
  editIcon: {
    position: "absolute",
    left: "310px",
    down: "6px",
    color: "white",
    width: "10",

    height: "10",
  },
  editorContainer: {
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "rgba(165, 211, 195, 0.483);",
  },
});

export default noteEditorStyles;
