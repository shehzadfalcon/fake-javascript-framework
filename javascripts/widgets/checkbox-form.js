function extendingForm(widget) {
  var checkbox1 = widget.querySelector("[kjs-id=docs_1118]");
  var checkbox2 = widget.querySelector("[kjs-id=docs_1119]");
  var checkbox3 = widget.querySelector("[kjs-id=docs_1120]");

  function handleClick(e) {
    let controlled_checkbox_name = "docs_1118";
    let name = e.target.name;

    if ((name == controlled_checkbox_name) & (checkbox1.checked == true)) {
      checkbox1.checked = true;
      checkbox2.checked = true;
      checkbox3.checked = true;
    } else if (
      (name == controlled_checkbox_name) &
      (checkbox1.checked == false)
    ) {
      checkbox1.checked = false;
      checkbox2.checked = false;
      checkbox3.checked = false;
    } else if (
      checkbox1.checked == true &&
      checkbox2.checked == false &&
      checkbox3.checked == false
    ) {
      checkbox1.checked = false;
    } else if (
      checkbox1.checked == false &&
      checkbox2.checked == true &&
      checkbox3.checked == true
    ) {
      checkbox1.checked = true;
    }
  }
  var actions = [
    {
      element: checkbox1,
      event: "click",
      handler: handleClick,
    },
    {
      element: checkbox2,
      event: "click",
      handler: handleClick,
    },
    {
      element: checkbox3,
      event: "click",
      handler: handleClick,
    },
  ];
  return {
    // setup: setup,
    actions: actions,
  };
}

module.exports = extendingForm;
