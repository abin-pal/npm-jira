#!/usr/bin/env node

var opn = require('opn');

var jiraID = process.argv[2];

function openUrlOnBrowser(jiraID){
	opn('https://tools.sapient.com/jira/browse/'+jiraID, {wait: false});
}

var compute = function() {
  if(jiraID!=null)
    openUrlOnBrowser(jiraID);
  else
    console.error('Please pass the JIRA ID as argument');
};

compute();