'use strict';

import 'semantic-ui';
import React from 'react';
import ReactDom from 'react-dom';

import CommentBox from './comment/CommentBox';

ReactDom.render(
		<CommentBox url="app/comments.json"/>,
		document.getElementById('app')
	);