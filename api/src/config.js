export default {
  secret: process.env.SECRET || `ilovescotchyscotch`,
  database: `mongodb://localhost/${process.env.INDEX}`,
}
