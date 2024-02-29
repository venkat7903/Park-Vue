import React from "react";

const SelectedContext = React.createContext({
  selectedList: [{}],
  setSelectedList: () => {},
});

export default SelectedContext;
