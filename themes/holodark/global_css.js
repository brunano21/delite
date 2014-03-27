define(function(){ return '\
.d-readonly *,\
.d-disabled *,\
.d-readonly,\
.d-disabled {\
  cursor: default;\
}\
.d-reset {\
  margin: 0;\
  border: 0;\
  padding: 0;\
  font: inherit;\
  line-height: normal;\
  color: inherit;\
}\
.d-inline {\
  display: inline-block;\
  border: 0;\
  padding: 0;\
  vertical-align: middle;\
}\
html,\
body {\
  width: 100%;\
  margin: 0;\
  padding: 0;\
}\
body {\
  overflow-x: hidden;\
  -webkit-text-size-adjust: none;\
  font-family: Helvetica;\
  font-size: 17px;\
  color: #ffffff;\
  background-color: #000000;\
}\
.d-popup {\
  position: absolute;\
  background-color: transparent;\
  margin: 0;\
  border: 0;\
  padding: 0;\
  -webkit-overflow-scrolling: touch;\
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
}\
.d-tooltip-dialog-popup {\
  -webkit-box-shadow: none;\
  -moz-box-shadow: none;\
  box-shadow: none;\
}\
'; } );
