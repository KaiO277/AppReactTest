import { useEffect, useState } from "react";

function StudentList() {
    const [students, setStudents] = useState([]);

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/student/`)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then(students => {
    //             setStudents(students);
    //         })
    //         .catch(error => {
    //             console.error('There was a problem with the fetch operation:', error);
    //         });
    // }, []);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/student/`)
        .then(res=> res.json())
        .then(students=> {
            setStudents(students)
        })
    },[])

    return (
        <div>
            {students.map((student, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <h4>Name: {student.name}</h4>
                    <p>Favorite Color: <span style={{ color: student.color }}>{student.color}</span></p>
                    <img src={student.photo_url} alt={student.name} style={{ width: '100px', height: '100px' }} />
                </div>
            ))}
        </div>
    );
}

export default StudentList;
