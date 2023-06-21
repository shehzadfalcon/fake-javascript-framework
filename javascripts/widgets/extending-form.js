function extendingForm(widget) {
  const extensions = widget.querySelectorAll("[kjs-role=extension]");
  const toggle = widget.querySelector("[kjs-role=toggle]");

  function setup() {}

  const actions = [
    {
      element: toggle,
      event: "change",
      handler: setup,
    },
  ];

  return { setup, actions };
}

module.exports = extendingForm;
