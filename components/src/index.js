import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDeatail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDeatail 
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!" 
        avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDeatail 
        author="Alex" 
        timeAgo="Today at 2:00AM" 
        content="I like the subject" 
        avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDeatail author="Jane" 
        timeAgo="Yesterday at 5:00PM" 
        content="I like the writing"
        avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));