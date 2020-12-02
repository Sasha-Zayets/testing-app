const dataTable = (data) => {
  const result = data.map(item => {
    if (item.checked) {
      const resultData = item.machines.map(machine => {
        if (machine.checked) {
          let sumActive = 0;
          let sumCommon = 0;
          let unactiveSum = 0;
          let sumMovement = 0;
          machine.workers.forEach(el => {
            if (el.checked) {
              sumActive += el.active;
              sumCommon += el.common;
              unactiveSum += el.unactive;
              sumMovement += el.movement;
            }
          });

          return {
            ...machine,
            sumActive,
            sumCommon,
            unactiveSum,
            sumMovement,
          }
        }

        return {
          ...machine,
          sumActive: 0,
          sumCommon: 0,
          unactiveSum: 0,
          sumMovement: 0,
        }
      });

      let sumActive = 0;
      let sumCommon = 0;
      let unactiveSum = 0;
      let sumMovement = 0;
      resultData.forEach(el => {
        if (el.checked) {
          sumActive += el.sumActive;
          sumCommon += el.sumCommon;
          unactiveSum += el.unactiveSum;
          sumMovement += el.sumMovement;
        }
      });

      return {
        ...item,
        sumActive,
        sumCommon,
        unactiveSum,
        sumMovement,
        machines: resultData,
      }
    }

    const machines = item.machines.map((el) => ({
      ...el,
      sumActive: 0,
      sumCommon: 0,
      unactiveSum: 0,
      sumMovement: 0,
    }));

    return {
      ...item,
      machines,
      sumActive: 0,
      sumCommon: 0,
      unactiveSum: 0,
      sumMovement: 0,
    };
  });

  let sumActive = 0;
  let sumCommon = 0;
  let unactiveSum = 0;
  let sumMovement = 0;

  result.forEach(item => {
    if (item.checked) {
      sumActive += item.sumActive;
      sumCommon += item.sumCommon;
      unactiveSum += item.unactiveSum;
      sumMovement += item.sumMovement;
    }
  });

  const totalHeaders = {
    sumActive,
    sumCommon,
    unactiveSum,
    sumMovement,
  };

  return {
    table: result,
    totalHeaders,
  }
}

export default dataTable;
