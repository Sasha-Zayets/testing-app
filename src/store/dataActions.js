import {
  CHANGE_GLOBAL,
  CHANGE_WORKER,
  CHANGE_DATA_CHART,
} from './dataReducer';
import activeDataChart from "../utils/activeDataChart";
import dataTable from "../utils/dataTable";

export const changeData = (payload) => ({
  type: CHANGE_GLOBAL,
  payload,
});

export const changeDataValue = (payload) => ({
  type: CHANGE_WORKER,
  payload,
});

export const changeChartData = (payload) => ({
  type: CHANGE_DATA_CHART,
  payload,
});

export const changeDataWorker = (checked, data, type) => (dispatch, getState) => {
  try {
    const store = getState();

    if (type === 'global') {
      const newStore = store.data.table.map(item => {
        const machines = item.machines.map(el => {
          const workers = el.workers.map(work => ({
            ...work,
            checked,
          }));

          return {
            ...el,
            workers,
            checked,
            active: checked,
          }
        });

        if (item.name === data.name) {
          return {
            ...item,
            machines,
            checked,
            active: checked,
          }
        }

        return item;
      });

      dispatch(changeDataStore(newStore));
    }

    if (type === 'bort') {
      const findBort = store.data.table.find((item) => {
        const findIndex = item.machines.findIndex(el => el.id === data.id);
        return findIndex > -1;
      });

      const newWorkers = data.workers.map((item) => ({
        ...item,
        checked,
      }));
      const newData = {
        ...data,
        workers: newWorkers,
        checked,
      };

      findBort.machines = findBort.machines.map((item) => {
        if (item.name === data.name) {
          return {
            ...newData,
          }
        }
        return item;
      });

      const newStore = store.data.table.map(item => {
        if (item.name === findBort.name) {
          return findBort;
        }
        return item;
      });

      dispatch(changeDataStore(newStore));
    }

    if (type === 'worker') {
      let machineIndex = 0;
      const findElement = store.data.table.find(item => {
        const findMachine = item.machines.findIndex((machine, index) => {
          const findIndex = machine.workers.findIndex(el => el.name === data.name && el.rfid === data.rfid);

          if (findIndex > -1) {
            machineIndex = index;
            return true;
          }
        });

        return findMachine > -1;
      });

      const newWorkers = findElement.machines[machineIndex].workers.map(item => {
        if (item.name === data.name) {
          return {
            ...item,
            checked,
          }
        }
        return item;
      });

      findElement.machines[machineIndex].workers = newWorkers;
      const findCheck = findElement.machines[machineIndex].workers.findIndex(item => item.checked === true);
      if (findCheck > -1) {
        const machinesArray = findElement.machines.map((item, index) => {
          if (index === machineIndex) {
            return {
              ...item,
              checked: true
            }
          }

          return item;
        });
        findElement.machines = machinesArray;

        const newStore = store.data.table.map(item => {
          if (item.name === findElement.name) {
            return findElement;
          }
          return item;
        });

        dispatch(changeDataStore(newStore));
      } else {
        const machinesArray = findElement.machines.map((item, index) => {
          if (index === machineIndex) {
            return {
              ...item,
              checked: false,
            }
          }

          return item;
        });

        findElement.machines = machinesArray;
        const newStore = store.data.table.map(item => {
          if (item.name === findElement.name) {
            return findElement;
          }
          return item;
        });

        dispatch(changeDataStore(newStore));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

const changeDataStore = (newStore) => (dispatch) => {
  const result = activeDataChart(newStore);
  const newData = dataTable(newStore);

  dispatch(changeChartData(result));
  dispatch(changeDataValue(newData));
}
