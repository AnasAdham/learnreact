import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
      <Greet  name="Anas" heroName="The most boring">
        <p>This is children prop</p> 
        this is rendered under props.children
        </Greet>
        <Greet name="Somebody else" heroName="Batman" />
        <Greet name="Clark" heroName="Superman" />
       {/* <Welcome name="Diana" heroName="Spiderman"/> 
       <Welcome /> 
       <Counter />
       <Message /> */}
       <Welcome name='test' heroName='anothertest'/>
       <FunctionClick/>
       <ClassClick/>
       <EventBind/>

       
    </div>
  );
}

export default App;
