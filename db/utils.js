import connection from "./index.js";
const query = (queryStr, values) => {
return new Promise((resolve, reject) => {
connection.query(queryStr, values, (err, result) => {
if (err) {
reject (err)
} else {
resolve (result);
}
})  
})
}
export default query;