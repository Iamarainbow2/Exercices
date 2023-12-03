const initOptions = {
    
    connectionString: "postgres://bhlusude:uF7SeAjj1JG4H_pTG1CxuBShYAx5VBGS@berry.db.elephantsql.com/bhlusude"
  };
  
  const pgp = require('pg-promise')(initOptions);
  
  const db = pgp();
  
  module.exports = db;
  