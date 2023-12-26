import AppWrapper from "./components/AppWrapper";
import JsonEditor from "./components/JsonEditor";
import Form from "./components/Form";
import FormWrapper from "./components/FormWrapper";
import { JsonProvider } from "./contexts/JsonContext";
import SelectField from "./components/SelectField";

function App() {
  return (
    <JsonProvider>
        <AppWrapper>
          <JsonEditor />
          <FormWrapper>
            <Form />
          </FormWrapper>
        </AppWrapper>
    </JsonProvider>
  );
}

export default App;
