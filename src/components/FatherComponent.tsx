interface Testing{
    attribute1 : string,
    attribute2: number
}

function Test(params:Testing) {
   return <h3>{params.attribute1}</h3>
}

function Cover() {
    return (
        <>
        <Test {...{attribute1: "ss", attribute2: 5}}/>
        </>
    )
}

interface EmployeeProps {
    name: string;
    age: number;
    country: string;
  }
  
  function Employee({name, age, country}: EmployeeProps) {
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{country}</h2>
      </div>
    );
  }
  
  export default function App() {
    const obj = {name: 'Alice', age: 29, country: 'Austria'};
  
    return (
      <div>
        <Employee {...obj} />
      </div>
    );
  }
  