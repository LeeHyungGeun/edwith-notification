const cmd = require('node-cmd');

let count = 0;
setInterval(update, 60 * 1000);

function update() {
  console.log(count++);
  cmd.get(``,
    function(err, res, stderr) {
      const data = JSON.parse(res);
      if (err) {
        console.log(err);
        return;
      }
      const submissionConditionList = data.data.submissionConditionList;
      if (submissionConditionList && submissionConditionList.length > 0) {
        console.log('yes reviewer');
      } else {
        console.log('no reviewer')
      }
    }
  )
}