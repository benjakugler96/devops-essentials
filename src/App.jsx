import { useState } from 'react';
import { FaCode, FaCogs, FaVial, FaCloudUploadAlt } from 'react-icons/fa';
import './App.css';
import { version } from '../package.json';

export default function PipelineVisualizer() {
  const [darkMode, setDarkMode] = useState(false);

  const steps = [
    { label: 'Code', icon: <FaCode />, color: 'blue' },
    { label: 'Build', icon: <FaCogs />, color: 'green' },
    { label: 'Test', icon: <FaVial />, color: 'orange' },
    { label: 'Deploy', icon: <FaCloudUploadAlt />, color: 'purple' },
  ];

  return (
    <div className={`pipeline-container ${darkMode ? 'dark' : 'light'}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="pipeline">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <div className={`icon ${step.color}`}>{step.icon}</div>
            <span className="label">{step.label}</span>
            {i < steps.length - 1 && <div className="connector" />}
          </div>
        ))}
      </div>
      <p className="footer">🚀 Automating the journey from Code to Cloud</p>
      <p className="footer">{version}</p>
    </div>
  );
}
