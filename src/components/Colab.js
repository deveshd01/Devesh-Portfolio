import React, { useState } from 'react';
import { colabNotebooks } from '../data';

const Colab = () => {
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNotebook = (notebook) => {
    setSelectedNotebook(notebook);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotebook(null);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="colab-section">
      <div className="container">
        <h2 className="section-title">Colab Notebooks</h2>
        <p className="section-subtitle">
          A collection of my Google Colab notebooks covering various topics in data science, machine learning, and programming.
        </p>
        
        <div className="colab-grid">
          {colabNotebooks.map((notebook, index) => (
            <div key={index} className="colab-card" onClick={() => openNotebook(notebook)}>
              <div className="colab-card-content">
                <h3 className="colab-title">{notebook.title}</h3>
                <div className="colab-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="colab-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for notebook preview */}
      {isModalOpen && selectedNotebook && (
        <div className="colab-modal-overlay" onClick={closeModal}>
          <div className="colab-modal" onClick={(e) => e.stopPropagation()}>
            <div className="colab-modal-header">
              <h3 className="colab-modal-title">{selectedNotebook.title}</h3>
              <button className="colab-close-button" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="colab-modal-content">
              <div className="colab-preview">
                <div className="colab-preview-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <h4 className="colab-preview-title">Google Colab Notebook</h4>
                <p className="colab-preview-description">
                  This notebook contains interactive code, visualizations, and detailed explanations. 
                  Click the button below to open it in Google Colab for the full interactive experience.
                </p>
                <div className="colab-preview-features">
                  <div className="colab-feature">
                    <span className="colab-feature-icon">📊</span>
                    <span>Interactive Code Execution</span>
                  </div>
                  <div className="colab-feature">
                    <span className="colab-feature-icon">📈</span>
                    <span>Data Visualizations</span>
                  </div>
                  <div className="colab-feature">
                    <span className="colab-feature-icon">📝</span>
                    <span>Detailed Explanations</span>
                  </div>
                  <div className="colab-feature">
                    <span className="colab-feature-icon">🔧</span>
                    <span>Editable Code Cells</span>
                  </div>
                </div>
                <button 
                  className="colab-open-button"
                  onClick={() => openInNewTab(selectedNotebook.url)}
                >
                  <span>Open in Google Colab</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V7H17.59L7.76,16.83L9.17,18.24L19,8.41V12H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Colab; 