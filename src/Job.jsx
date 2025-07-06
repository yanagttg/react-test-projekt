export const Job = (props) => {
  return (
    <div>
      <div>
        <b>Место работы:</b> {props.title}
      </div>
      <div>
        <b>Должность:</b> {props.post}
      </div>
      <div>
        <b>Чем занималась</b>: {props.description}
      </div>
    </div>
  );
};