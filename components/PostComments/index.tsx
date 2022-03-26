import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import data from '../../data';


interface PostComments {
  postId: number;
}

const userData = [2]

export const PostComments: React.FC<PostComments> = ({ postId }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
        
      </div>
    </Paper>
  );
};
