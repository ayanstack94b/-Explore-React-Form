import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1>Explore Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField>
      <UnControlledField></UnControlledField> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
