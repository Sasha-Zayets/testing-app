import data from '../json/data';

export const convertJson = () => {
  return data.map((item, index) => {
    const value = (index === 0);

    const machines = item.machines.map((machine, ind) => {
      const activeValue = (ind === 0) && value;
      const workers = machine.workers.map((work) => {
        const workCheck = activeValue && value;
        return {
          ...work,
          checked: workCheck,
        }
      });

      return {
        ...machine,
        workers,
        active: activeValue,
        checked: activeValue,
      }
    });

    return {
      ...item,
      machines,
      checked: value,
      active: value
    }
  });
};