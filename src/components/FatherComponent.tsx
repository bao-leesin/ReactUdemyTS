interface Testing{
    attribute1 : string,
    attribute2: number,
    children?: JSX.Element
}

function Test(params:Testing) {
   return( 
    <>
   <h3>{params.attribute1}</h3>
   {params.children}
    </>
   )
}

export default function Cover() {
    return (
        <>
        <Test {...{attribute1: "ss", attribute2: 5}}>
       <button>HGSHGFHS</button>
       </Test>
        </>
    )
}

