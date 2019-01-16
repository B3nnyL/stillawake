const SearchIcon = () => {
  return (
    <div className="search-icon-container">
      <div className="circle" />
      <div className="bar" />
      <style jsx>
        {`
          .search-icon-container {
            position: relative;
            width: 18px;
            height: 18px;
          }
          .circle {
            width: 14px;
            height: 14px;
            border: 1px #999 solid;
            border-radius: 50%;
          }
          .bar {
            width: 5px;
            height: 8px;
            position: absolute;
            left: 15px;
            bottom: -2px;
            border-left: 1px #999 solid;
            transform: rotate(-40deg);
          }
        `}
      </style>
    </div>
  );
};

export default SearchIcon;
