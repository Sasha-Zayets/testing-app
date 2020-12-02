import { convertJson } from "../utils/convertJson";
import activeDataChart from "../utils/activeDataChart";
import dataTable from "../utils/dataTable";
export const CHANGE_GLOBAL = 'CHANGE_GLOBAL';
export const CHANGE_WORKER = 'CHANGE_WORKER';
export const CHANGE_DATA_CHART = 'CHANGE_DATA_CHART';

const data = dataTable(convertJson());
const activeDataChartDefault = activeDataChart(convertJson());
const initialState = {
  data,
  activeDataChart: activeDataChartDefault,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA_CHART:
      return {
        ...state,
        activeDataChart: action.payload,
      }
    case CHANGE_WORKER: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case CHANGE_GLOBAL: {
      const newData = state.data.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...action.payload,
          }
        }
        return item;
      });

      return {
        ...state,
        data: newData,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

export default dataReducer;
