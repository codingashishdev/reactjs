import "./App.css";
import Card from "./components/Card.jsx"

function App() {

    let obj = {
        "username": "codingashishdev",
        "password": "pwd"
    }

    let subjects = ["Math", "English", "Physics", "Chemistry"]

    return (
        <>
            <div>
                <h1 className="bg-blue-500 p-4 rounded-xl">Tailwindcss</h1>
            </div>

            <Card allSubjects={subjects}/>
            <Card name="Ashish Prajapati" />
            <Card name="Experiment" />
        </>
    );
}

export default App;
