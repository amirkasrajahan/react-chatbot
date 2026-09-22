import { Header } from '../../components/Header.jsx';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/images/icons/404-favicon.png" />
      <title>404 Not Found</title>
      <Header />
      <div className="not-found-page">
        <h1 className="not-found-title">404 Not Found</h1>
        <p className="not-found-message">The page you are looking for does not exist.</p>
      </div>
    </>
  )
}