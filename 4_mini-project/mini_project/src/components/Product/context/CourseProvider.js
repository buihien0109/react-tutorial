import CourseContext from './CourseContext';
import { courses, topics } from '../data';

function CourseProvider({ children }) {
    let value = { courses, topics }
    return (
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseProvider