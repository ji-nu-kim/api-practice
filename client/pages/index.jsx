import React from 'react';
import MsgList from '../components/MsgList';
import {fetcher} from '../queryClient';

const Home = ({smsgs, users}) => {
  return <>
    <h1>Simple SNS</h1>
    <MsgList smsgs={smsgs} users={users}/>
  </>
}

export const getServerSideProps = async () => {
  const smsgs = await fetcher(GET_MESSAGES);
  const users = await fetcher(GET_USERS);
  return {
    props: {smsgs, users}
  }
}

export default Home;