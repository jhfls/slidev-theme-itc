import bg from '../assets/bg.png?url';
import '@slidev/client/styles/layouts-base.css';
import './layouts.css';
import './prism.css';

if (typeof document !== 'undefined') {
  document.documentElement.style.setProperty(
    '--slidev-default-background',
    `linear-gradient(#0005, #0008), url(${JSON.stringify(bg)})`,
  );
}
