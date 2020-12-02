import React from 'react';
import Checkbox from '../Checkbox';
import ToggleComponents from '../ToggleComponents';
import {
  Wrapper,
  BortsWrapper,
  WorkerWrapper,
  HeaderTable,
  TableTd,
} from './styles';
import Table from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeData, changeDataWorker } from '../../store/dataActions';

const oneHeaderData = ['20.57', '17:03:00', '6:35:00', '10:28:00'];

const headers = [
  {
    name: 'Эффективность'
  },
  {
    name: 'Активен'
  },
  {
    name: 'Работа'
  },
  {
    name: 'Простой'
  },
];

const TableHeader = ({ item }) => (
  <>
    <TableTd>Техника</TableTd>
    <TableTd>{ item.sumCommon }</TableTd>
    <TableTd>{ item.sumActive }</TableTd>
    <TableTd>{ item.sumMovement }</TableTd>
    <TableTd>{ item.unactiveSum }</TableTd>
  </>
);

const WorkerHeader = ({ item }) => (
  <>
    <TableTd>{ item.common }</TableTd>
    <TableTd>{ item.active }</TableTd>
    <TableTd>{ item.movement }</TableTd>
    <TableTd>{ item.unactive }</TableTd>
  </>
);

const OtherTdHeaderRender = ({ data }) => {
  return (
    <>
      <TableTd>{ data.sumCommon }</TableTd>
      <TableTd>{ data.sumActive }</TableTd>
      <TableTd>{ data.sumMovement }</TableTd>
      <TableTd>{ data.unactiveSum }</TableTd>
    </>
  )
};

const HeaderRender = ({ handleChange, data, type }) => {
  return (
    <>
      <Checkbox checked={data.checked} onChange={(e) => handleChange(e, data, type)} />
      <span>
        { data.name }
      </span>
    </>
  )
};

const WorkerRender = ({ data }) => {
  const dispatch = useDispatch();

  const handleChange = (checked, data, type) => {
    dispatch(changeDataWorker(checked, data, type));
  };

  return (
    <WorkerWrapper>
      {
        data.map((item) => (
          <ToggleComponents
            key={item.name}
            showButton={false}
            headerRender={() => (
              <HeaderRender
                parentData={data}
                data={item}
                style={{ width: 320 }}
                type="worker"
                handleChange={handleChange}
              />
            )}
            blockHeaderStyles={{ width: 280 }}
            renderHeaderOthers={() => (
              <WorkerHeader item={item} />
            )}
          >
          </ToggleComponents>
        ))}
    </WorkerWrapper>
  )
}

const RenderBort = ({ data }) => {
  const dispatch = useDispatch();

  const handleChange = (checked, data, type) => {
    dispatch(changeDataWorker(checked, data, type));
  };

  return (
    <BortsWrapper>
      {
        data.map((item) => (
          <ToggleComponents
            key={item.name}
            headerRender={() => (
              <HeaderRender
                data={item}
                type="bort"
                handleChange={handleChange}
              />
            )}
            blockHeaderStyles={{ width: 320 }}
            renderHeaderOthers={() => (
              <OtherTdHeaderRender data={item} />
            )}
          >
            <WorkerRender data={item.workers} />
          </ToggleComponents>
        ))}
    </BortsWrapper>
  )
};

const TableWrapper = ({ data }) => {
  const dispatch = useDispatch();

  const handleChange = (checked, data, type) => {
    dispatch(changeDataWorker(checked, data, type));
  };

  return (
    <Wrapper>
      <Table headerRender={() => (
        <TableHeader item={data.totalHeaders} />
      )}>
      {
        data.table.map((item) => (
          <React.Fragment key={item.name}>
            <ToggleComponents
              active={item.active}
              headerRender={() => (
                <HeaderRender
                  data={item}
                  type="global"
                  handleChange={handleChange}
                />
              )}
              renderHeaderOthers={() => (
                <OtherTdHeaderRender data={item} />
              )}
            >
              <RenderBort data={item.machines} />
            </ToggleComponents>
          </React.Fragment>
        ))
      }
      </Table>
    </Wrapper>
  )
};

export default TableWrapper;
