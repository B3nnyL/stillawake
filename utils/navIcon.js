const NavIcon = () => {
  return (
    <div className="nav-icon-container">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <style jsx>
        {`
          .nav-icon-container {
            position: relative;
            width: 20px;
            height: 20px;
          }
          .bar {
            width: 20px;
            height: 2px;
            position: absolute;
            background: #999;
          }
          .bar:nth-child(3n + 2) {
            width: 20px;
            height: 2px;
            top: 7px;
            position: absolute;
            background: #999;
          }
          .bar:nth-child(3n + 3) {
            width: 20px;
            height: 2px;
            top: 14px;
            position: absolute;
            background: #999;
          }
        `}
      </style>
    </div>
  );
};

export default NavIcon;
