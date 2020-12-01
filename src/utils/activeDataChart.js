const activeDataChart = (data) => {
  const resultData = [];
  data.forEach((item) => {
    item.machines.forEach((el) => {
      if (el.checked) {
        let sumValue = 0;
        el.workers.forEach((work) => {
          sumValue += work.active;
        });

        resultData.push({
          ...el,
          sumValue,
        });
      }
    });
  });

  return resultData;
};

export default activeDataChart;
