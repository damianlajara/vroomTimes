import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'Recharts';
import MdClose from 'react-icons/lib/md/close';
import moment from 'moment';
import { Header } from '../components';
import Select from 'react-select';

const options = [
  { value: 'day', label: 'Today' },
  { value: 'week', label: 'This Week' }
];

const today = new Date().toISOString();
const thisMonday = moment(today).day('monday');
const thisSunday = moment(today).day(7); // Monday(0) + 6 days(tues-sat) = 7(sunday)

export default class Revisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'day', // Or week
      filterText: 'Today' // Or This Week
    }
  }
  
  validPost = (post) => post.revisions > 0 && post.lastUpdatedAt;
  
  filterTodaysPosts = () => this.props.posts.filter((post) => this.validPost(post) && moment(post.lastUpdatedAt).isSame(today, 'day'));

  filterWeeksPosts = () => this.props.posts.filter((post) => this.validPost(post) && moment(post.lastUpdatedAt).isBetween(thisMonday, thisSunday));
  
  getFilteredPosts = () => this.state.filter === 'day' ? this.filterTodaysPosts() : this.filterWeeksPosts()
  
  formattedPosts = () => this.getFilteredPosts().map((post) => ({ name: post.title, revisions: post.revisions }));
  
  
  displayContent = () => {
    const posts = this.getFilteredPosts();
    if(posts.length > 0) {
      return this.renderGraph();
    } else {
      return this.renderEmptyMessage();
    }
  }
  
  renderGraph = () => {
    return (
      <BarChart width={730} height={150} data={this.formattedPosts()}>
        <Bar dataKey="revisions" fill="#b56969" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    );
  }
  
  renderEmptyMessage = () => {
    return (
      <h3 className="empty-message">Oh No! You have not updated any posts recently. Check back soon.</h3>
    );
  }

  handleFilterChange = ({ value, label }) => {
    console.log("Selected: ", value, label);
    this.setState({ filter: value, filterText: label });
  }
  
  render() {
    console.log("todays posts: ", this.filterTodaysPosts());
    console.log("weeks posts: ", this.filterWeeksPosts());
    return (
      <div>
        <Header />
        <div className="container-view">
          <div className="main-content">
            <div className="close-icon">
              <MdClose size={35} onClick={() => this.props.onClose(false)} />
            </div>
            <div className="revisions">
              <h1 className="title">Revisions {this.state.filterText}</h1>
              <Select
                className="filterable-dropdown"
                name="filter"
                clearable={false}
                autosize={false}
                value={this.state.filter}
                options={options}
                onChange={this.handleFilterChange}
              />
              {this.displayContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
