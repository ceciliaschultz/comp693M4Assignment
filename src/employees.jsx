import React from 'react'
import ReactDOM  from 'react-dom'
import EmployeeList  from './EmployeeList.jsx'

// Render our EmployeeList component (which is the container of all our components)
ReactDOM.render(
    // to run in strict mode, we must wrap the EmployeeList component with React.StrictMode
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
)
