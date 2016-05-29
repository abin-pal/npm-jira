#!/usr/bin/env node

var opn = require('opn');

var jiraID = process.argv[2];

function openUrlOnBrowser(jiraID){
	opn('https://tools.sapient.com/jira/browse/'+jiraID, {wait: false});
}

function openIssuesUrl(){
	opn('https://tools.sapient.com/jira/issues', {wait: false});
}

var compute = function() {
  if(jiraID!=null)
    openUrlOnBrowser(jiraID);
  else
    openIssuesUrl();
};

compute();