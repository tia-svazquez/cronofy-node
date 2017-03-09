'use strict';

import nodefn from 'when/node';
import { reach } from 'origami';
import rest from '../lib/rest-client';

function refreshAccessToken (config, options, callback) {
  const settings = {
    method: 'POST',
    path: config.urls.api + '/oauth/token',
    entity: options
  };
  const result = rest(settings).fold(reach, 'entity');

  return nodefn.bindCallback(result, callback);
}

export default refreshAccessToken;
