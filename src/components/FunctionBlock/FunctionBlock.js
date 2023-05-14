import style from "./FunctionBlock.module.scss";

function FunctionBlock({deleteTodoDone, deleteTodoAll}) {
    const deleteDone = () => {
      deleteTodoDone();
    };
  
    const deleteAll = () => {
      deleteTodoAll();
    };

  return (
    <div className={style.functionBlock}>
      <button className={style.buttonDeleteDone} onClick={deleteDone}>
        Delete Done tasks
      </button>
      <button className={style.buttonDeleteAll} onClick={deleteAll}>
        Delete All tasks
      </button>
    </div>
  );
}

export default FunctionBlock;
