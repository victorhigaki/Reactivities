import React from 'react';
import { AxiosResponse } from 'axios';
import { Message } from 'semantic-ui-react';

interface IProps {
  error: AxiosResponse;
  text: string;
}

export const ErrorMessage: React.FC<IProps> = ({ error, text }) => {
  return (
    <div>
      <Message error>
        <Message.Header>{error.statusText}</Message.Header>
        {text && <Message.Content content={text} />}
      </Message>
    </div>
  );
};
