const { ApolloServer } = require("apollo-server");
// import '../utils/constants'

let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "muk@123",
});

con.query("USE new_schema", function (err) {
  if (err) throw err;
  console.log("using db new_schema");
});

const displayUser = (id) => {
  con.query(`SELECT * FROM user_detail WHERE id = ${id}`, function (err, result) {
    if (err) throw err;
    console.log(result);
    ret = result;
  });
  return ret;
};

const addPhoto = (sql, id) => {
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  return displayUser(id);
};


const resolvers = {
  Query: {
    getUserDetails: (parent, args) => displayUser(args.id),
  },
  Mutation: {
    addProfilePicture: (parent, args) => {
      let sql = `UPDATE user_detail SET photo = '${args.photo}' WHERE id = ${args.id}`;
      return addPhoto(sql,args.id);
    },
  },
};


const fs = require("fs");
const path = require("path");

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));