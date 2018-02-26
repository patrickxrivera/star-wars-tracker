const sel = (id) => {
  return `[data-test="${id}"]`;
};

const simulateClick = (element) => {
  return element.simulate('click');
};

export { sel, simulateClick };
