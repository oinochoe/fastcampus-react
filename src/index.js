import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

// import App from './App';
import Counter from './Counter';

Sentry.init({
    dsn: 'https://87f85b6de84046158b59bd1b264f9314@o450153.ingest.sentry.io/5434333',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
});

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    rootElement,
);
