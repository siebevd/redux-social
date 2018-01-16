'use strict';

var assert = require('chai').assert;
var reduxSocial = require('../index');

describe('reduxSocial', function() {
	it('App should return string', function(){
		return assert.equal(reduxSocial('hello'),'hello');
	});
});
