import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import Modal from 'react-modal'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('main'),
    Modal.setAppElement(document.getElementById('main')),
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.6)',
    Modal.defaultStyles.content.top = '110px'
)