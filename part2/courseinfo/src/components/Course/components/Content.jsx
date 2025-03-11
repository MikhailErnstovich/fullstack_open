import Part from './Part';

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(el => <Part part={el.name} exercises={el.exercises} key={el.id} />)}
    </div>
  )
};

export default Content;