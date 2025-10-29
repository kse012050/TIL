import { useState } from 'react'
import Editor from "./Editor"

function App() {
  const [inputs, setInputs] = useState({ comment: '' });

  return (
    <>
      <Editor data={inputs.comment} setInputs={setInputs} />
    </>
  )
}

export default App
