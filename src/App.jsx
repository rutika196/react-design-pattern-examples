import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContainer } from './components/UserContainer';
import { ControlledForm } from './components/controlledForm/ControlledForm';
import { UncontrolledForm } from './components/uncontrolledForm/UncontrolledForm';
import { MouseTracker } from './components/MouseTracker/MouseTracker';
import { Toggle } from './components/Toggle/Toggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/Themeswitcher/ThemeSwitcher';
import { WindowSizeTracker } from './components/WindowSizeTracker/WindowSizeTracker';
import ErrorBoundary  from './components/ErrorBoundary/ErrorBoundary';
import BuggyComponent from './components/BuggyComponent/BuggyComponent';

function App() {
  const [count, setCount] = useState(0)

  const handleDownloadNotes = () => {
    // Link to the PDF file
    const pdfUrl = '/assets/react_design_patterns_notes.pdf'; 
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'react_design_patterns_notes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (

    <>
      <ThemeProvider>

        <h1>React Design Patterns Learning Lab</h1>
        <div className="pattern-description">
          Welcome to this interactive exploration of essential React design patterns! These examples demonstrate best practices for building maintainable, scalable React applications.
        </div>
        
        <div className="action-buttons">
          <button onClick={handleDownloadNotes} className="download-btn">
            Download Notes
          </button>
          <ThemeSwitcher />
        </div>
        
        <div className="patterns-grid">
          <section className="pattern-section">
            <h2>Container-Presentational Pattern</h2>
            <div className="pattern-description">
              This pattern separates data fetching (container) from data display (presentational). The UserContainer fetches data and passes it to presentational components that focus only on rendering.
            </div>
            <UserContainer />
          </section>
          
          <section className="pattern-section">
            <h2>Controlled vs Uncontrolled Components</h2>
            <div className="pattern-description">
              Compare two approaches to form handling in React: controlled components (React manages form state) vs uncontrolled components (DOM manages form state).
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem" }}>
              <ControlledForm />
              <UncontrolledForm />
            </div>
          </section>
          
          <section className="pattern-section">
            <h2>Render Props Pattern</h2>
            <div className="pattern-description">
              Render Props allow component logic to be shared by taking a function as a prop that returns a React element. Here, MouseTracker shares mouse position data with any component.
            </div>
            <div>
              <MouseTracker render={({ x, y }) => (
                <p>Mouse Position: ({x}, {y})</p>
              )} />
            </div>
          </section>

          <section className="pattern-section">
            <h2>Compound Components Pattern</h2>
            <div className="pattern-description">
              Compound components work together to form a complete UI. This pattern provides a more declarative and flexible API through implicit state sharing.
            </div>
            <div>
              <Toggle>
                <Toggle.On>ON</Toggle.On>
                <Toggle.Off>OFF</Toggle.Off>
                <Toggle.Button />
              </Toggle>
            </div>
          </section>

          <section className="pattern-section">
            <h2>Custom Hooks Pattern</h2>
            <div className="pattern-description">
              Custom hooks allow you to extract component logic into reusable functions. This WindowSizeTracker uses a custom hook to monitor and respond to window size changes.
            </div>
            <div>
              <WindowSizeTracker />
            </div>
          </section>

          <section className="pattern-section">
            <h2>Error Boundary Pattern</h2>
            <div className="pattern-description">
              Error Boundaries catch JavaScript errors in their child component tree and display a fallback UI instead of crashing. Click the button below to trigger an error.
            </div>
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <ErrorBoundary>
                <BuggyComponent />
              </ErrorBoundary>
            </div>
          </section>
        </div>
        
        <footer style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid #E5E5EA", paddingTop: "1rem" }}>
          <p>React Design Patterns Teaching Resource</p>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App
