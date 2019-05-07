import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="beta-comp">
        <form role="search" id="searchform">
          <input type="text" name="s" placeholder="Nhập từ khóa..." />
          <button className="fa fa-search" type="submit" id="searchsubmit" />
        </form>
      </div>
    );
  }
}

export default Search;
