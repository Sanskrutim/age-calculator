import { useState } from 'react'

function App() {

  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  function calculateAge() {
    const datebirth = new Date(birthDate);
    const date = new Date();
    const currentYear = date.getFullYear();
    const birthYear = datebirth.getFullYear();
    const ageCalculated = currentYear - birthYear;
    setAge(ageCalculated);
  }

  return (
    <>
    <div className="h-screen bg-gray-100 ">
      <div className="p-4 space-y-4 grid justify-items-center content-center">

        <p className=' text-4xl font-bold'>Age Calculator</p>
        <br></br>
        <p className='text-xl font-bold'>Enter your date of birth</p>
        <input
          type="date"
          className="p-2 rounded border shadow-inner"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded shadow" onClick={calculateAge}>
          Calculate Age
        </button>
        {age && (
        <div className="text-2xl text-black">
              You are <span className="font-bold text-black">{age}</span> years old.
        </div>
        )}
      </div> 
    </div>
    </>
  )
}

export default App
