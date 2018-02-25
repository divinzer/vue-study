import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss() {

  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
      <div className="interactions">

        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table
         list={list}
         pattern={searchTerm}
         onDismiss={this.onDismiss}
         />
        {list.filter(isSearched(this.state.searchTerm)).map(item =>
        {
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={onHandleDismiss}
                  type="button"
                  value={searchTerm}
                >
                  Dismiss
                </button>
              </span>
            </div>
          );

        })}
        </div>
      </div>
    );
  }
}

const Search = ({value, onChange, children}) => {
  //
    return (
    <form>
    {children}<input
      type="text"
      value={value}
      onChange={onChange}
    />
    </form>
    )
}

const Table = ({ list, pattern, onDismiss }) =>
<div classNAme="table">
  {list.filter(isSearched(pattern)).map(item =>
    <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>
          {item.author}
        </span>
        <span style={{ width: '10%' }}>
          {item.num_comments}
        </span>
        <span style={{ width: '10%' }}>
          {item.points}
        </span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
# leanpub-end-insert
      </div>
  )}
</div>

const largeColumn = {
  with: '40%',
};

const midColumn = {
  width: '30%',
};

const smallColumn = {
  width: '10%',
};

class Button extends Component {
  render() {
    const {
      onClick,
      className,
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
      {children}
      </button>
    )
  }
}

export default App;
