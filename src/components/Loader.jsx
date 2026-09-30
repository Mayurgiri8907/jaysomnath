import Logo from '../images/loding-logo.jpeg';

export default function Loader({ show }) {
  return (
    <div
      className={'loader' + (show ? '' : ' hide')}
      role="status"
      aria-live="polite"
    >
      <div className="pulse">
        <img
          src={Logo}
          className="rounded-full object-cover"
          width={200}
          height={200}
          alt="Jay Somnath"
        />
      </div>

      <h2>Jay Somnath</h2>
      <p>Financial Services</p>

      <div className="bar">
        <span />
      </div>
    </div>
  );
}