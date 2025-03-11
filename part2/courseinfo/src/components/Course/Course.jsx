import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const Course = (props) => {
  const { course } = props;
  return <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
}

export default Course;