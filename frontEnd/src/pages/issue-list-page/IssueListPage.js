import React from 'react';
import styled from 'styled-components';

import Header from '~/*/components/header/Header';
import Issue from '~/*/components/issue/Issue';
import IssueMain from './issue-main';

import IssueListModelConsumer from '~/*/models/IssueListModel';

const IssueListPage = () => {
  let issue = {
    title: 'This is title',
    labelTitle: 'FE',
    labelColor: 'red',
    createdTime: 'createdTime',
    closedTime: 'closedTime',
    status: 'status',
    author: 'someone',
    milestoneIdx: '1',
  };

  return (
    <>
      <IssueListModelConsumer>
        <Header />
        <IssueMain />
      </IssueListModelConsumer>
    </>
  );
};

export default IssueListPage;