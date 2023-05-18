import { statusList } from "../../data/statusList";
import style from "./FilterBlock.module.scss";

function FilterBlock({ todoElements, selectFilterHandler }) {
  const selectFilter = (value) => {
    selectFilterHandler(value);
  };
  return (
    <div className={style.filterBlock}>
      <div className="{style.filterBlock__title}">Filter</div>
      <div className={style.filterBlock__item}>
        <button key="All tasks" onClick={() => selectFilterHandler("All tasks")}>
          All tasks
        </button>

        {statusList
          .filter((status, index, self) => {
            return index === self.findIndex((s) => s.value === status.value);
          })
          .map((status) =>
            todoElements.some((todoElement) => todoElement.statusTask === status.value) ? (
              <button key={status.value} onClick={() => selectFilter(status.value)}>
                {status.label}
              </button>
            ) : null
          )}
      </div>
    </div>
  );
}

export default FilterBlock;
