import { Link } from 'react-router-dom';
import './CourseMenu.css';

const CourseMenu = () => {
    return <div className="course-menu">
        <ul>
            <li>
                <Link to='/courses/all'>Ver todos</Link>
            </li>
            <li>
                <Link to='/courses/new'>Crear curso</Link>
            </li>
        </ul>
    </div>
};

export default CourseMenu;